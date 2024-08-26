import Image from "next/image";

import { fetchProducts } from "@/oneentry/fetch-products";

interface IPreviewBlockProps {
  id: number;
}

export async function PreviewBlock({ id }: IPreviewBlockProps) {
  const previewBlockData = await fetchProducts("EventsAndBlog");
  const date = previewBlockData[id].attributeValues.date.value.formattedValue;
  // in CMS AUTOR NOT AUTHOR
  const author = previewBlockData[id].attributeValues.autor.value;
  const imageSrc =
    previewBlockData[id].attributeValues.images.value[0].downloadLink;
  const title = previewBlockData[id].attributeValues.title.value;
  return (
    <div className="pointer-events-none relative bg-slate-200 max-lg:max-h-[400px] lg:max-h-[600px]">
      <div className="after:absolute after:inset-0 after:z-[1] after:h-full after:w-full after:overflow-hidden after:bg-black/70 max-lg:h-[400px] lg:h-[600px]">
        <Image
          fill
          src={imageSrc}
          className="object-cover"
          alt="Gallery image"
        />
        <div className="relative z-[2] mt-[100px] flex flex-col justify-start gap-y-[30px] text-center font-medium text-white max-lg:w-[90%] lg:mt-[270px] lg:justify-end">
          <p className="text-[2.5rem]/[3rem] max-lg:text-[1.875rem]/[2.25rem]">
            {title}
          </p>
          <p className="text-[2.5rem]/[3rem] max-lg:text-[1.375rem]/[1.6rem]">
            {date}
          </p>
          <p className="text-[1.125rem]/[1.375rem] max-lg:text-[1.375rem]/[1.6rem]">
            {author}
          </p>
        </div>
      </div>
    </div>
  );
}
