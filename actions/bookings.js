"use server";

import { db } from "@/lib/prisma";
import { clerkClient } from "@clerk/nextjs/server";
import { google } from "googleapis";

export async function createBooking(bookingData) {
  try {
    const event = await db.event.findUnique({
      // check event exist or not in DB
      where: { id: bookingData.eventId },
      include: { user: true },
    });
    if (!event) {
      throw new Error("Event not found");
    }
    // using google calender API to generate meet link and add to calender
    const { data } = await clerkClient.users.getUserOauthAccessToken(
      event.user.clerkUserId,
      "oauth_google"
    );

    const token = data[0]?.token;

    if (!token) {
      throw new Error("Event creator has not connected Google Calender");
    }

    // set up google OAuth client
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: token });

    const calender = google.calendar({ version: "v3", auth: oauth2Client });

    const meetResponse = await calender.events.insert({
      calendarId: "primary",
      conferenceDataVersion: 1,
      requestBody: {
        summary: `${bookingData.name} - ${event.title}`,
        description: bookingData.additionalInfo,
        start: { dateTime: bookingData.startTime },
        end: { dateTime: bookingData.endTime },
        attendees: [
            { email: bookingData.email, sendNotifications: true },
            { email: event.user.email, sendNotifications: true }
        ],
        conferenceData: {
          createRequest: { requestId: `${event.id}-${Date.now()}` },
        },
      },
    });

    const meetLink = meetResponse.data.hangoutLink;
    const googleEventId = meetResponse.data.id;
    
    const booking = await db.booking.create({
        data: {
          eventId: event.id,
          userId: event.userId,
          name: bookingData.name,
          email: bookingData.email,
          startTime: bookingData.startTime,
          endTime: bookingData.endTime,
          additionalInfo: bookingData.additionalInfo,
          meetLink,
          googleEventId,
        },
      });
  
      return { success: true, booking, meetLink };
    } catch (error) {
      console.error("Error creating booking:", error);
      return { success: false, error: error.message };
    }
  

}
