import Header from './Header';
import Footer from './Footer';
import './styles/itis3135.css';

export default function Product() {
  return (
    <>
      <h1>Trevor Bercher's Tenacious Bear | ITIS3135 | Product Page</h1>
      <Header />
      <main>
        <header id="header">
          <div className="logo">
            <img
              id="header-img"
              src="src\assets\BearLogo.png"
              alt="Tenacious Bear Camping Supply logo"
              style={{ height: '50px', width: 'auto' }}
            />
            <span id="brand-name">Tenacious Bear Camping Supplies</span>
          </div>

          <nav id="nav-bar">
            <ul>
              <li>
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li>
                <a className="nav-link" href="#how-it-works">How It Works</a>
              </li>
              <li>
                <a className="nav-link" href="#pricing">Pricing</a>
              </li>
            </ul>
          </nav>
        </header>

        <div id="page-wrapper">
          <div className="container" />

          <img
            id="main-img"
            src="src\assets\BearLogo.png"
            alt="Tenacious Bear Camping Supply logo"
            className="center-img"
          />

          <section id="hero">
            <h2>Rugged gear for the wild at heart</h2>
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

          <div className="container">
            <section id="features">
              <div className="grid">
                <div className="icon"><i className="fa fa-3x fa-shield" /></div>
                <div className="desc">
                  <h2>Bear-Proof Durability</h2>
                  <p>
                    Our gear is crafted from rugged, weather-resistant materials
                    sourced from trusted outdoor suppliers. Built to withstand the
                    harshest conditions so you can focus on the adventure.
                  </p>
                </div>
              </div>

              <div className="grid">
                <div className="icon"><i className="fa fa-3x fa-truck" /></div>
                <div className="desc">
                  <h2>Fast Shipping</h2>
                  <p>
                    We make sure you receive your camping supplies before your
                    next adventure. We also provide free returns if you are not
                    satisfied with your gear.
                  </p>
                </div>
              </div>

              <div className="grid">
                <div className="icon"><i className="fa fa-3x fa-check-circle" aria-hidden="true" /></div>
                <div className="desc">
                  <h2>Quality Assurance</h2>
                  <p>
                    For every purchase you make, we rigorously inspect each item
                    for defects and test it under real outdoor conditions before
                    it ships to your door.
                  </p>
                </div>
              </div>
            </section>

            <section id="how-it-works">
              <h2 className="hidden">How It Works</h2>
              <iframe
                id="video"
                height="315"
                src="https://www.youtube.com/embed/RSCyWvzkWlE?si=akz7EloyR6FdUyfC"
                title="Campfire setup"
                allowFullScreen
              />
            </section>

            <section id="pricing">
              <div className="product" id="tenor">
                <div className="level">Base Camp Kit</div>
                <h2>$89</h2>
                <ul>
                  <li>2-person weatherproof tent</li>
                  <li>Lightweight sleeping bag</li>
                  <li>Folding camp stove</li>
                  <li>Bear canister (1.3L)</li>
                </ul>
                <button className="btn">Select</button>
              </div>

              <div className="product" id="bass">
                <div className="level">Trail Blazer Kit</div>
                <h2>$179</h2>
                <ul>
                  <li>4-season 3-person tent</li>
                  <li>Insulated sleeping bag (-20°F)</li>
                  <li>Titanium cookware set</li>
                  <li>Bear canister (2.7L)</li>
                </ul>
                <button className="btn">Select</button>
              </div>

              <div className="product" id="valve">
                <div className="level">Summit Pack Bundle</div>
                <h2>$299</h2>
                <ul>
                  <li>Expedition 4-season tent</li>
                  <li>Ultralight sleeping system</li>
                  <li>Full backcountry cook kit</li>
                  <li>Bear canister (4.2L) + spray</li>
                </ul>
                <button className="btn">Select</button>
              </div>
            </section>

            <footer>
              <span>Copyright 2026, Tenacious Bear Camping Supply</span>
            </footer>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
