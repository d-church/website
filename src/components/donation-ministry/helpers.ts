import { DonationData } from "./types";

export const generateLiqPayDescription = (data: DonationData): string => {
  let description = "";

  description +=
    data.action === "subscribe" ? "Щомісячне пожертвування" : "Пожертвування";

  if (data.ministry !== "destiny") {
    description += ` на ${data.ministry}`;
  }

  if (data.description) {
    description += `: ${data.description}`;
  }

  return description;
};
