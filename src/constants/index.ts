export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://dchurch.lviv.ua";

export const Donate = {
  paypal: {
    common: "https://www.paypal.com/donate?business=d.church.lviv@gmail.com&currency_code=USD",
    building: "https://www.paypal.com/donate?business=d.church.lviv@gmail.com&currency_code=USD",
  },
};

export enum Currency {
  UAH = "UAH",
  USD = "USD",
  EUR = "EUR",
}
