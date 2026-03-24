'use client'; // Required for interactivity

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calling our /api/contact endpoint
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message }),
    });

    const data = await response.json();
    alert(data.message); // Show the response from the server
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border rounded-xl bg-gray-50 max-w-md">
      <h3 className="text-xl font-bold mb-4">Contact Us</h3>
      <input 
        type="text" 
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea 
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Send Message
      </button>
    </form>
  );
}