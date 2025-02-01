
export const getProduct = async (url: string) => {
 const res = await fetch(url, {
    cache: "no-cache",
 });
 // const res = await fetch("http://localhost:3000/api/product", {
 //   cache: "no-cache",
 //   // Revalidate every 30 seconds
 //   // next: {
 //   //   revalidate: 30,
 //   // },
 //   // Revalidate with tags
 //   next: {
 //       tags: ["products"],
 //   },
 // });

 if (!res.ok) {
   throw new Error("Something went wrong");
 }

 return res.json();
}