import { Link } from "@remix-run/react";

export const meta = () => [{ title: "default" }, { name: "description", content: "Welcome to Remix!" }];

const Index = () => {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/posts" prefetch="intent">
            Posts
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Index;
