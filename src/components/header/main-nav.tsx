import { Button } from "../ui/button";
import { headersLinks } from "./links";

import { getTranslate } from "@/lib/tolgee/server";

export async function MainNav() {
  const t = await getTranslate();
  return (
    <div className="hidden w-[70%] items-center justify-between xl:flex">
      <nav>
        <ul className="flex space-x-10">
          {headersLinks.map(({ href, key }, i) => (
            <li key={`${href}_${i}`}>
              <Button
                variant="link"
                className="p-0 text-xl text-white hover:text-hover-blue"
                asChild
              >
                <a href={href}>{t(`header.links.${key}`)}</a>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <Button variant="standard">{t("header.button-donate")}</Button>
    </div>
  );
}
