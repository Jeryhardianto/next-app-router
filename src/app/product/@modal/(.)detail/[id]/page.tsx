import { Modal } from "@/app/product/_components/modal";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/services/products";
import Image from "next/image";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getProduct(
    "http://localhost:3001/api/product/?id=" + params.id
  );
  return (
    <Modal>
      <Image
        className="w-screen object-cover aspect-square col-span-2"
        src={product.data.image}
        alt={product.data.title}
      />
      <div className="bg-white">
        <h1 className="text-3xl font-bold">{product.data.title}</h1>
        <p className="text-sm text-gray-500">Price: $ {product.data.price}</p>
        <Button>Add to cart</Button>
      </div>
    </Modal>
  );
}
