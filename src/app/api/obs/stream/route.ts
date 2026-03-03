import { getState, subscribe } from "@/app/[locale]/(obs)/_obs/store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      const send = (data: string) => {
        controller.enqueue(encoder.encode(`data: ${data}\n\n`));
      };
      send(JSON.stringify(getState()));
      const unsub = subscribe((next) => {
        try {
          send(JSON.stringify(next));
        } catch (e) {
          console.error("[OBS stream] send error:", e);
        }
      });
      (controller as unknown as { _unsub?: () => void })._unsub = unsub;
    },
    cancel(controller) {
      const c = controller as unknown as { _unsub?: () => void };
      if (typeof c._unsub === "function") c._unsub();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
