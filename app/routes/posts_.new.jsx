import { Form, redirect, json } from "@remix-run/react";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  // throw "error";
  // throw json({ message: "Error Message", status: 401 });
  // return json({ message: "Test Message", status: 200 });
  return redirect(`/posts/${name}`);
};

const NewPost = () => {
  return (
    <main>
      <h3>New Post</h3>
      <Form method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <button type="submit">Submit</button>
      </Form>
    </main>
  );
};

export default NewPost;
