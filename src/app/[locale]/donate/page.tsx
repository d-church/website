import { OtherDonateMethods } from "@/components/donate-page/other-donate-methods";
import { PreviewBlock } from "@/components/donate-page/preview-block";
import { QrCodesBlock } from "@/components/donate-page/qr-codes-block";

export default async function DonatePage() {
  return (
    <>
      <PreviewBlock />
      <QrCodesBlock />
      <OtherDonateMethods />
    </>
  );
}
