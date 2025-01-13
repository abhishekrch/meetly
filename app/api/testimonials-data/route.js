export async function GET() {
    const testimonials = [
      {
        id: 1,
        name: "Vanshika",
        role: "Product Manager",
        content: "Meetly transformed our remote team's scheduling process. The Google Calendar integration is seamless!",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
      },
      {
        id: 2,
        name: "Ayush",
        role: "Freelance Consultant",
        content: "As a consultant working across time zones, Meetly has been invaluable. My clients love how professional it looks.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
      },
      {
        id: 3,
        name: "Priyanka",
        role: "Tech Lead",
        content: "The availability management is fantastic. It respects my working hours and prevents double bookings.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
      },
      {
        id: 4,
        name: "Kriti",
        role: "HR Director",
        content: "We use Meetly for all our recruitment interviews. The automated reminders have reduced no-shows significantly.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
      }
    ];
  
    return Response.json(testimonials);
    
  }