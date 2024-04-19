"use server";

import axios from "axios";

import { type TSendMessage } from "@/schema/send-message.schema";
import { apiUrls } from "@/utils/apiUrl";

export const MainPageService = {
  sendEmail: (data: TSendMessage) =>
    axios.post(apiUrls.sendEmail, {
      template_params: {
        ...data,
      },
    }),
};
