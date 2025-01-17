import Image from "next/image";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

interface Props {
  data: IProductsEntity;
}

export async function PreviewBlock({ data: block }: Props) {
  const date = block?.attributeValues.date.value.formattedValue
    .split("-")
    .join(".");
  const author = block?.attributeValues.author.value;

  const title = block?.attributeValues.title.value;

  const images = block?.attributeValues.images.value;
  const imageSrc =
    images.length === 1 ? images[0].downloadLink : images[1]?.downloadLink;
  return (
    <div>
      <div className="pointer-events-none relative bg-slate-200">
        <div className="relative flex aspect-[16/9] max-h-[800px] w-full items-center justify-center">
          {/* Background Image */}
          <Image
            fill
            src={imageSrc}
            className="object-cover"
            alt="Gallery image"
          />
          {/* Overlay */}
          <div className="absolute inset-0 z-[1] bg-black/50" />
        </div>
      </div>

      <div className="relative z-[2] w-[90%] space-y-4 text-center pt-5">
        <p className="text-[2.5rem]/[3rem] font-medium max-lg:text-[1.875rem]/[2.25rem]">
          {title}
        </p>
        <p className="text-[2.5rem]/[3rem] max-lg:text-[1.375rem]/[1.6rem]">
          {date}
        </p>
      </div>
    </div>
  );
}
