"use client"

import React from 'react'
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {

    const { ref } = useSectionInView("Contact");

    return (
        <motion.section id = "contact" ref = {ref} className = "scroll-mt-28 mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        viewport={{
            once: true,
        }}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className = "text-gray-700 -mt-6 dark:text-white/80">Please contact me directly at <a className = "underline" href = "mailto:aelsaied3@gatech.edu">aelsaied3@gatech.edu</a> or through this form.</p>

            <form className = "mt-10 flex flex-col dark:text-black"
            action={ async formData => {
                const data = await sendEmail(formData);
                console.log(data);
                if (data.error) {
                    toast.error("Problem sending email.");
                    return;
                }
                toast.success("Email sent successfully!");
            }}
            >
                <input name = "senderEmail" className = "h-14 px-4 rounded-lg borderBlack focus:outline-gray-900 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" type="email" placeholder = "Your email" required maxLength={500} />
                <textarea name = "message" className = "h-52 my-3 rounded-lg borderBlack p-4 focus:outline-gray-900 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all" placeholder = "Your message" required maxLength={5000}/>
                <SubmitBtn />
            </form>
        </motion.section>
    )
}
