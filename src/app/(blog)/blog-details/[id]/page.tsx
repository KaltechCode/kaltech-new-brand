// import { Metadata } from "next";
// import { blog_data } from "@/data/blog-data";
// import BlogDetailsMain from "@/pages/blog/blog-details";

// export const metadata: Metadata = {
//   title: "hello - Blog Details page",
// };

// export default function BlogDetailsPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const blog = [...blog_data].find((blog) => blog.id === Number(params.id));
//   return blog ? (
//     <BlogDetailsMain blog={blog} />
//   ) : (
//     <div className="text-center pt-100">
//       Blog not found with id: {params.id}
//     </div>
//   );
// }

import { Metadata } from "next";
import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/pages/blog/blog-details";
import { notFound } from "next/navigation"; // Import the notFound function

// This function is run at build time to pre-render the dynamic pages.
export async function generateStaticParams() {
  // Map over the local blog_data array to create the params for each post.
  return blog_data.map((blog) => ({
    // The key "id" must match the dynamic segment name in the file path.
    id: blog.id.toString(),
  }));
}

export default function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // Find the blog post that matches the current page's ID.
  const blog = [...blog_data].find((b) => b.id === Number(params.id));

  // If no blog is found, render the not-found page.
  if (!blog) {
    notFound();
  }

  // Generate metadata for the specific blog post.
  const metadata: Metadata = {
    title: blog.title || "Blog Details",
  };

  return <BlogDetailsMain blog={blog} />;
}
