// import { Metadata } from "next";
// import BlogDetailsMain from "@/pages/blog/blog-details";
// import product_data from "@/data/product-data";
// import ShopDetailsMain from "@/pages/shop/shop-details-main";

// export const metadata: Metadata = {
//   title: "Liko - Shop Details page",
// };

// export default function ShopDetailsPage({params}:{params:{id:string}}) {
//   const product = [...product_data].find((p) => p.id === Number(params.id));
//   return product ? (
//     <ShopDetailsMain product={product} />
//   ) : (
//     <div className="text-center pt-100">
//       Product not found with id: {params.id}
//     </div>
//   );
// }

import { Metadata } from "next";
import { notFound } from "next/navigation";
import product_data from "@/data/product-data";
import ShopDetailsMain from "@/pages/shop/shop-details-main";

// This function runs at build time to determine the paths for static pages.
export function generateStaticParams() {
  // Return an array of objects, where each object represents a product ID.
  return product_data.map((product) => ({
    id: product.id.toString(),
  }));
}

// The generateMetadata function is also dynamic and runs at build time.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = product_data.find((p) => p.id === Number(id));

  // Set the product title in the metadata if found.
  if (product) {
    return {
      title: `Liko - ${product.title} details`,
    };
  }
  // Default title if the product is not found (though notFound() will handle this).
  return {
    title: "Liko - Shop Details",
  };
}

export default async function ShopDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = product_data.find((p) => p.id === Number(id));

  // If a product is not found, show the not-found page.
  if (!product) {
    notFound();
  }

  return <ShopDetailsMain product={product} />;
}
