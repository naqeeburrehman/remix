import { Link, Outlet, useLoaderData } from "@remix-run/react";

export const loader = () => {
  return {
    posts: [
      { id: 0, name: "Post 1" },
      { id: 1, name: "Post 2" },
      { id: 2, name: "Post 3" },
    ],
  };
};

const PostsPage = () => {
  const { posts } = useLoaderData();

  return (
    <main>
      <section>
        <h2>All Posts</h2>
        <div>
          {posts.map((post, i) => (
            <div key={i}>{post.name}</div>
          ))}
        </div>
      </section>
      <Link to={"/posts/new"} prefetch="intent">
        Add a Post
      </Link>
      <Outlet />
    </main>
  );
};

export default PostsPage;
