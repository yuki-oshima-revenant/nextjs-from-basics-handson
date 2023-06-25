import { FunctionComponent, ReactNode } from "react";
import styles from "./index.module.css";

export const Layout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className={styles.wrapper}>{children}</div>;
};
