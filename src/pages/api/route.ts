import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, email, subject, message } = await request.json();

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'souvik_tito@outlook.com',
            subject: `New Contact: ${subject}`,
            html: `
        <h1>New message from ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { message: 'Error sending email', error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}