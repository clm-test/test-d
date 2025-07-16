import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username");
  console.log(`Requested fid: ${username}`);

  try {
  const pinataUrl= `https://hub.pinata.cloud/v1/userNameProofByName?name=${username}`

  const pinataResponse = await axios.get(pinataUrl);
  const pinataFid = pinataResponse.data.fid;
  console.log(`Requested fid: ${pinataFid}`);
    return NextResponse.json({
      pinataFid
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
