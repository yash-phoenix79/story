import { PropsWithChildren } from "react";
import "@/styles/globals.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>Socila Media</title>
      </head>
      <body className="bg-white">{children}</body>
    </html>
  );
}
