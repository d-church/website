import { DescriptionBlock, HeadingBlock } from "@/components/contacts-page";
import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import {
  ChurchTeamBlock,
  PreviewBlock,
  WriteUsBlock,
} from "@/components/main-page";

export default async function ContactsPage() {
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
