import { useTranslations } from "next-intl";

import { Button } from "../ui/button";
import { ChurchTeamBlock as ChurchTeam } from '../church-page/church-team-block'

import { Link } from "@/app/navigation";


interface IChurchTeamBlockProps {
  className?: string;
}

export function ChurchTeamBlock({ className }: IChurchTeamBlockProps) {
  const t = useTranslations();
  return (
      <ChurchTeam count={4} className={className}>
        <Button
          variant="standard"
          className="mt-[40px] border-graphite uppercase text-graphite hover:bg-graphite hover:text-hover-blue"
          asChild
        >
          <Link href="/about#church-team">{t("church-page.show-full-team")}</Link>
        </Button>
      </ChurchTeam>
  );
}
