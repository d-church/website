import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { type TSendMessage } from "@/schema/send-message.schema";
import { apiUrls } from "@/utils/apiUrl";

export function useSendEmail() {
  const credentials = {
    service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY!,
    template_params: {},
  };

  const { isPending, mutate, isSuccess, isError } = useMutation({
    mutationKey: [apiUrls.sendEmailJS],
    mutationFn: (data: TSendMessage) => {
      credentials.template_params = { ...data };
      return axios.post(apiUrls.sendEmailJS, credentials);
    },
  });

  return { isPending, mutate, isSuccess, isError };
}
