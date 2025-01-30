import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    name: "Product 1",
    price: 100
  },
  {
    id: 2,
    name: "Product 2",
    price: 200
  },
  {
    id: 3,
    name: "Product 3",
    price: 300
  }
];

export async function GET(request: NextRequest) {
 const { searchParams } = new URL(request.nextUrl);
 const id = searchParams.get("id");
 if(id) {
   const detailProduct = data.find((item) => item.id === parseInt(id));
   if(detailProduct) {
     return NextResponse.json({status:200, message: "Detail product", data: detailProduct});
   }
   return NextResponse.json({status:404, message: "Data not found"});
 }

  return NextResponse.json({status:200, message: "Data product", data: data});
}