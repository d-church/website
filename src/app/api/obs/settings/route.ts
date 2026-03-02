import { NextResponse } from "next/server";
import type { OBSSettings } from "@/features/obs-helper/store";

let sharedSettings: OBSSettings = {
  backgroundColor: "#000000",
  text1Color: "#FFFFFF",
  text2Color: "#CCCCCC",
  side: "left",
  width: "auto",
  height: "auto",
  verticalPosition: "bottom",
  topOffset: "32px",
  bottomOffset: "32px",
  text1Font: "'Namu', 'Manrope', sans-serif",
  text2Font: "'Namu', 'Manrope', sans-serif",
  text1Size: "24px",
  text2Size: "20px",
  textPaddingLeft: "0px",
  textPaddingRight: "0px",
  textGap: "4px",
  starPosition: "none",
  starColor: "#731cfe",
  badgeTemplate: "custom",
  badgeScale: 100,
};

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ settings: sharedSettings });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body && typeof body === "object") {
      sharedSettings = { ...sharedSettings, ...body };
    }
    return NextResponse.json({ success: true, settings: sharedSettings });
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
