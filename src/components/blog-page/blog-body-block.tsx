import parse, {
  attributesToProps,
  HTMLReactParserOptions,
} from "html-react-parser";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Separator } from "../ui/separator";

import { fetchProducts } from "@/oneentry/fetch-products";

interface IBlogBodyBlockProps {
  id: number;
}

export async function BlogBodyBlock({ id }: IBlogBodyBlockProps) {
  const blog = await fetchProducts("EventsAndBlog");
  const t = await getTranslations();
  //  IN CMS IT IS AUTOR NOT AUTHOR
  const facebookURL = blog[id].attributeValues.autorfacebook.value;
  const instagramURL = blog[id].attributeValues.autorinstagram.value;
  const author = blog[id].attributeValues.autor.value;

  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode.type === "text" && domNode.data.trim() === "") {
        // console.log(domNode);
        return <></>;
      }
      if (domNode.name === "p") {
        const childrenArray = domNode.children.filter(
          (child) => child.name === "img"
        );
        if (childrenArray.length) {
          console.log(childrenArray.length);
          domNode.name = "div";
          const attributes = attributesToProps({
            className:
              "flex lg:gap-[30px] h-[300px] max-lg:flex-col max-lg:gap-[10px]",
          });
          domNode.attribs = attributes;
        }
      }
      if (domNode.name === "img") {
        // console.log(domNode.attribs);
        if (domNode.next && domNode.next.data.trim() === "") {
          if (domNode.next.next.name === "img") {
            // console.log(domNode);
          }
        }
        return (
          <Image
            width={800}
            height={300}
            alt="A Blog Image."
            className="object-cover max-lg:size-[300px]"
            src={domNode.attribs.src}
          />
        );
      }
    },
  };
  const mainBlogBody = parse(
    blog[id].attributeValues.description.value.htmlValue,
    options
  );

  return (
    <>
      <div className="container w-[800px] pt-[50px]">
        <div>
          <div className="flex flex-col gap-[50px] text-[1.375rem]/[1.875rem] max-lg:gap-[30px]">
            {mainBlogBody}
          </div>
        </div>
        <div className="grid gap-y-[10px] pt-[50px] md:grid-cols-2">
          <div className="my-auto flex w-fit gap-[30px] text-[1.125rem]  font-medium max-lg:justify-self-center">
            <p className="inline-block text-gray-light">
              {t("events-and-blogs-page.blog-page.blog.author")}
            </p>
            <p className="inline-block text-graphite">{author}</p>
          </div>
          <div className="flex items-center justify-center max-lg:gap-[30px] md:justify-self-end">
            {facebookURL !== "" ? (
              <>
                <Button
                  className="group flex h-12 w-[52px] items-center justify-center rounded-full border border-white bg-white p-0 hover:bg-graphite"
                  asChild
                >
                  <Link href={facebookURL} target="_blank">
                    <Icons.whiteFacebook className="w-full" />
                  </Link>
                </Button>
              </>
            ) : (
              <></>
            )}
            {instagramURL !== "" ? (
              <>
                <Button
                  className="group flex h-12 w-[52px] items-center justify-center rounded-full border border-white bg-white p-0 hover:bg-graphite"
                  asChild
                >
                  <Link href={instagramURL} target="_blank">
                    <Icons.whiteInstagram className="w-full" />
                  </Link>
                </Button>
              </>
            ) : (
              <></>
            )}
          </div>
          <Separator className="w-full shrink border-b border-graphite md:col-span-2 md:row-start-2 md:row-end-2" />
        </div>
      </div>
    </>
  );
}
