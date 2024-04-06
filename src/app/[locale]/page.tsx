import {
  AboutBlock,
  ChurchTeamBlock,
  PreviewBlock,
  ServeGodBlock,
  ShareBlock,
  VideoBlock,
  WriteUsBlock,
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
      <WriteUsBlock />
    </>
  );
}
