import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { NextApiResponse } from "next";

export async function mGET(_req: Request, _res: NextApiResponse) {
  console.info("REFRESH START");
  let record;
  try {
    await prisma.refresh.deleteMany({});
    record = await prisma.refresh.create({
      data: {},
    });
  } catch (e) {
    console.error("REFRESH QUERY ERROR", e);
    return new NextResponse(JSON.stringify(false));
  }
  console.info("REFRESH DONE");
  return new NextResponse(JSON.stringify(record.random), {
    status: 200,
  });
}
