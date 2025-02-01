import { Button } from "@/components/ui/button";
import { getProduct } from "@/services/products";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getProduct(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <img
          className="w-screen object-cover aspect-square col-span-2"
          src={product.data.image}
          alt={product.data.title}
        />
        <div className="bg-white">
          <h1 className="text-3xl font-bold">{product.data.title}</h1>
          <p className="text-sm text-gray-500">Price: $ {product.data.price}</p>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}
