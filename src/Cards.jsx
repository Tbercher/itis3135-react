import { use } from "react";
import styles from "./src/styles/cards.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { useItisTitle } from "./usetitle";  

export default function Cards() {
  useItisTitle("Playing Cards");  
  return (
    <div className={styles.body}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Libre+Baskerville:ital,wght@0,400..700;1,400..700&display=swap"
        rel="stylesheet"
      />

      <header className={styles.header}>
        <h1 className={styles.h1}>
          Trevor Bercher's Tenacious Bear | ITIS3135 | Playing Cards
        </h1>
      </header>

      <Header/> 

      <h2 className={styles.h2}>
        Tenacious Bear Camping Supplies Giveaway Cards
      </h2>

      <main id="playing-cards" className={`${styles.main} ${styles.playingCards}`}>
        {/* Card 1 - Camping Tent */}
        <div className={styles.card}>
          <div className={styles.left}>
            <img src="/src/assets/bearmascot.png" alt="Bear Mascot" />
          </div>
          <div className={styles.middle}>
            <img src="/src/assets/campingtent.png" alt="Camping Tent" />
          </div>
          <div className={styles.right}>
            <img
              className={styles.flipped}
              src="/src/assets/bearmascot.png"
              alt="Bear Mascot"
            />
          </div>
        </div>

        {/* Card 2 - Hiking Backpack */}
        <div className={styles.card}>
          <div className={styles.left}>
            <img src="/src/assets/bearmascot.png" alt="Bear Mascot" />
          </div>
          <div className={styles.middle}>
            <img src="/src/assets/hikingbag.png" alt="Hiking Backpack" />
          </div>
          <div className={styles.right}>
            <img
              className={styles.flipped}
              src="/src/assets/bearmascot.png"
              alt="Bear Mascot"
            />
          </div>
        </div>

        {/* Card 3 - Campfire (red) */}
        <div className={`${styles.card} ${styles.red}`}>
          <div className={styles.left}>
            <img src="/src/assets/bearmascot.png" alt="Bear Mascot" />
          </div>
          <div className={styles.middle}>
            <img src="/src/assets/campfire.png" alt="Campfire" />
          </div>
          <div className={styles.right}>
            <img
              className={styles.flipped}
              src="/src/assets/bearmascot.png"
              alt="Bear Mascot"
            />
          </div>
        </div>
      </main>

      
       <Footer/>
    </div>
  );
}
