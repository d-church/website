"use client";
import { ChurchEmployeeBlock } from "@components/main-page/church-employee-block";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Separator } from "../ui/separator";

import { cn } from "@/lib/utils";
import { fetchProducts } from "@/api/fetch-products";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import { ReactNode, useEffect, useState } from "react";

interface IChurchTeamBlockProps {
  className?: string;
  count?: number;
  children?: ReactNode;
}

export function ChurchTeamBlock({ className, count, children }: IChurchTeamBlockProps) {
  const [mainPerson, setMainPerson] = useState<IProductsEntity>()
  const [persons, setPersons] = useState<IProductsEntity[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts("ChurchTeam");
        response.map((item) => {
          if ((item.attributeValues.position.value).toLowerCase().includes("старш")) {
            setMainPerson(item)
          }
          else {
            setPersons(prevPersons => {
              if (!prevPersons.some(person => person.id === item.id)) {
                return [...prevPersons, item];
              }
              return prevPersons;
            });
          }
        })

      } catch (error) {
        console.error("Failed to fetch products in church-block: ", error)
      }
    }
    fetchData()
    if (count) {
      setPersons(persons.slice(0, count))
    }
  }, [])

  const t = useTranslations();
  return (
<div
  id="church-team"
  className={cn(
    "container flex flex-col items-center pb-[100px] pt-[100px] xl:pt-[167px] scale-100 origin-top",
    "xl:scale-[95%] md:scale-[90%] scale-[80%] md:mt-[-15px]",
    className
  )}
>

      <div className="max-w-[1070px] text-center text-lg font-medium leading-8 text-[#8A8A8A] xl:text-xl">
        <p>{t("main-page.church-team-block.text")}</p>
      </div>

      <div className="mt-[30px] flex flex-col items-center xl:mt-[50px]">
        <div className="flex w-full justify-center xl:space-x-[57px]">
          <Separator className="relative top-[95px] hidden w-[470px] bg-graphite xl:block 2xl:w-[520px]" />
          <div className="flex flex-col items-center">
            <div className="group flex flex-col items-center">
              <div className="relative flex size-[150px] items-center justify-center overflow-hidden rounded-full border-4 bg-[#E8E8E8] xl:size-[190px]">
                <Image
                  src={mainPerson?.attributeValues.photo.value.downloadLink}
                  width={160}
                  height={160}
                  alt="icon"
                  className="size-[126px] rounded-full object-cover object-[70%_30%] xl:size-[160px]"
                />
              </div>
              <p className="mt-[10px] whitespace-pre-wrap text-center text-base font-bold xl:mt-[20px] xl:text-[22px]">
                {
                  mainPerson?.attributeValues.fio.value
                }
              </p>
            </div>
            <p className="mt-[10px] whitespace-pre-line text-center font-normal text-[#8A8A8A] xl:text-[22px]">
              {
                mainPerson?.attributeValues.position.value
              }
            </p>
          </div>
          <Separator className="relative top-[95px] hidden w-[470px] bg-graphite xl:block 2xl:w-[520px]" />
        </div>
      </div>

      <div className="mt-[73px] grid grid-cols-2 gap-x-[20px] gap-y-[50px] lg:grid-cols-4 lg:gap-x-[0px] xl:gap-x-[0px]">
        {persons.map(item => <ChurchEmployeeBlock
          key={item.id}
          src={item.attributeValues.photo.value.downloadLink}
          fullName={item.attributeValues.fio.value}
          position={item.attributeValues.position.value}
        />)}
      </div>
      {children}
    </div>
  );
}
