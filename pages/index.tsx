import styles from "../styles/Home.module.css";
import LoginPage from "./login";

export default function Home() {
   return (
      <div className={styles.container}>
         <LoginPage />
      </div>
   );
}
