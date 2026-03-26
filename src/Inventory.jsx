import { use } from "react";
import styles from "./src/styles/inventory.module.css";
import { useItisTitle } from "./usetitle";
import Header from "./Header";
import Footer from "./Footer";
// Helper: renders 3 rating dots with the correct number filled
function RatingDots({ filled }) {
  useItisTitle("Inventory");
  return (
    <span className={styles.rate}>
      <span className={`${styles.dot} ${filled >= 1 ? styles.dotFilled : ""}`} />
      <span className={`${styles.dot} ${filled >= 2 ? styles.dotFilled : ""}`} />
      <span className={`${styles.dot} ${filled >= 3 ? styles.dotFilled : ""}`} />
    </span>
  );
}

const inventoryItems = [
  { item: "4-Person Dome Tent",        brand: "Coleman",                category: "Shelter",     status: "Available",   rowClass: "available", rating: 3 },
  { item: "Mummy Sleeping Bag",        brand: "The North Face",         category: "Bedding",     status: "Available",   rowClass: "available", rating: 2 },
  { item: "Flash Cooking System",      brand: "Jetboil",                category: "Cooking",     status: "In Use",      rowClass: "inUse",     rating: 1 },
  { item: "Spot 400 Headlamp",         brand: "Black Diamond",          category: "Lighting",    status: "Available",   rowClass: "available", rating: 3 },
  { item: "Ultralight First Aid Kit",  brand: "Adventure Medical Kits", category: "Safety",      status: "Available",   rowClass: "available", rating: 3 },
  { item: "Explorer 300 Power Station",brand: "Jackery",                category: "Electronics", status: "In Use",      rowClass: "inUse",     rating: 2 },
  { item: "Chair Zero",                brand: "Helinox",                category: "Furniture",   status: "Available",   rowClass: "available", rating: 2 },
  { item: "BV500 Bear Canister",       brand: "BearVault",              category: "Storage",     status: "In Use",      rowClass: "inUse",     rating: 1 },
  { item: "Water Filtration System",   brand: "Sawyer",                 category: "Hydration",   status: "Unavailable", rowClass: "wishlist",  rating: 0 },
  { item: "Wave+ Multitool",           brand: "Leatherman",             category: "Tools",       status: "Unavailable", rowClass: "wishlist",  rating: 0 },
];

export default function Inventory() {
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

      <header>
        <h1 className={styles.h1}>
          Trevor Bercher's Tenacious Bear | ITIS3135 | Inventory Project
        </h1>
      </header>

      
      <Header /> 

      <main className={styles.main}>
        <h2 className={styles.h2}>Camping Supply Rental Inventory</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Item</th>
              <th className={styles.th}>Brand</th>
              <th className={styles.th}>Category</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Condition Rating</th>
            </tr>
          </thead>

          <tbody>
            {inventoryItems.map(({ item, brand, category, status, rowClass, rating }) => (
              <tr key={item} className={styles[rowClass]}>
                <td className={styles.td}>{item}</td>
                <td className={styles.td}>{brand}</td>
                <td className={styles.td}>{category}</td>
                <td className={styles.td}>
                  <span className={styles.status}>{status}</span>
                </td>
                <td className={styles.td}>
                  <RatingDots filled={rating} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      
      <Footer /> 
    </div>
  );
}
