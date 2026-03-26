import React, { useState, useEffect } from 'react';
export default function PhysicalMediaCollection() {
  // 1. Manage the active section using React State instead of DOM manipulation
  const [activeSection, setActiveSection] = useState('what');

  // 2. Automatically update the document title whenever the active section changes
  useEffect(() => {
    const sectionNames = {
      'what': 'What',
      'who': 'Who',
      'when': 'When',
      'where': 'Where',
      'how': 'How',
      'why': 'Why',
      'ai-prompts': 'AI Prompts'
    };
    
    document.title = `Hobby Site | Physical Media Collection | ${sectionNames[activeSection]}`;
  }, [activeSection]);

  // Handle navigation clicks
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
  };

  return (
    <>
      <header>
        <h1>Physical Media Collection</h1>
        <nav>
          <a href="#what" onClick={(e) => handleNavClick(e, 'what')}>What</a>
          <span className="nav-divider">凍</span>
          <a href="#who" onClick={(e) => handleNavClick(e, 'who')}>Who</a>
          <span className="nav-divider">凍</span>
          <a href="#when" onClick={(e) => handleNavClick(e, 'when')}>When</a>
          <span className="nav-divider">凍</span>
          <a href="#where" onClick={(e) => handleNavClick(e, 'where')}>Where</a>
          <span className="nav-divider">凍</span>
          <a href="#how" onClick={(e) => handleNavClick(e, 'how')}>How</a>
          <span className="nav-divider">凍</span>
          <a href="#why" onClick={(e) => handleNavClick(e, 'why')}>Why</a>
          <span className="nav-divider">凍</span>
          <a href="#ai-prompts" onClick={(e) => handleNavClick(e, 'ai-prompts')}>AI Prompts</a>
        </nav>
      </header>

      <main>
        <section id="what" className={activeSection === 'what' ? 'active' : ''}>
          <h2>What is Physical Media Collection?</h2>
          <p>
            Physical media collection is the dedicated hobby of acquiring,
            archiving, and enjoying physical formats of entertainment. In an era
            dominated by invisible digital streams, this hobby focuses on data
            stored in phyisical means like discs and cassettes with examples
            being:
          </p>
          <ul>
            <li>
              <strong>Film & Television:</strong> Blu-rays, 4K UHDs, and boutique
              label releases (like Criterion or Arrow Video).
            </li>
            <li>
              <strong>Video Games:</strong> Cartridges and discs across various
              console generations.
            </li>
            <li><strong>Music:</strong> Vinyl records, CDs, and cassettes.</li>
          </ul>
          <figure>
            <img
              src="src\assets\what-collection.png"
              alt="A well-organized shelf displaying Blu-rays and other physical media."
              width="600"
              height="400"
            />
            <figcaption>
              A curated shelf showcasing a diverse physical media library.
              <br /><i>AI Prompt: "A stack of Blu-ray movie cases and other physical
                media on a dark wooden shelf, photorealistic."</i>
            </figcaption>
          </figure>
        </section>

        <section id="who" className={activeSection === 'who' ? 'active' : ''}>
          <h2>The Collector (Who / About Me)</h2>
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
          <figure>
            <img
              src="src\assets\who-collector.png"
              alt="A man sitting near a bookshelf with a dog"
              width="600"
              height="400"
            />
            <figcaption>
              Stepping away from the code to organize the shelves. <br /><i>AI Prompt: "Using these photos generate a photo realistic image
                of a man and his dog sitting next to a massive home theater
                bookshelf (Photos were of myself and my dog bella)"</i>
            </figcaption>
          </figure>
        </section>

        <section id="when" className={activeSection === 'when' ? 'active' : ''}>
          <h2>When to Hunt for Physical Media</h2>
          <p>
            Building a solid collection requires timing. While you can buy movies
            and games online 24/7, the true thrill of the hunt comes from knowing
            exactly <em>when</em> to look for the best additions to the archive.
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <tbody>
              <tr>
                <th style={{ padding: '10px' }}>Season / Time</th>
                <th style={{ padding: '10px' }}>Best For</th>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>November (Black Friday)</td>
                <td style={{ padding: '10px' }}>
                  Deep discounts on boutique labels (Criterion 50% off sales).
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Saturday Mornings</td>
                <td style={{ padding: '10px' }}>
                  Flea markets, garage sales, and thrift store weekend restocks.
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Monday and Tuesday Mornings</td>
                <td style={{ padding: '10px' }}>
                  Typically thrift stores restock at this time of the week, its
                  store dependent but these are the typical days so check
                  beforehand.
                </td>
              </tr>
            </tbody>
          </table>
          <figure>
            <img
              src="src\assets\when-calendar.png"
              alt="A calendar highlighting the weekend"
              width="600"
              height="400"
            />
            <figcaption>
              Marking the calendar for the next big boutique label sale. <br /><i>AI Prompt: "A photo realistic calendar with the weekend circled
                in green marker"</i>
            </figcaption>
          </figure>
        </section>

        <section id="where" className={activeSection === 'where' ? 'active' : ''}>
          <h2>Where to Find the Best Media</h2>
          <p>
            Part of the hobby is exploring different venues. From local
            brick-and-mortar shops around Charlotte to vast online networks,
            expanding the collection takes you to many places.
          </p>
          <form
            action="#"
            method="get"
            style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '15px',
              borderRadius: '5px'
            }}
          >
            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
              <legend style={{ marginBottom: '10px', fontWeight: 'bold', fontSize: '1.2em' }}>
                Vote for your favorite hunting ground:
              </legend>

              <input type="radio" id="local" name="location" value="local" />
              <label htmlFor="local">Local Used Record/Movie Stores</label><br />

              <input type="radio" id="online" name="location" value="online" />
              <label htmlFor="online">Online Auctions (eBay, Mercari)</label><br />

              <input type="radio" id="MajorRetailers" name="location" value="retailers" />
              <label htmlFor="MajorRetailers">Major Retailers (Target, Walmart, Barnes and Noble)</label><br />

              <input type="radio" id="FacebookMarketplace" name="location" value="marketplace" />
              <label htmlFor="FacebookMarketplace">Facebook Marketplace</label><br />

              <input type="radio" id="other" name="location" value="other" />
              <label htmlFor="other">Other</label><br />

              <input
                type="button"
                value="Submit Vote"
                onClick={() => alert('Vote Submitted')}
                style={{
                  marginTop: '10px',
                  fontFamily: 'var(--body-font)',
                  backgroundColor: 'var(--accent-color)',
                  color: 'var(--nav-bg)',
                  border: 'none',
                  padding: '6px 12px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  borderRadius: '3px'
                }}
              />
            </fieldset>
          </form>
          <figure>
            <img
              src="src\assets\where-store.png"
              alt="Interior of a vintage media store"
              width="600"
              height="400"
            />
            <figcaption>
              The aisles of a classic local movie shop. <br /><i>AI Prompt: "a photorealistic vintage movie store packed shelves
                highly detailed."</i>
            </figcaption>
          </figure>
        </section>

        <section id="how" className={activeSection === 'how' ? 'active' : ''}>
          <h2>How to Curate and Store</h2>
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
          <figure>
            <img
              src="src\assets\how-shelves.png"
              alt="Perfectly organized media shelves"
              width="600"
              height="400"
            />
            <figcaption>
              An alphabetized physical media library. <br /><i>AI Prompt: "Perfectly organized shelves of Blu-ray movies and
                video games, neatly aligned, photorealstic."</i>
            </figcaption>
          </figure>
        </section>

        <section id="why" className={activeSection === 'why' ? 'active' : ''}>
          <h2>Why Keep Physical Discs?</h2>
          <p>
            In the age of streaming, why bother with physical boxes? The answer
            lies in digital rights, video quality, and the simple joy of
            ownership.
          </p>
          <blockquote
            style={{
              borderLeft: '4px solid var(--accent-color)',
              paddingLeft: '15px',
              fontStyle: 'italic'
            }}
          >
            "You don't own what you stream. Titles disappear from platforms every
            day due to licensing issues. Physical media is the only guarantee that
            your favorite film will be there when you want to watch it."
          </blockquote>
          <p>
            Furthermore, 4K UHD discs offer significantly higher bitrates than 4K
            streaming, meaning uncompressed, flawless audio and visual experiences
            without buffering.
          </p>
          <figure>
            <img
              src="src\assets\why-disc.png"
              alt="A physical disc held against a digital cloud"
              width="600"
              height="400"
            />
            <figcaption>
              Tangible ownership over temporary licenses. <br /><i>AI Prompt: "A realistic contrast between a glowing holographic
                cloud and a solid, tangible media disc held in a hand."</i>
            </figcaption>
          </figure>
        </section>

        <section id="ai-prompts" className={activeSection === 'ai-prompts' ? 'active' : ''}>
          <h2>AI Usage</h2>
          <p>
            Google's Gemini Generative AI was utilized to assist in the
            conceptualization and coding of this single-page application, ensuring
            structural compliance and CRAP design principles.
          </p>
          <ul>
            <li>
              <strong>Code Generation:</strong> AI was prompted to generate an
              Script utilizing JavaScript to toggle the
              <code>display</code> property of semantic
              <code>&lt;section&gt;</code> tags.
            </li>
            {/* ... other list items remain the same */}
          </ul>
        </section>
      </main>

      <footer>
        <p>
          Designed by
          <a href="../bercherenterprises.com/index.html">Bercher Enterprises</a>
        </p>
      </footer>
    </>
  );
}