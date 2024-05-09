import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { footersLink } from "../header/links";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

import { clientUrl } from "@/utils/clientUrl";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-[#232323] py-[100px] text-white xl:py-[62px]">
      <div className="container flex flex-col items-center justify-between space-y-[100px] xl:flex-row xl:space-y-0 2xl:justify-normal">
        <div className="flex flex-col items-center space-y-6">
          <Image
            src="/static/logo-footer.webp"
            alt="Logo of the footer"
            loading="lazy"
            width={80}
            height={80}
          />
          <p className="whitespace-pre-wrap text-center text-[1.25rem]/[1.5rem] font-medium uppercase">
            {t("address")}
          </p>
        </div>
        <div className="flex flex-col justify-between space-y-7 xl:flex-row xl:space-x-[11rem] xl:space-y-0 2xl:ml-[15rem]">
          <div className="flex flex-col items-center justify-between space-y-[1.875rem] xl:items-start">
            {footersLink.firstBlock.map(({ href, key }, i) => (
              <Button
                key={`${href}_${i}`}
                variant="link"
                asChild
                className="h-min max-w-max p-0 text-[1.25rem]/[1.5rem] text-white"
              >
                <a
                  href={href}
                  className="hover:text-[#129297] hover:no-underline"
                >
                  {t(`links.${key}`)}
                </a>
              </Button>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between space-y-[1.875rem] xl:items-start">
            {footersLink.secondBlock.map(({ href, key }, i) => (
              <Button
                key={`${href}_${i}`}
                variant="link"
                asChild
                className="h-min max-w-max p-0 text-[1.25rem]/[1.5rem] text-white"
              >
                <a
                  key={`${href}_${i}`}
                  href={href}
                  className="hover:text-[#129297] hover:no-underline"
                >
                  {t(`links.${key}`)}
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center space-y-12 2xl:ml-[12.5rem]">
          <div className="flex justify-center gap-[40px]">
            <Button
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white p-0 hover:bg-graphite"
              asChild
            >
              <Link href={clientUrl.youtube} target="_blank">
                <Icons.youtube color="#232323" />
              </Link>
            </Button>
            <Button
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white p-0 hover:bg-graphite"
              asChild
            >
              <Link href={clientUrl.facebook} target="_blank">
                <Icons.facebook className="fill-graphite group-hover:fill-[#ffff]" />
              </Link>
            </Button>
            <Button
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white p-0 hover:bg-graphite"
              asChild
            >
              <Link href={clientUrl.instagram} target="_blank">
                <Icons.instagram color="#232323" />
              </Link>
            </Button>
          </div>
          <Button
            className="rounded-lg border border-white bg-inherit p-[0.625rem] text-[1.25rem]/[1.5rem]"
            asChild
          >
            <Link
              href={`mailto:${t("email")}`}
              className="uppercase hover:bg-white hover:text-black"
            >
              {t("email")}
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
