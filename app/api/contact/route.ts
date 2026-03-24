import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  
  // In a real app, you would save this to a database here
  console.log("Form received:", body);

  return NextResponse.json({ 
    success: true, 
    message: `Thank you for your message, ${body.name}!` 
  });
}