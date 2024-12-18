import { BASE_URL } from "@/constants";

export const apiUrls = {
  sendEmailJS: ["https://api.emailjs.com", "api", "v1.0", "email", "send"].join(
    "/"
  ),
  sendEmail: [BASE_URL, "api", "send-email"].join("/"),
};
