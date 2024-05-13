import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { type TSendMessage } from "@/schema/send-message.schema";
import { MainPageService } from "@/service/main-page.service";
import { apiUrls } from "@/utils/apiUrl";

export function useSendEmail() {
  const { isPending, mutate, isSuccess, isError } = useMutation({
    mutationKey: [apiUrls.sendEmail],
    mutationFn: (data: TSendMessage) => axios.post(apiUrls.sendEmail, data),
  });

  return { isPending, mutate, isSuccess, isError };
}
