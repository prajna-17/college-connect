import { NextResponse } from "next/server";
import path from "path";

export async function GET(request) {
  try {
    const { searchParams, origin } = new URL(request.url);
    const file = searchParams.get("file");

    if (!file) {
      return new NextResponse("Missing file parameter", { status: 400 });
    }

    const safeFileName = path.basename(file);
    const pdfUrl = `${origin}/brochures/${encodeURIComponent(safeFileName)}`;

    const pdfResponse = await fetch(pdfUrl);

    if (!pdfResponse.ok) {
      return new NextResponse(
        `Failed to fetch brochure. Status: ${pdfResponse.status}`,
        { status: 404 }
      );
    }

    const arrayBuffer = await pdfResponse.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${safeFileName}"`,
        "Content-Length": String(arrayBuffer.byteLength),
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Download brochure error:", error);
    return new NextResponse("Failed to download brochure", { status: 500 });
  }
}