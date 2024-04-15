import axios from "axios";

import { TSendMessageSchema } from "@/components/write-us-form/send-message.schema";
import { apiUrls } from "@/utils/apiUrl";

export const MainPageService = {
  sendEmail: (data: TSendMessageSchema) =>
    axios.post(apiUrls.sendEmail, {
      template_params: {
        ...data,
      },
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
    }),
};
