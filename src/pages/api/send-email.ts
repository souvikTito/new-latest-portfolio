import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev', // Change to your verified domain later
            to: 'souvik_tito@outlook.com',
            subject: `New Contact: ${subject}`,
            html: `
        <h1>New message from ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email sending error:', error);
        return res.status(500).json({
            message: 'Error sending email',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}