import { NextResponse } from "next/server";
import { mockData } from "src/data/spacecraft";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ items: mockData.items });
}
