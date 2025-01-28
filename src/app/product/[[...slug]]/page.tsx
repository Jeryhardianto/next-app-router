
type DetailProductPageProps = Readonly<{
  params: {
    slug?: string[];
  };
}>;

export default async function DetailProductPage(props: DetailProductPageProps) {
 const {params} = props;
 
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl">{params.slug ? "Detail Product Page" : "Product Page"}</h1>
      {params.slug && (
        <>
          <p>Catergory : {params.slug[0]}</p>
          <p>Gender : {params.slug[1]}</p>
          <p>Id Product : {params.slug[2]}</p>
        </>
      )}
    </div>
  )
}

// Note:
// - [[...slug]] = dynamic route with multiple segments 