import Image from "next/image";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

interface IPreviewBlockProps {
  id: number;
  data: IProductsEntity[];
}

export async function PreviewBlock({ id, data: previewBlockData }: IPreviewBlockProps) {

  const block = previewBlockData.find(item => item.id == id)
  const date = block?.attributeValues.date.value.formattedValue
    .split("-")
    .join(".");
  const author = block?.attributeValues.author.value;
  const imageSrc =
    block?.attributeValues.images.value[0].downloadLink;
  const title = block?.attributeValues.title.value;

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
