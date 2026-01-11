// import type { TPayments } from "./types/payments.types";

import { TPaymentOption } from "@/types/payments.types";

// export const payments: TPayments[] = [
//   "РЕКВІЗИТИ В UAH",
//   "PAYPAL",
//   "EUR",
//   "USD",
//   "MONEYGRAM",
//   "WESTERN UNION",
// ];


export const payments: TPaymentOption[] = [
  {name: "default", text: "РЕКВІЗИТИ В UAH"},
  {name: "paypal", text: "PAYPAL"},
  {name: "eur", text: "EUR"},
  {name: "usd", text: "USD"},
  {name: "moneygram", text: "MONEYGRAM"},
  {name: "western_union", text: "WESTERN UNION"},
]