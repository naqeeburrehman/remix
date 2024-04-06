import { Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError, isRouteErrorResponse } from "@remix-run/react";
import stylesheet from "./style.css?url";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export const meta = () => [{ title: "default" }, { name: "description", content: "Welcome to Remix!" }];

const Docuemnt = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-orange-100 dark:bg-zinc-800">{children}</body>
    </html>
  );
};

export const ErrorBoundary = () => {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <Docuemnt>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </Docuemnt>
    );
  }

  return (
    <Docuemnt>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
      <pre>{"errorMessage"}</pre>
    </Docuemnt>
  );
};

const App = () => {
  return (
    <Docuemnt>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
    </Docuemnt>
  );
};

export default App;
