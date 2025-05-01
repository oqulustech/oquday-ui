"use client";

import { useEffect, useState } from 'react';

export default function Greeting({ name = "Guest", initialHour }) {
  const [greeting, setGreeting] = useState(() => {
    // Compute initial greeting from props (server-provided)
    if (initialHour < 12) return "Good morning";
    else if (initialHour < 18) return "Good afternoon";
    else return "Good evening";
  });

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      let newGreeting;

      if (hour < 12) newGreeting = "Good morning";
      else if (hour < 18) newGreeting = "Good afternoon";
      else newGreeting = "Good evening";

      setGreeting(newGreeting);
    };

    const interval = setInterval(updateGreeting, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return <h1 className='text-dark'>{greeting} {name}!</h1>;
}