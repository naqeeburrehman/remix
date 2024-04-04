import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

export const links = () => [];

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
      <body>{children}</body>
    </html>
  );
};

export const ErrorBoundary = ({ error }) => {
  console.log(error);
  return (
    <Document>
      <h1>Error</h1>
      <p>{error.message}</p>
    </Document>
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
