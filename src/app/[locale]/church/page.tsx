import { DescriptionBlock, HeadingBlock } from "@/components/church-page";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import {
  ChurchTeamBlock,
  PreviewBlock,
  WriteUsBlock,
} from "@/components/main-page";

export default async function ChurchPage() {
  return (
    <>
      <Header />
      <main className="flex-[1_0_auto]">
        <PreviewBlock />
        <DescriptionBlock />
        <HeadingBlock />
        <ChurchTeamBlock className="pt-[30px] xl:pt-[30px]" />
      </main>
      <WriteUsBlock />
      <Footer />
    </>
  );
}
