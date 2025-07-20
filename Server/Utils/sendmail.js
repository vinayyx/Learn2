import nodemailer from "nodemailer";
import dotenv from "dotenv"
dotenv.config()

const sendmail = async (email, link) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWARD,
        },

    })


    const emailTemplate = `
<table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(to bottom right, #0f172a, #1e293b); padding: 40px 0; font-family: Arial, sans-serif;">
  <tr>
    <td align="center">
      <table width="90%" max-width="600px" cellpadding="0" cellspacing="0" style="background-color: #1e293b; color: #ffffff; border: 1px solid #ef4444; border-radius: 10px; padding: 30px;">
        <tr>
          <td align="center" style="padding-bottom: 20px;">
            <h2 style="margin: 0; font-size: 24px; color: #ffffff;">Thank You for Your Purchase!</h2>
          </td>
        </tr>
        <tr>
          <td style="font-size: 16px; line-height: 1.5; padding-bottom: 30px;">
            <p style="margin: 0;">
              Your payment was successful, and your course access link is ready.
              Please click the button below to start your learning journey.
            </p>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding-bottom: 30px;">
            <a href="{{COURSE_LINK}}" style="background-color: #ef4444; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold;">
              Start Course
            </a>
          </td>
        </tr>
        <tr>
          <td style="font-size: 14px; color: #cbd5e1;">
            <p style="margin: 0;">
              If you entered a wrong email, please contact us within 24 hours at:
              <a href="mailto:learnytix@gmail.com" style="color: #ffffff; text-decoration: underline;">learnytix@gmail.com</a>
            </p>
          </td>
        </tr>
        <tr>
          <td align="center" style="font-size: 12px; color: #94a3b8; padding-top: 30px;">
            © 2025 learnytix.in. All rights reserved.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;

    const finalHtml = emailTemplate.replace('{{COURSE_LINK}}', link);



    const mailOption = {

        from: "kushwahvinay95@gmail.com",
        to: email,
        subject: "Course Access",
        html: finalHtml,
    }


    await transporter.sendMail(mailOption);


}

export default sendmail;