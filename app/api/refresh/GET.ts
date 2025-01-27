import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { NextApiResponse } from "next";

export async function mGET(_req: Request, _res: NextApiResponse) {
  console.info("REFRESH START");
  let didRefresh;
  try {
    didRefresh = await prisma.refresh.findMany({});
  } catch (e) {
    console.error("REFRESH QUERY ERROR", e);
    return new NextResponse(JSON.stringify(false));
  }
  console.info("REFRESH DONE");
  return new NextResponse(JSON.stringify(true), {
    status: 200,
  });
}
