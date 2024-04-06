import {
  AboutBlock,
  ChurchTeamBlock,
  PreviewBlock,
  ServeGodBlock,
  ShareBlock,
  VideoBlock,
} from "@/components/main-page";

export default async function Home() {
  return (
    <>
      <PreviewBlock />
      <VideoBlock />
      <AboutBlock />
      <ChurchTeamBlock />
      <ServeGodBlock />
      <ShareBlock />
    </>
  );
}
