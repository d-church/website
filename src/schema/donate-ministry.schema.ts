import { z } from "zod";

export const donateMinistrySchema = z
  .object({
    typeDonate: z.enum(["once", "monthly"]),
    typeMinistry: z.enum([
      "destiny",
      "medical-chaplains",
      "prison-chaplains",
      "military-chaplains",
      "children-ministry",
      "rehabilitation-service",
      "media-service",
      "music-service",
      "general-needs",
    ]),
    amount: z.string(),
    currency: z.enum(["usd", "eur", "uah"]),
    messages: z.string().min(10).max(500),
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
