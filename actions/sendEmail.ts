"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend"
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid email"
        }
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }

    let data = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'aelsaied3@gatech.edu',
        subject: 'Message from contact form',
        reply_to: senderEmail as string,
        react: React.createElement(ContactFormEmail, {
            message: message as string,
            senderEmail: senderEmail as string
        })
    });
    if (data.error) {
        console.log("sent error")
        return {
            error: data.error
        }
    }
    console.log("sent data")
    return {
        data: data
    }
}