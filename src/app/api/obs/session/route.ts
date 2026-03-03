import { NextResponse } from "next/server";
import { getState, startSession, stopSession } from "@/app/[locale]/(obs)/_obs/store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({ sessionActive: getState().sessionActive });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body?.action === "start") {
      const next = startSession();
      return NextResponse.json({ sessionActive: next.sessionActive });
    }
    if (body?.action === "stop") {
      const next = stopSession();
      return NextResponse.json({ sessionActive: next.sessionActive });
    }
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
