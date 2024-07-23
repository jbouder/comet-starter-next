import { NextResponse } from "next/server";
import { mockData } from "src/data/spacecraft";

export async function GET(request, { params }) {
  const { id } = params;
  return NextResponse.json(
    mockData.items.filter((item) => item.id.toString() === id)[0]
  );
}
