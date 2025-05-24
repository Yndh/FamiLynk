import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { NextApiResponse } from "next";
import { randomUUID } from "crypto";

export async function mGET(_req: Request, _res: NextApiResponse) {
  console.info("REFRESH START");
  try {
    await prisma.refresh.deleteMany({});
    await prisma.refresh.create({
      data: {
        random: randomUUID(),
      },
    });
  } catch (e) {
    console.error("REFRESH QUERY ERROR", e);
    return new NextResponse(JSON.stringify(false));
  }
  console.info("REFRESH DONE");
  return new NextResponse(JSON.stringify(true), {
    status: 200,
  });
}
