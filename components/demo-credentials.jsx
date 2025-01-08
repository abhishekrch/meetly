"use client";

import { useState } from "react";
import { Tabs } from "./ui/tabs";
import { CardContent, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Image from "next/image";

const DemoPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed right-4 top-32 z-50 w-80 bg-white rounded-lg shadow-xl 
    border border-gray-200 p-6 animate-fade-in"
    >
      <Tabs defaultValue="account" className="w-full">
        <button
          onClick={handleClose}
          className="absolute right-3 top-2 text-gray-500
        hover:text-gray-700 transition-colors"
        >
          <Image src="/cross.svg" width={20} height={20} alt="cross icon" />
        </button>

        <CardTitle>
            Test User Credentials        
        </CardTitle>
        <CardContent className="space-y-2 space-x-0 mt-3">
          <div className="space-y-1">
            <Label htmlFor="name">Email</Label>
            <Input id="name" defaultValue="etherabhishek@gmail.com" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="testusermeetly" />
          </div>
        </CardContent>
      </Tabs>
    </div>
  );
};

export default DemoPopup;
