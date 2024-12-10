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
  const [mainBlogBody, setMainBlogBody] = useState()

  useEffect(() => {
    data.find(item => {
      if (item.id == id) {

        setMainBlogBody(parse(
          item.attributeValues.description.value.htmlValue,
          options
        ));
        return setBlog(item.attributeValues)

      }
    })
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
            className: "flex flex-wrap md:flex-nowrap",
          });
        }
      }

      if (domNode.name === "img") {
        return (
          <Image
            width={800}
            height={300}
            alt="Blog Image"
            className="h-[300px] w-full object-cover"
            src={domNode.attribs.src}
          />
        );
      }
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Main Blog Body */}
      <div className="flex flex-col gap-10 text-[1.5rem] leading-relaxed text-justify">
        {mainBlogBody}
      </div>

      {/* Author and Social Buttons Section */}
      <div className="mt-16 flex flex-col items-center gap-10 md:flex-row md:justify-between">
        {/* Author */}
        <div className="flex items-center gap-4 text-lg font-medium">
          <span className="text-gray-600">
            {t("events-and-blogs-page.blog-page.blog.author")}
          </span>
          <span className="text-gray-900">{author}</span>
        </div>
      </div>

      {/* Separator */}
      <Separator className="mt-12 border-gray-300" />
    </div>
  );
}