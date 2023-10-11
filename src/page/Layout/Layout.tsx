import React, { ReactElement, ReactNode } from "react";
import styles from "./layout.css";
type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return <div>{children}</div>;
}
