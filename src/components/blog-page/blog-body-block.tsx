// @ts-nocheck
"use client";
import parse, {
  attributesToProps,
  HTMLReactParserOptions,
} from "html-react-parser";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { IProductBlock, IProductsEntity } from "oneentry/dist/products/productsInterfaces";

import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Separator } from "../ui/separator";

import { fetchProducts } from "@/oneentry/fetch-products";
import { useEffect, useState } from "react";
import Loading from "../common/loading";

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
      if (domNode.type === "text" && domNode.data.trim() === "") {
        return <></>;
      }
      if (domNode.name === "p") {
        const childrenArray = domNode.children.filter(
          (child) => child.name === "img"
        );
        if (childrenArray.length) {
          domNode.name = "div";
          const attributes = attributesToProps({
            className:
              "flex h-[300px] max-w-[800px] md:gap-[30px] max-md:flex-col max-md:gap-[10px]",
          });
          domNode.attribs = attributes;
        }
      }

      if (domNode.name === "img") {
        return (
          <Image
            width={800}
            height={300}
            alt="A Blog Image."
            className="h-[300px] object-cover max-lg:mx-auto max-lg:w-[320px]"
            src={domNode.attribs.src}
          />
        );
      }
    },
  };
console.log(mainBlogBody);

  return (
        <div className="mx-auto w-[320px] pt-[50px] md:container md:w-[640px] lg:w-[800px] md:px-0">
          <div className="flex w-[320px] flex-col gap-[50px] text-[1.375rem]/[1.875rem] max-lg:gap-[30px] md:w-[640px] lg:w-[800px]">
            {mainBlogBody && mainBlogBody}
          </div>
          <div className="grid w-[320px] gap-y-[10px] pt-[50px] md:w-[640px] md:grid-cols-2 lg:w-[800px]">
            <div className="my-auto flex w-fit gap-[30px] text-[1.125rem]  font-medium max-lg:justify-self-center">
              <p className="inline-block text-gray-light">
                {t("events-and-blogs-page.blog-page.blog.author")}
              </p>
              <p className="inline-block text-graphite">{author}</p>
            </div>
            <div className="flex items-center gap-[30px] justify-center max-lg:gap-[30px] md:justify-self-end">
              {facebookURL && (
                <Button
                  className="group flex h-12 w-fit items-center justify-center rounded-full border border-white bg-white p-0 hover:bg-graphite"
                  asChild
                >
                  <Link href={facebookURL} target="_blank">
                    <Icons.whiteFacebook className="w-full" />
                  </Link>
                </Button>
              )}
              {instagramURL && (
                <Button
                  className="group flex h-12 w-fit items-center justify-center rounded-full border border-white bg-white p-0 hover:bg-graphite"
                  asChild
                >
                  <Link href={instagramURL} target="_blank">
                    <Icons.whiteInstagram className="w-full" />
                  </Link>
                </Button>
              )}
            </div>
            <Separator className="w-full  shrink border-b border-graphite md:col-span-2 md:row-start-2 md:row-end-2" />
          </div>
        </div>
  );
}
