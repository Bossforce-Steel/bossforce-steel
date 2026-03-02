import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, interest, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    console.log('Attempting to send email via Resend...');
    const { data, error } = await resend.emails.send({
      from: 'Bossforce Steel <onboarding@resend.dev>',
      to: ['bossforcesteel@gmail.com'],
      subject: `New Inquiry from ${name} - ${interest}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #ea580c;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Interest:</strong> ${interest}</p>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({ message: error.message, error });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Unexpected Server Error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
