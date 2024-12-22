import Image from "next/image";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

interface IPreviewBlockProps {
  id: number;
  data: IProductsEntity[];
}

export async function PreviewBlock({ id, data: previewBlockData }: IPreviewBlockProps) {
  const block = previewBlockData.find((item) => item.id == id);
  const date = block?.attributeValues.date.value.formattedValue
    .split("-")
    .join(".");
  const author = block?.attributeValues.author.value;
  const imageSrc = block?.attributeValues.images.value[1].downloadLink;
  const title = block?.attributeValues.title.value;
  return (
    <div className="pointer-events-none relative bg-slate-200">
      <div className="relative flex justify-center items-center w-full max-h-[800px] aspect-[16/9]">
        {/* Background Image */}
        <Image
          fill
          src={imageSrc}
          className="object-cover"
          alt="Gallery image"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        {/* Centered Title */}
        <div className="relative z-[2] text-center text-white w-[90%] space-y-4">
          <p className="text-[2.5rem]/[3rem] max-lg:text-[1.875rem]/[2.25rem] font-medium">
            {title}
          </p>
          <p className="text-[2.5rem]/[3rem] max-lg:text-[1.375rem]/[1.6rem]">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}