import { use, useState } from "react";
import styles from "./src/styles/hobby.module.css";
import { useItisTitle } from "./usetitle";

const navItems = [
  { id: "what",       label: "What" },
  { id: "who",        label: "Who" },
  { id: "when",       label: "When" },
  { id: "where",      label: "Where" },
  { id: "how",        label: "How" },
  { id: "why",        label: "Why" },
  { id: "ai-prompts", label: "AI Prompts" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("what");

  const showSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    document.title = `Hobby Site | Physical Media Collection | ${
      navItems.find((n) => n.id === id)?.label ?? id
    }`;
  };

  return ( 
    useItisTitle("Physical Media Collection"),
    <div className={styles.body}>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=VT323&display=swap"
        rel="stylesheet"
      />

      {/* ── Header ── */}
      <header className={styles.header}>
        <h1 className={styles.h1}>Physical Media Collection</h1>
        <nav className={styles.nav}>
          {navItems.map((item, i) => (
            <>
              {i > 0 && (
                <span key={`div-${item.id}`} className={styles.navDivider}>
                  📀
                </span>
              )}
              <a
                key={item.id}
                href={`#${item.id}`}
                className={styles.navLink}
                onClick={(e) => showSection(e, item.id)}
              >
                {item.label}
              </a>
            </>
          ))}
        </nav>
      </header>

      {/* ── Main ── */}
      <main className={styles.main}>

        {/* ── What ── */}
        {activeSection === "what" && (
          <section id="what" className={styles.sectionPanel}>
            <h2 className={styles.h2}>What is Physical Media Collection?</h2>
            <p>
              Physical media collection is the dedicated hobby of acquiring,
              archiving, and enjoying physical formats of entertainment. In an era
              dominated by invisible digital streams, this hobby focuses on data
              stored in physical means like discs and cassettes with examples being:
            </p>
            <ul>
              <li>
                <strong>Film &amp; Television:</strong> Blu-rays, 4K UHDs, and
                boutique label releases (like Criterion or Arrow Video).
              </li>
              <li>
                <strong>Video Games:</strong> Cartridges and discs across various
                console generations.
              </li>
              <li>
                <strong>Music:</strong> Vinyl records, CDs, and cassettes.
              </li>
            </ul>
            <figure className={styles.figure}>
              <img
                src="src/assets/what-collection.png"
                alt="A well-organized shelf displaying Blu-rays and other physical media."
                width="600"
                height="400"
              />
              <figcaption className={styles.figcaption}>
                A curated shelf showcasing a diverse physical media library.
                <br />
                <i>AI Prompt: "A stack of Blu-ray movie cases and other physical
                media on a dark wooden shelf, photorealistic."</i>
              </figcaption>
            </figure>
          </section>
        )}

        {/* ── Who ── */}
        {activeSection === "who" && (
          <section id="who" className={styles.sectionPanel}>
            <h2 className={styles.h2}>The Collector (Who / About Me)</h2>
            <p>
              As a 25-year old student veteran and computer science senior at UNC
              Charlotte, my days are often heavily immersed in screens, code, and
              studying the intricacies of information technology. Navigating the
              digital world is my profession and my major, which makes stepping away
              from it all the more important.
            </p>
            <p>
              When I'm not diving into strategy games or spending time with my dog,
              Bella, I focus my free time on something beautifully disconnected from
              the cloud. Collecting physical media allows me to anchor my love for
              art and entertainment in something tangible that I can actually hold.
            </p>
            <figure className={styles.figure}>
              <img
                src="src/assets/who-collector.png"
                alt="A man sitting near a bookshelf with a dog"
                width="600"
                height="400"
              />
              <figcaption className={styles.figcaption}>
                Stepping away from the code to organize the shelves.
                <br />
                <i>AI Prompt: "Using these photos generate a photo realistic image
                of a man and his dog sitting next to a massive home theater
                bookshelf (Photos were of myself and my dog bella)"</i>
              </figcaption>
            </figure>
          </section>
        )}

        {/* ── When ── */}
        {activeSection === "when" && (
          <section id="when" className={styles.sectionPanel}>
            <h2 className={styles.h2}>When to Hunt for Physical Media</h2>
            <p>
              Building a solid collection requires timing. While you can buy movies
              and games online 24/7, the true thrill of the hunt comes from knowing
              exactly <em>when</em> to look for the best additions to the archive.
            </p>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th>Season / Time</th>
                  <th>Best For</th>
                </tr>
                <tr>
                  <td>November (Black Friday)</td>
                  <td>Deep discounts on boutique labels (Criterion 50% off sales).</td>
                </tr>
                <tr>
                  <td>Saturday Mornings</td>
                  <td>Flea markets, garage sales, and thrift store weekend restocks.</td>
                </tr>
                <tr>
                  <td>Monday and Tuesday Mornings</td>
                  <td>
                    Typically thrift stores restock at this time of the week, its
                    store dependent but these are the typical days so check beforehand.
                  </td>
                </tr>
              </tbody>
            </table>
            <figure className={styles.figure}>
              <img
                src="src/assets/when-calendar.png"
                alt="A calendar highlighting the weekend"
                width="600"
                height="400"
              />
              <figcaption className={styles.figcaption}>
                Marking the calendar for the next big boutique label sale.
                <br />
                <i>AI Prompt: "A photo realistic calendar with the weekend circled
                in green marker"</i>
              </figcaption>
            </figure>
          </section>
        )}

        {/* ── Where ── */}
        {activeSection === "where" && (
          <section id="where" className={styles.sectionPanel}>
            <h2 className={styles.h2}>Where to Find the Best Media</h2>
            <p>
              Part of the hobby is exploring different venues. From local
              brick-and-mortar shops around Charlotte to vast online networks,
              expanding the collection takes you to many places.
            </p>
            <form
              className={styles.voteForm}
              onSubmit={(e) => { e.preventDefault(); alert("Vote Submitted"); }}
            >
              <fieldset className={styles.voteFieldset}>
                <legend className={styles.voteLegend}>
                  Vote for your favorite hunting ground:
                </legend>

                <input type="radio" id="local" name="location" value="local" />
                <label htmlFor="local">Local Used Record/Movie Stores</label><br />

                <input type="radio" id="online" name="location" value="online" />
                <label htmlFor="online">Online Auctions (eBay, Mercari)</label><br />

                <input type="radio" id="MajorRetailers" name="location" value="majorRetailers" />
                <label htmlFor="MajorRetailers">
                  Major Retailers (Target, Walmart, Barnes and Noble)
                </label><br />

                <input type="radio" id="FacebookMarketplace" name="location" value="facebookMarketplace" />
                <label htmlFor="FacebookMarketplace">Facebook Marketplace</label><br />

                <input type="radio" id="other" name="location" value="other" />
                <label htmlFor="other">Other</label><br />

                <input
                  type="submit"
                  value="Submit Vote"
                  className={styles.voteSubmit}
                />
              </fieldset>
            </form>
            <figure className={styles.figure}>
              <img
                src="src/assets/where-store.png"
                alt="Interior of a vintage media store"
                width="600"
                height="400"
              />
              <figcaption className={styles.figcaption}>
                The aisles of a classic local movie shop.
                <br />
                <i>AI Prompt: "a photorealistic vintage movie store packed shelves
                highly detailed."</i>
              </figcaption>
            </figure>
          </section>
        )}

        {/* ── How ── */}
        {activeSection === "how" && (
          <section id="how" className={styles.sectionPanel}>
            <h2 className={styles.h2}>How to Curate and Store</h2>
            <p>
              Collecting isn't just about hoarding; it's about curation,
              preservation, and display. Proper organization ensures that media
              outlasts its digital counterparts.
            </p>
            <ol>
              <li>
                <strong>Cataloging:</strong> Use apps like CLZ Movies or Blu-ray.com
                to scan barcodes and track what you own.
              </li>
              <li>
                <strong>Shelving:</strong> Organize alphabetically, by genre, or by
                boutique label spines (the age-old debate).
              </li>
              <li>
                <strong>Maintenance:</strong> Keep discs out of direct sunlight and
                handle them strictly by the edges.
              </li>
            </ol>
            <figure className={styles.figure}>
              <img
                src="src/assets/how-shelves.png"
                alt="Perfectly organized media shelves"
                width="600"
                height="400"
              />
              <figcaption className={styles.figcaption}>
                An alphabetized physical media library.
                <br />
                <i>AI Prompt: "Perfectly organized shelves of Blu-ray movies and
                video games, neatly aligned, photorealstic."</i>
              </figcaption>
            </figure>
          </section>
        )}

        {/* ── Why ── */}
        {activeSection === "why" && (
          <section id="why" className={styles.sectionPanel}>
            <h2 className={styles.h2}>Why Keep Physical Discs?</h2>
            <p>
              In the age of streaming, why bother with physical boxes? The answer
              lies in digital rights, video quality, and the simple joy of ownership.
            </p>
            <blockquote className={styles.blockquote}>
              "You don't own what you stream. Titles disappear from platforms every
              day due to licensing issues. Physical media is the only guarantee that
              your favorite film will be there when you want to watch it."
            </blockquote>
            <p>
              Furthermore, 4K UHD discs offer significantly higher bitrates than 4K
              streaming, meaning uncompressed, flawless audio and visual experiences
              without buffering.
            </p>
            <figure className={styles.figure}>
              <img
                src="src/assets/why-disc.png"
                alt="A physical disc held against a digital cloud"
                width="600"
                height="400"
              />
              <figcaption className={styles.figcaption}>
                Tangible ownership over temporary licenses.
                <br />
                <i>AI Prompt: "A realistic contrast between a glowing holographic
                cloud and a solid, tangible media disc held in a hand."</i>
              </figcaption>
            </figure>
          </section>
        )}

        {/* ── AI Prompts ── */}
        {activeSection === "ai-prompts" && (
          <section id="ai-prompts" className={styles.sectionPanel}>
            <h2 className={styles.h2}>AI Usage</h2>
            <p>
              Google's Gemini Generative AI was utilized to assist in the
              conceptualization and coding of this single-page application, ensuring
              structural compliance and CRAP design principles.
            </p>
            <ul>
              <li>
                <strong>Code Generation:</strong> AI was prompted to generate a
                script utilizing JavaScript to toggle the{" "}
                <code className={styles.code}>display</code> property of semantic{" "}
                <code className={styles.code}>&lt;section&gt;</code> tags.
                <br />
                <strong>Prompt:</strong> "I am building a vanilla JS single page app
                with this structure:
                <br />
                <code className={styles.code}>&lt;section id="home" class="active"&gt;...&lt;/section&gt;</code>
                <br />
                <code className={styles.code}>&lt;section id="about"&gt;...&lt;/section&gt;</code>
                <br />
                <code className={styles.code}>&lt;section id="contact"&gt;...&lt;/section&gt;</code>
                <br />
                Write a JavaScript function called showSection(sectionId) that I can
                trigger from my navigation buttons. It should find all sections in
                the main tag, strip the 'active' class from them, and apply it only
                to the one matching the passed ID. Comment the steps clearly (1, 2, 3)."
              </li>
              <li>
                <strong>Font and Color Scheme:</strong> AI was used to help generate
                a list of fonts and color schemes to choose for the website.
                <br />
                <strong>Prompt:</strong> Generate a variety of fonts that give a
                "nerdy" vibe that I can choose from, also generate a few different
                color schemes for a website focusing on a dark forest green being the
                main color.
              </li>
              <li>
                <strong>Image Generation:</strong> AI was used to generate all
                thematic imagery to maintain a consistent visual style throughout the
                assignment. Beneath each image is the respective prompt that was
                utilized to generate the image.
              </li>
              <li>
                <strong>Title Generation when clicked:</strong> AI was used to
                generate javascript that combines the h1 + | + whichever section was
                clicked to make an appropriate title for each respective webpage.
                <br />
                <strong>Prompt:</strong> use javascript to combine the words Hobby
                Site + | + h1 + | + the name of whichever section was clicked to
                make an appropriate title for the webpage.
              </li>
              <li>
                <strong>Assignment Requirement Validation:</strong> AI was used to
                validate that all requirements given on the canvas webpage were
                achieved.
                <br />
                <strong>Prompt:</strong> Using the following{" "}
                <a
                  href="document.pdf"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="PDF Document (opens in a new tab)"
                >
                  PDF Document
                </a>{" "}
                validate that all rubric requirements were met on the following code.
                (for the sake of simplicity I won't be pasting the entire code block)
                if not make a detailed list of what is missing and how that can be fixed.
              </li>
            </ul>
          </section>
        )}

      </main>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <p>
          Designed by{" "}
          <a href="../bercherenterprises.com/index.html">Bercher Enterprises</a>
        </p>
      </footer>
    </div>
  );
}