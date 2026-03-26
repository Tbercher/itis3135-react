import { use } from "react";
import styles from "/src/styles/product.module.css";
import HeaderComponent from "./Header";
import Footer from "./Footer";
import { useItisTitle } from "./usetitle";

export default function Product() {
  use
  return (
    <div className={styles.body}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400..700;1,400..700&display=swap"
        rel="stylesheet"
      />

      {/* Font Awesome for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      {/* CSS custom properties (woodland theme variables) */}
      <style>{`
        :root {
          --forest: #2d4a2d;
          --forest-dark: #1a2e1a;
          --bark: #5c3d1e;
          --moss: #4a6741;
          --amber: #c87941;
          --amber-light: #e8a55a;
          --cream: #f5efe6;
          --earth: #7a5c3a;
        }
      `}</style>

      <header>
        <h1 className={styles.h1}>
          Trevor Bercher's Tenacious Bear | ITIS3135 | Product Landing
        </h1>
      </header>

      
      <HeaderComponent /> 

      {/* Brand / nav header — full width, outside main */}
      <header id="header" className={styles.siteHeader}>
        <div className={styles.logo}>
          <img
            id="header-img"
            src="src/assets/BearLogo.png"
            alt="Tenacious Bear Camping Supply logo"
            style={{ height: "50px", width: "auto" }}
          />
          <span id="brand-name" className={styles.brandName}>
            Tenacious Bear Camping Supplies
          </span>
        </div>

        <nav id="nav-bar" className={styles.navBar}>
          <ul>
            <li>
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li>
              <a className="nav-link" href="#how-it-works">
                How It Works
              </a>
            </li>
            <li>
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <div id="page-wrapper">
          <div className={styles.container}></div>

          <img
            id="main-img"
            src="src/assets/BearLogo.png"
            alt="Tenacious Bear Camping Supply logo"
            className={styles.centerImg}
          />

          {/* Hero */}
          <section id="hero" className={styles.hero}>
            <h2 className={styles.h2}>Rugged gear for the wild at heart</h2>
            <form id="form" action="https://www.freecodecamp.org/email-submit">
              <label htmlFor="email">Email Address:</label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email address"
                required
              />
              <input id="submit" type="submit" value="Get Started" className="btn" />
            </form>
          </section>

          <div className={styles.container}>
            {/* Features */}
            <section id="features" className={styles.features}>
              <div className="grid">
                <div className={styles.icon}>
                  <i className="fa fa-3x fa-shield"></i>
                </div>
                <div className={styles.desc}>
                  <h2 className={styles.h2}>Bear-Proof Durability</h2>
                  <p className={styles.p}>
                    Our gear is crafted from rugged, weather-resistant materials
                    sourced from trusted outdoor suppliers. Built to withstand
                    the harshest conditions so you can focus on the adventure.
                  </p>
                </div>
              </div>

              <div className="grid">
                <div className={styles.icon}>
                  <i className="fa fa-3x fa-truck"></i>
                </div>
                <div className={styles.desc}>
                  <h2 className={styles.h2}>Fast Shipping</h2>
                  <p className={styles.p}>
                    We make sure you receive your camping supplies before your
                    next adventure. We also provide free returns if you are not
                    satisfied with your gear.
                  </p>
                </div>
              </div>

              <div className="grid">
                <div className={styles.icon}>
                  <i className="fa fa-3x fa-check-circle" aria-hidden="true"></i>
                </div>
                <div className={styles.desc}>
                  <h2 className={styles.h2}>Quality Assurance</h2>
                  <p className={styles.p}>
                    For every purchase you make, we rigorously inspect each item
                    for defects and test it under real outdoor conditions before
                    it ships to your door.
                  </p>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className={styles.howItWorks}>
              <h2 className={styles.hidden}>How It Works</h2>
              <iframe
                id="video"
                height="315"
                src="https://www.youtube.com/embed/RSCyWvzkWlE?si=akz7EloyR6FdUyfC"
                allowFullScreen
                title="How It Works"
              ></iframe>
            </section>

            {/* Pricing */}
            <section id="pricing" className={styles.pricing}>
              <div className={styles.product} id="tenor">
                <div className={styles.level}>Base Camp Kit</div>
                <h2 className={styles.h2}>$89</h2>
                <ul>
                  <li>2-person weatherproof tent</li>
                  <li>Lightweight sleeping bag</li>
                  <li>Folding camp stove</li>
                  <li>Bear canister (1.3L)</li>
                </ul>
                <button className="btn">Select</button>
              </div>

              <div className={styles.product} id="bass">
                <div className={styles.level}>Trail Blazer Kit</div>
                <h2 className={styles.h2}>$179</h2>
                <ul>
                  <li>4-season 3-person tent</li>
                  <li>Insulated sleeping bag (-20°F)</li>
                  <li>Titanium cookware set</li>
                  <li>Bear canister (2.7L)</li>
                </ul>
                <button className="btn">Select</button>
              </div>

              <div className={styles.product} id="valve">
                <div className={styles.level}>Summit Pack Bundle</div>
                <h2 className={styles.h2}>$299</h2>
                <ul>
                  <li>Expedition 4-season tent</li>
                  <li>Ultralight sleeping system</li>
                  <li>Full backcountry cook kit</li>
                  <li>Bear canister (4.2L) + spray</li>
                </ul>
                <button className="btn">Select</button>
              </div>
            </section>

            {/* Copyright footer */}
            <footer className={styles.containerFooter}>
              <span>Copyright 2026, Tenacious Bear Camping Supply</span>
            </footer>
          </div>
        </div>
      </main>

      
      <Footer/>
    </div>
  );
}
