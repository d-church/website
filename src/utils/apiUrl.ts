const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const apiUrls = {
  sendEmailJS: ["https://api.emailjs.com", "api", "v1.0", "email", "send"].join(
    "/"
  ),
  sendEmail: [BASE_URL, "api", "send-email"].join("/"),
};

