"use client";

import Image from "next/image";

import { usePathname } from "@/app/navigation";
import { cn } from "@/lib/utils";

interface IWrapperPreviewBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function WrapperPreviewBlock({
  children,
  className,
}: IWrapperPreviewBlockProps) {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "relative flex h-full min-h-screen items-center justify-center",
        className
      )}
    >
      <div className="absolute h-full w-full overflow-hidden after:absolute after:h-full after:w-full after:bg-black/70">
        {pathname === "/" ? (
          <video
            autoPlay
            muted
            loop
            className="absolute left-0 top-0 min-h-full min-w-full object-cover"
          >
            <source src="/static/preview-block-video.mp4" type="video/mp4" />
          </video>
        ) : pathname.startsWith("/donate") ? (
          <Image
            src="/static/donate-preview-block-picture.webp"
            alt="Preview section picture"
            fill
            className="object-cover"
          />
        ) : (
          <Image
            src="/static/preview-block-picture.webp"
            alt="Preview section picture"
            fill
            className="object-cover"
          />
        )}
      </div>
      {children}
    </div>
  );
}
