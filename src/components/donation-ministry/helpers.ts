import { DonationData } from "./types";

export const generateLiqPayDescription = (
  data: DonationData,
  t: (key: string) => string
): string => {
  let description = "";

  description +=
    data.action === "subscribe"
      ? t("donate-ministry-page.liqpay-description.monthly-donation")
      : t("donate-ministry-page.liqpay-description.donation");

  if (data.ministry !== "destiny") {
    description += t("donate-ministry-page.liqpay-description.on");
    description += data.ministry;
  }

  if (data.description) {
    description += `: ${data.description}`;
  }

  return description;
};
