import { useParams, useLoaderData } from "@remix-run/react";

export const loader = () => {
  return { post: { id: 1, name: "asdasdasd" } };
};

const PostPage = () => {
  const { id } = useParams();
  const { post } = useLoaderData();

  return (
    <main>
      <h3>Post # {id}</h3>
      <h4>{post?.name}</h4>
    </main>
  );
};

export default PostPage;
