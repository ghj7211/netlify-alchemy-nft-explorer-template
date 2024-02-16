import styles from "../styles/Home.module.css";
import NFTGallery from "../components/nftGallery";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <img src="../public/artemis_1080p.avif" alt="Artemis" /> 
      </main>
    </div>
  );
}
