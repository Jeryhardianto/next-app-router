import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    title: "Nike Pegasus Premium",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3a7f5339-6ebd-46c5-9424-0beebd602eae/W+NIKE+PEGASUS+PREMIUM.png",
    price: 3299000
  },
  {
    id: 2,
    title: "Nike Pegasus 41",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4093f5a4-02ee-4978-8918-d7a56b5b55af/W+AIR+ZOOM+PEGASUS+41.png",
    price: 2099000
  },
  {
    id: 3,
    title: "Nike Pegasus EasyOn",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dc4ef95b-8e1d-42fa-b27f-6264b33a5151/W+PEGASUS+EASYON.png",
    price: 2099000
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