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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = [...blog_data].find((b) => b.id === Number(id));
  if (!blog) return { title: "Blog not found" };
  return { title: blog.title || "Blog Details" };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Find the blog post that matches the current page's ID.
  const blog = [...blog_data].find((b) => b.id === Number(id));

  // If no blog is found, render the not-found page.
  if (!blog) {
    notFound();
  }

  return <BlogDetailsMain blog={blog} />;
}
