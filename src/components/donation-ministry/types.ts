import { LiqPayData } from "@/libs/liqpay";

export interface DonationData extends LiqPayData {
  ministry: string;
}
