import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Send login request to the Go backend
    const backendResponse = await fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // Check if the backend responded with success
    if (backendResponse.ok) {
      console.log("Connection to backend was successful.");
      const data = await backendResponse.json();
      return NextResponse.json(data, { status: 200 }); // Forward success response to the frontend
    } else {
      console.log("Backend returned an error:", backendResponse.status);
      const errorData = await backendResponse.json();
      return NextResponse.json(
        { message: errorData.message || "Login failed" },
        { status: 401 }
      );
    }
  } catch (error) {
    // Catch errors related to the connection or request failures
    console.error("Cannot connect to the backend endpoint:", error);
    return NextResponse.json(
      { message: "Cannot find the backend endpoint" },
      { status: 500 }
    );
  }
}
