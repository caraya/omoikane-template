import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import React from 'react';

export abstract class BaseMailer {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'localhost',
      port: parseInt(process.env.SMTP_PORT || '1025'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: process.env.SMTP_USER ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      } : undefined,
    });
  }

  protected async sendMail(to: string, subject: string, template: React.ReactElement) {
    const html = await render(template);
    const text = await render(template, { plainText: true });

    await this.transporter.sendMail({
      from: process.env.MAIL_FROM || 'noreply@example.com',
      to,
      subject,
      html,
      text,
    });
  }
}
