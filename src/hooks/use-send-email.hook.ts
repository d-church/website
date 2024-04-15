import { useMutation } from "@tanstack/react-query";

import { TSendMessageSchema } from "@/components/write-us-form/send-message.schema";
import { MainPageService } from "@/service/main-page.service";
import { apiUrls } from "@/utils/apiUrl";

export function useSendEmail() {
  const { isPending, mutate, isSuccess, isError } = useMutation({
    mutationKey: [apiUrls.sendEmail],
    mutationFn: async (data: TSendMessageSchema) =>
      MainPageService.sendEmail(data),
  });

  return { isPending, mutate, isSuccess, isError };
}
