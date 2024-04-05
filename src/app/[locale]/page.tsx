import {
  AboutBlock,
  ChurchTeamBlock,
  PreviewBlock,
  VideoBlock,
} from "@/components/main-page";

export default async function Home() {
  return (
    <>
      <PreviewBlock />
      <VideoBlock />
      <AboutBlock />
      <ChurchTeamBlock />
    </>
  );
}
