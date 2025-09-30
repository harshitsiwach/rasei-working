import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.cityscapeBackground}>
          <div className={styles.speedLines}></div>
          <div className={styles.halftoneOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <Image src="/assets/rasei_logo.png" alt="RASEI" width={300} height={300} className={styles.mainLogo} />
          </div>
          <div className={styles.speechBubble}>
            <h1 className={styles.catchphrase}>UNLEASH THE CYBER-SPEED</h1>
            <p className={styles.subtitle}>スピードを解き放て！</p>
          </div>
          <button className={styles.ctaPanelButton}>PRE-ORDER NOW</button>
        </div>
      </section>

      <section className={styles.featuresPanels}>
        <div className={styles.comicGrid}>
          <div className={`${styles.featurePanel} ${styles.panel1}`}>
            <div className={styles.panelIcon}>🎮</div>
            <h3>INTUITIVE CONTROLS</h3>
            <p>Master the art of cyber-racing</p>
          </div>
          <div className={`${styles.featurePanel} ${styles.panel2}`}>
            <div className={styles.panelIcon}>🏙️</div>
            <h3>CYBERPUNK WORLD</h3>
            <p>Race through Neo-Tokyo's neon maze</p>
          </div>
          <div className={`${styles.featurePanel} ${styles.panel3}`}>
            <div className={styles.panelIcon}>🏎️</div>
            <h3>HIGH-OCTANE RACING</h3>
            <p>Feel the adrenaline rush</p>
          </div>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.storyPanel}>
          <h2 className={styles.storyTitle}>THE STORY</h2>
          <div className={styles.storyContent}>
            <p>In a future where data runs the streets, battle through the sprawling metropolis of Neo-Tokyo. Modify your vehicles, and become the legend of the asphalt circuit.</p>
          </div>
          <div className={styles.katanaDecoration}></div>
        </div>
      </section>
    </main>
  );
}