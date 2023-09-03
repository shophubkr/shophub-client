import type { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <main style={{ marginTop: "80px" }}>{children}</main>;
};

export default AuthLayout;
