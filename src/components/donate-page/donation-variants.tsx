import { useTranslations } from 'next-intl'
import React from 'react'

import Link from 'next/link'
import { clientUrl } from '@/utils/clientUrl'

export function DonationVariants() {
  const t = useTranslations("donate-page.preview-block")
  return (
    <div className='flex gap-[20px] lg:gap-[50px] z-10 mb-[50px] flex-wrap justify-center'>
      <Link href={clientUrl.donateTransfer} className="bg-[rgba(255,255,255,0.1)] hover:bg-white hover:text-[#0E9398] text-[20px] rounded-[20px] w-[248px] h-[100px] text-wrap weight-[500] uppercase text-white flex text-center  px-[40px] justify-center items-center">{t('button-donate-ministries')}</Link>
      <Link href="#OtherDonateMethods" className="bg-[rgba(255,255,255,0.1)] hover:bg-white hover:text-[#0E9398] text-[20px] rounded-[20px] w-[248px] h-[100px] text-wrap weight-[500] uppercase text-center  px-[40px] text-white flex justify-center items-center">{t('button-donate-all')}</Link>
      <Link href={"//" + clientUrl.domain} className="bg-[rgba(255,255,255,0.1)] hover:bg-white hover:text-[#0E9398] text-[20px] rounded-[20px] w-[248px] h-[100px] text-wrap weight-[500] uppercase  text-center px-[40px] text-white flex justify-center items-center">{t('button-return-to-main-page')}</Link>
    </div>
  )
}
