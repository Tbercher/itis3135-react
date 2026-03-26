import Header from './Header';
import './styles/itis3135.css';

export default function WebsiteEvaluations() {
  return (
    <>
      <Header />
      <main>
        <h2>Website Evaluation (CRAP Principles)</h2>
        <section>
          <h3>
            <a href="https://www.airbnb.com/" target="_blank" rel="noreferrer">
              Airbnb
            </a>
          </h3>
          <ul>
            <li>
              <strong>Contrast:</strong> The website uses a simple but effective
              contrast of black text on a white background, The primary font for
              listings helps distinguish between the names of listings themselves
              and corresponding information with there being a grey subtext
              beneath it describing more details such as the price per nights
              and the rating.
            </li>
            <li>
              <strong>Repetition:</strong> The website uses a consistent card-like
              layout with each listing being card. This card includes an image of
              the listing, its price per nights, and its corresponding rating
              overall.
            </li>
            <li>
              <strong>Alignment:</strong> The website search bars are perfectly
              centered with the listings card-like presentation, making the large
              amount of information being displayed manageable.
            </li>
            <li>
              <strong>Proximity:</strong> All information is grouped together
              within the card-like interface when searching for a listing in an
              area, becoming more fleshed out upon selecting a card for further
              viewing.
            </li>
          </ul>
        </section>

        <hr />

        <section>
          <h3>
            <a href="https://www.lingscars.com/" target="_blank" rel="noreferrer">
              Lings Cars
            </a>
          </h3>
          <ul>
            <li>
              <strong>Contrast:</strong> Almost a complete and utter failure. The
              website's white and neon text paired with a neon or white
              background, along with its floral backdrop makes it difficult focus
              on any information the website has.
            </li>
            <li>
              <strong>Repetition:</strong> A blatant lack of consistency
              throughout the website. Fonts throughout the website use different
              colors and backdrops, making the website a mess visually and
              increasing the difficulty of the website's readability.
            </li>
            <li>
              <strong>Alignment:</strong> The alignment of the website itself is
              structured fairly well with everything being placed in areas that
              make sense, with all respective text and images being purposefully
              aligned accordingly.
            </li>
            <li>
              <strong>Proximity:</strong> All images and ideas throughout the
              website are located within close proximity to each other with
              image having corresponding information being right below it.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
