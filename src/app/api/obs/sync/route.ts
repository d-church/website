import { NextResponse } from "next/server";
import { getState, applyCommand } from "@/app/[locale]/(obs)/_obs/store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json(getState());
}

export async function POST(request: Request) {
  try {
    const command = await request.json();
    if (!command || typeof command.type !== "string") {
      return NextResponse.json({ error: "Invalid command" }, { status: 400 });
    }
    if (!getState().sessionActive) {
      return NextResponse.json({ skipped: true, reason: "no active session" });
    }
    const next = applyCommand(command);
    return NextResponse.json({
      success: true,
      version: next.version,
      isShowing: next.isShowing,
      text1: next.text1,
      text2: next.text2,
    });
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
