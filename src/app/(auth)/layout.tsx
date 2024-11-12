import styles from "./AuthLayout.module.scss";
import "@app/globals.scss";
export interface IAuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({children}: IAuthLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className={styles.wrapper}>
          {children}
        </div>
      </body>
    </html>
  );
}