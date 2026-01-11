import { MINISTRIES } from "@/constants/ministries";
import { DonationData } from "./types";
import { Currency } from "@/constants";

export const DEFAULT_LIQPAY_DATA: DonationData = {
  action: "paydonate",
  ministry: MINISTRIES.destiny.name,
  amount: 100,
  currency: Currency.UAH,
  description: "",
}