"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

interface IWrapperPreviewBlockProps {
  children: React.ReactNode;
}

export async function WrapperPreviewBlock({
  children,
}: IWrapperPreviewBlockProps) {
  const pathname = usePathname();
  return (
    <div className="relative flex h-full min-h-screen items-center justify-center">
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
