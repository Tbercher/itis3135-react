import { Link } from 'react-router';

export default function Home() {
  return (
    <>
      <header>
        <h1>Trevor Bercher's Home Page</h1>
        <nav>
          <ul>
            <li><Link to="/introduction">Introduction</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Home</h2>
        <p>
          Welcome to my personal home page, I am a student veteran that is
          currently studying Computer Science at the University of North Carolina
          at Charlotte, This site will serve as central hub for my coursework,
          professional profiles, and personal projects.
        </p>
        <p>
          You can learn a bit more about my background on my <Link to="/introduction"> introduction page</Link>.
        </p>
      </main>

      <footer>
        <nav>
          <ul>
            <li><a href="https://github.com/Tbercher">GitHub</a></li>
            <li><a href="https://tbercher.github.io/">GitHub.io</a></li>
            <li><a href="https://webpages.charlotte.edu/tbercher/">CLT Web</a></li>
            <li><a href="itis3135">ITIS3135</a></li>
            <li><a href="https://www.linkedin.com/in/trevorbercher/">LinkedIn</a></li>
          </ul>
          <ul>
            <li><a href="itis3135/bercherenterprises.com/index.html">Page built by Bercher Enterprises</a></li>
            <li><a href="https://www.freecodecamp.org/certification/tbercher/responsive-web-design-v9">Designed by Trevor Bercher Certified in Responsive Web Design</a></li>
          </ul>
        </nav>
      </footer>
    </>
  );
}