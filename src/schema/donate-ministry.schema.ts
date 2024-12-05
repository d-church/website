import { z } from "zod";

export const donateMinistrySchema = z
  .object({
    typeDonate: z.enum(["once", "monthly"]),
    typeMinistry: z.enum([
      "destiny",
      "dworship",
      "dyouth",
      "dyoung",
      "dfamily",
      "dmoms",
      "dkids",
      "dgirls",
      "dspecials",
      "dseniors",
      "fusion",
      "alpha",
      "dcafe",
    ]),
    amount: z.string(),
    currency: z.enum(["usd", "eur", "uah"]),
    messages: z.string().optional(),
  })
  .refine(
    (data) => {
      console.log(+data.amount < 1);
      if (+data.amount < 1) {
        return false;
      }
      return true;
    },
    {
      path: ["amount"],
      message: "Amount should be greater than 0",
    }
  );

export type TDonateMinistry = z.infer<typeof donateMinistrySchema>;
