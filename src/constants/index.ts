import { Building } from "lucide-react";

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://dchurch.lviv.ua";

export const Donate = {
  paypal: {
    common:
      "https://www.paypal.com/donate?business=d.church.lviv@gmail.com&currency_code=USD",
    building:
      "https://www.paypal.com/donate?business=d.church.lviv@gmail.com&currency_code=USD",
  },
  privatbank: {
    building:
      "https://bank.gov.ua/qr/QkNECjAwMgoyClVDVAoK0M4g1sXQysLAIMTGxdDFy84gxsjS0t8KVUEzMzMwNTI5OTAwMDAwMjYwMDUwMzEwNDgxNzAKVUFICjEzODA2NDIwCgoKCg==",
  },
};

export enum Currency {
  UAH = "UAH",
  USD = "USD",
  EUR = "EUR",
}
