import React from "react";

export default function NextAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
