import { Button } from "@/components/ui/button";
import { getProduct } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = Readonly<{
  params: {
    slug?: string[];
  };
}>;

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const products = await getProduct("http://localhost:3001/api/product");
  return (
    <div className="grid grid-cols-4 mt-5 mx-5 place-items-center gap-3">
      {products.data.length > 0 &&
        products.data.map((product: Product) => (
          <div
            key={product.id}
            className="w-11/12 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={`/product/detail/${product.id}`}>
              <Image
                className="p-8 rounded-t-lg object-cover h-96 w-full"
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
              />
            </Link>
            <div className="px-5 pb-5">
              <Link href={`/product/detail/${product.id}`}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {product.title}
                </h5>
              </Link>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  $ {product.price}
                </span>
                <Button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      {params.slug && (
        <>
          <p>Category : {params.slug[0]}</p>
          <p>Gender : {params.slug[1]}</p>
          <p>Id Product : {params.slug[2]}</p>
        </>
      )}
    </div>
  );
}

// Note:
// - [[...slug]] = dynamic route with multiple segments
