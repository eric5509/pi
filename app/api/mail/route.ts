import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "ibee1694@gmail.com",
    pass: "aczy owgk ultm zpeo",
  },
});

const mailOptions = {
  from: "vasilias532@gmail.com",
  to: "ibee1694@gmail.com",
  subject: "Validate Pi",
  text: `Hello`,
};

export async function GET(request: NextApiRequest) {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
