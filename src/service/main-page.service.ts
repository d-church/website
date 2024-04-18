"use server";

import axios from "axios";

import { type TSendMessage } from "@/components/write-us-form/send-message.schema";
import { apiUrls } from "@/utils/apiUrl";

export const MainPageService = {
  sendEmail: (data: TSendMessage) =>
    axios.post(apiUrls.sendEmail, {
      template_params: {
        ...data,
      },
    }),
};
