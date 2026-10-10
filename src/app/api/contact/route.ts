import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: "All fields are required." },
                { status: 400 }
            );
        }

        // Forward to formsubmit.co
        const response = await fetch("https://formsubmit.co/ajax/anshu402pandey@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
                _subject: `New inquiry from ${name} — Portfolio Contact`,
            }),
        });

        const data = await response.json();

        if (data.success === "true" || data.success === true) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json(
                { success: false, error: data.message || "Failed to send message." },
                { status: 500 }
            );
        }
    } catch {
        return NextResponse.json(
            { success: false, error: "Internal server error." },
            { status: 500 }
        );
    }
}
