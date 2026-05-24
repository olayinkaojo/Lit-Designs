import { NextResponse } from 'next/server'
import { SITE } from '@/lib/constants'

interface ContactPayload {
  name: string
  email: string
  company?: string
  phone?: string
  services: string[]
  budget?: string
  message: string
  timeline?: string
}

function buildHtml(data: ContactPayload): string {
  const servicesList = data.services.length
    ? data.services.map((s) => `<li>${s}</li>`).join('')
    : '<li>Not specified</li>'

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; background:#080808; color:#ffffff; margin:0; padding:0; }
    .wrap { max-width:600px; margin:0 auto; padding:40px 32px; }
    .header { border-bottom:1px solid rgba(93,194,65,0.3); padding-bottom:24px; margin-bottom:32px; }
    .logo { font-size:22px; font-weight:300; letter-spacing:0.08em; color:#fff; }
    .logo span { color:#5DC241; }
    .tag { display:inline-block; background:rgba(93,194,65,0.12); color:#5DC241; font-size:11px; letter-spacing:0.15em; text-transform:uppercase; padding:4px 10px; margin-bottom:16px; }
    h1 { font-size:28px; font-weight:300; color:#fff; margin:0 0 8px; }
    .meta { font-size:12px; color:rgba(255,255,255,0.35); }
    .field { margin-bottom:20px; }
    .label { font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.3); margin-bottom:6px; }
    .value { font-size:14px; color:rgba(255,255,255,0.8); line-height:1.6; }
    .message-box { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); padding:20px; font-size:14px; color:rgba(255,255,255,0.7); line-height:1.7; }
    .services ul { margin:0; padding-left:16px; color:rgba(255,255,255,0.7); font-size:14px; line-height:1.8; }
    .cta { margin-top:32px; padding-top:24px; border-top:1px solid rgba(255,255,255,0.07); }
    .cta a { display:inline-block; background:#5DC241; color:#080808; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; padding:12px 24px; text-decoration:none; font-weight:500; }
    .footer { margin-top:40px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.05); font-size:11px; color:rgba(255,255,255,0.2); }
  </style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <div class="logo"><span>Lit</span> Creative Designs</div>
  </div>
  <div class="tag">New Project Inquiry</div>
  <h1>Message from ${data.name}</h1>
  <p class="meta">${new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>

  <div style="margin-top:32px; display:grid; gap:16px;">
    <div class="field">
      <div class="label">Name</div>
      <div class="value">${data.name}</div>
    </div>
    <div class="field">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${data.email}" style="color:#5DC241;">${data.email}</a></div>
    </div>
    ${data.company ? `<div class="field"><div class="label">Company / Brand</div><div class="value">${data.company}</div></div>` : ''}
    ${data.phone ? `<div class="field"><div class="label">Phone</div><div class="value">${data.phone}</div></div>` : ''}
    <div class="field services">
      <div class="label">Services Needed</div>
      <ul>${servicesList}</ul>
    </div>
    ${data.budget ? `<div class="field"><div class="label">Budget Range</div><div class="value">${data.budget}</div></div>` : ''}
    ${data.timeline ? `<div class="field"><div class="label">Timeline</div><div class="value">${data.timeline}</div></div>` : ''}
    <div class="field">
      <div class="label">Project Brief</div>
      <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
    </div>
  </div>

  <div class="cta">
    <a href="mailto:${data.email}">Reply to ${data.name}</a>
  </div>

  <div class="footer">
    Received via litcreativedesigns.com contact form · ${SITE.legalName}
  </div>
</div>
</body>
</html>
  `.trim()
}

export async function POST(req: Request) {
  try {
    const body: ContactPayload = await req.json()

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json({ error: 'Server configuration error. Please contact us directly.' }, { status: 500 })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Use Resend's shared domain until litcreativedesigns.com is verified with Resend.
        // After DNS verification, change to: 'Lit Creative Designs <noreply@litcreativedesigns.com>'
        from: 'Lit Creative Designs <onboarding@resend.dev>',
        to: [SITE.email],
        reply_to: body.email,
        subject: `New inquiry from ${body.name}${body.company ? ` · ${body.company}` : ''}`,
        html: buildHtml(body),
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send message. Please try WhatsApp or email directly.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Unexpected error. Please try WhatsApp or email directly.' }, { status: 500 })
  }
}
