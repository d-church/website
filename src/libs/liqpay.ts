import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

import { BASE_URL, Currency } from "@/constants";

export class LiqPay {
  private static public_key = process.env.NEXT_PUBLIC_LIQPAY_PUBLIC_KEY;
  private static private_key = process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY;

  public static getLiqPayRequestData(params: LiqPayData) {
    const liqpayValues = {
      ...params,
      language: "uk",
      public_key: this.public_key,
      result_url: `${BASE_URL}/donate/ministry/success`,
      order_id: uuidv4(),
      sandbox: process.env.NODE_ENV === "development" ? "1" : undefined,
      version: 3,
    };
    const data = Buffer.from(JSON.stringify(liqpayValues)).toString("base64");
    const signature = this.str_to_sign(
      this.private_key + data + this.private_key
    );
    return { data: data, signature: signature };
  }

  public static getFormProps() {
    return {
      method: "POST",
      action: "https://www.liqpay.ua/api/3/checkout",
      acceptCharset: "utf-8",
    };
  }

  private static str_to_sign(str: string) {
    const sha1 = crypto.createHash("sha1");
    sha1.update(str);
    return sha1.digest("base64");
  }
}

export type LyqPayAction = "paydonate" | "pay" | "subscribe";

export interface LiqPayData {
  action: LyqPayAction;
  amount: number;
  currency: Currency;
  description: string;
}
