import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type ApiResponse = { ok: boolean; message: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' })
  }

  const { name, email, subject, message } = req.body || {}
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, message: 'Missing required fields' })
  }

  try {
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT || 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const toAddress = process.env.CONTACT_TO || smtpUser

    if (!smtpHost || !smtpUser || !smtpPass) {
      return res.status(500).json({ ok: false, message: 'Email is not configured on server' })
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    })

    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, '<br/>')}</p>
    `

    await transporter.sendMail({
      from: `Portfolio Contact <${smtpUser}>`,
      to: toAddress,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html,
    })

    return res.status(200).json({ ok: true, message: 'Email sent' })
  } catch (error) {
    console.error('Email send failed', error)
    return res.status(500).json({ ok: false, message: 'Failed to send email' })
  }
}


