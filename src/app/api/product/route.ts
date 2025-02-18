import { retrieveData, retrieveDataById  } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
 const { searchParams } = new URL(request.nextUrl);
 const id = searchParams.get("id");
 if(id) {
   const detailProduct = await retrieveDataById("products", id);
   if(detailProduct) {
     return NextResponse.json({status:200, message: "Detail product", data: detailProduct});
   }
   return NextResponse.json({status:404, message: "Data not found"});
 }

  const products = await retrieveData("products");

  return NextResponse.json({status:200, message: "Data product", data: products});
}