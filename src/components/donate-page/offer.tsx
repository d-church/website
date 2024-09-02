import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export function Offer() {
  const t = useTranslations("donate-page.offer");

  return (
    <div className="hidden xl:flex w-full h-[200px]  items-center p-[50px] bg-[#232323] rounded-[20px] text-[20px]">
      <Image
        className="overflow-hidden mr-[30px]"
        src="/static/public-offer.webp"
        alt="An Image"
        width={100}
        height={100}
      />
      <div className='text-white  mr-[40px] w-[615px]'>
        <p className='uppercase font-bold'>{t("title")}</p>
        <p>{t("text")}</p>
      </div>
      <Link href="/public-offer" className='h-[44px] w-[184px] text-white uppercase text-center py-[5px] px-[20px] border rounded-[22px] border-white'>
        {t("btn")}
      </Link>
    </div>
  )
}

