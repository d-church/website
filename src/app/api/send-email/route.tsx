import { NextResponse } from "next/server";
import { Resend } from "resend";

import { EmailTemplate } from "@/components/email-template/email-template";
import { type TSendMessage } from "@/schema/send-message.schema";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  const templateParams = JSON.parse(await request.text()) as TSendMessage;
  try {
    const data = await resend.emails.send({
      from: "Spring of life <onboarding@resend.dev>",
      to: ["ushkalo.herman@gmail.com"],
      subject: `Повідомлення через зворотний зв'язок із сайту "Джерело жити»`,
      react: EmailTemplate({ ...templateParams }),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
