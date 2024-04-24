import { useTranslations } from "next-intl";
import Image from "next/image";

import { Icons } from "../ui/icons";

export function PreviewBlock() {
  const t = useTranslations();
  return (
    <div className="relative h-[500px]">
      <div className="absolute h-[500px] w-full overflow-hidden">
        <Image
          src="/static/jesus-preview-block-picture.webp"
          alt="Preview section picture"
          fill
          className="object-cover"
        />

        <div className="container absolute z-10 flex max-w-full justify-center pt-[220px] text-white 2xl:pt-[250px]">
          <Icons.textJesusMobile className="md:hidden" />
          <Icons.textJesus className="hidden md:block" />
        </div>
      </div>
    </div>
  );
}
