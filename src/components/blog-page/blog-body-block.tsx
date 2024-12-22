// @ts-nocheck
"use client";
import parse, {
  attributesToProps,
  HTMLReactParserOptions,
} from "html-react-parser";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { IProductBlock, IProductsEntity } from "oneentry/dist/products/productsInterfaces";

import { Separator } from "../ui/separator";

import { useEffect, useState } from "react";

interface IBlogBodyBlockProps {
  id: number;
  data: IProductsEntity[];
}

export async function BlogBodyBlock({ id, data }: IBlogBodyBlockProps) {
  const [blog, setBlog] = useState<IProductBlock>(data);
  const [mainBlogBody, setMainBlogBody] = useState();

  useEffect(() => {
    data.find((item) => {
      if (item.id == id) {
        setMainBlogBody(
          parse(item.attributeValues.description.value.htmlValue, options)
        );
        return setBlog(item.attributeValues);
      }
    });
  }, []);

  const t = useTranslations();
  const facebookURL = blog?.authorFacebook?.value;
  const instagramURL = blog?.authorInstagram?.value;
  const author = blog?.author?.value;

  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode.type === "text" && domNode.data.trim() === "") return null;

      if (domNode.name === "p") {
        const hasImages = domNode.children.some((child) => child.name === "img");
        if (hasImages) {
          domNode.name = "div";
          domNode.attribs = attributesToProps({
            className: "flex flex-wrap md:flex-nowrap w-full",
          });
        }
      }

      if (domNode.name === "img") {
        return (
          <Image
            width={800}
            height={300}
            alt="Blog Image"
            className="h-auto w-full max-w-full object-contain md:object-cover"
            src={domNode.attribs.src}
          />
        );
      }
    },
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 py-6 sm:py-8 md:px-6 md:py-12 overflow-x-hidden">
      {/* Main Blog Body */}
      <div className="flex flex-col gap-6 text-base leading-relaxed sm:text-lg md:gap-10 md:text-[1.25rem] w-full">
        {mainBlogBody}
      </div>
      {/* Separator */}
      <Separator className="mt-10 border-gray-300 md:mt-12 w-full" />
    </div>
  );
}