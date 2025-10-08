// import React from "react";
// import { Metadata } from "next";
// import BlogDetailsTwoMain from "@/pages/blog/blog-details-2";

// export const metadata: Metadata = {
//   title: "Liko - Blog Details 2 page",
// };

// const BlogDetailsTwoPage = () => {
//   return (
//     <BlogDetailsTwoMain/>
//   );
// };

// export default BlogDetailsTwoPage;

import { Metadata } from "next";
import BlogDetailsTwoMain from "@/pages/blog/blog-details-2";

// Export the metadata object directly from the page file.
export const metadata: Metadata = {
  title: "Liko - Blog Details 2 page",
};

// Default export the JSX directly for a clean Server Component.
export default function BlogDetailsTwoPage() {
  return <BlogDetailsTwoMain />;
}
