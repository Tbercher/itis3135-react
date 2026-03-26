import styles from "/src/styles/BercherEnterprises.module.css";

export default function Home() {
  return (
    <div className={styles.body}>

      {/* ── Header ── */}
      <header className={styles.header}>
        <img
          src="/src/assets/bercherenterpriselogo.jpg"
          alt="Bercher Enterprises Logo"
          className={styles.headerImg}
        />
        <h1 className={styles.h1}>Bercher Enterprise's Designs</h1>
      </header>

      {/* ── Main ── */}
      <main className={styles.main}>
        <h2 className={styles.h2}>Home</h2>

        <p className={styles.p}>
          At Bercher Enterprises, our design philosophy is rooted in the belief
          that clarity is the ultimate form of sophistication. We don't just build
          websites, we engineer digital experiences that balance aesthetic
          elegance with rigorous technical standards.
        </p>

        <ul className={styles.ul}>
          <li>
            <strong>CRAP Principle Mastery:</strong> Every design is rooted in
            Contrast, Repetition, Alignment, and Proximity to ensure maximum
            visual impact.
          </li>
          <li>
            <strong>User-Centric Navigation:</strong> We focus on intuitive
            layouts that guide users exactly where they need to go without
            friction.
          </li>
          <li>
            <strong>Scalable Solutions:</strong> We build folder structures and
            codebases that are organized and ready for future business growth.
          </li>
          <li>
            <strong>Semantic Architecture:</strong> We prioritize clean,
            accessible HTML5 to ensure your content is understood by both users
            and search engines.
          </li>
          <li>
            <strong>Custom Brand Integration:</strong> We don't use generic
            templates; every color palette is curated using modern tools like
            Coolors to match your unique brand identity.
          </li>
        </ul>

        <p className={styles.p}>
          <strong>What I can do for you:</strong> I provide comprehensive web
          consulting services that transform abstract business goals into
          polished, high-performance digital identities. Whether you need a sleek
          professional landing page or a structured corporate site, I specialize
          in crafting responsive, accessible, and standards-compliant layouts.
          From curated color theory implementation to the strategic grouping of
          content, I ensure your online presence is both visually memorable and
          technically superior.
        </p>

        <section id="contact" className={styles.contactSection}>
          <h3 className={styles.h3}>Contact Us</h3>
          <p className={styles.p}>Phone: 704-555-4287</p>
          <p className={styles.p}>Email: bercherenterprises@gmail.com</p>
          <p className={styles.p}>Address: 123 Web Way, Charlotte, NC</p>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <p>Page created by Bercher Enterprises</p>
      </footer>
    </div>
  );
}