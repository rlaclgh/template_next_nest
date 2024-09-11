import "./styles.css";
import styles from "./layout.module.scss";
import Decription from "@/app/description";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.description_wrapper}>
          <Decription />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.contents} id="global-scroll">
            {children}
            <div id="modal-root"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
