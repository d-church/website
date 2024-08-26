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
  //  IN CMS IT IS AUTOR NOT AUTHOR
  const facebookURL = blog[id].attributeValues.autorfacebook;
  const instagramURL = blog[id].attributeValues.autorinstagram;
  return (
    <>
      <div className="pt-[50px]">
        <div>
          <p></p>
          <p></p>
        </div>
        <div className="flex">
          <Button
            className="group flex h-12 w-[52px] items-center justify-center rounded-full border border-white bg-white p-0 hover:bg-graphite"
            asChild
          >
            <Link href={facebookURL} target="_blank">
              <Icons.whiteFacebook className="w-full" color="#000" />
            </Link>
          </Button>
          <Button
            className="group flex h-12 w-[52px] items-center justify-center rounded-full border border-white bg-white p-0 hover:bg-graphite"
            asChild
          >
            <Link href={instagramURL} target="_blank">
              <Icons.whiteInstagram className="w-full" />
            </Link>
          </Button>
        </div>
        <Separator />
      </div>
    </>
  );
}
