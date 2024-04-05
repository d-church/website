import { AboutBlock } from "@/components/main-page/about-block";
import { PreviewBlock } from "@/components/main-page/preview-block";
import { VideoBlock } from "@/components/main-page/video-block";

export default async function Home() {
  return (
    <>
      <PreviewBlock />
      <VideoBlock />
      <AboutBlock />
    </>
  );
}
