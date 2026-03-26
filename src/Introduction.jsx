import { Link } from 'react-router';
// Import your CSS Module here. 
// Note: Change 'Introduction.module.css' if you named your file something else!
import styles from "./styles/home.module.css";
import { useHomeTitle} from './usetitle';

export default function Introduction() {
  useHomeTitle("Introduction");
  return (
    /* REPLACED the empty <> fragment with the pageContainer wrapper */
    <div className={styles.pageContainer}>
      <header>
        <h1>Trevor Bercher's Website</h1>
        <nav>
          <ul>
            <li><Link to="/">Home Page</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Introduction</h2>

        <figure>
          <img
            src="src/assets/myprofessionalheadshot.png"
            alt="A professional photo of Trevor Bercher."
            height="500"
            width="500"
          />
          <figcaption>Trevor Bercher - Student at UNC Charlotte</figcaption>
        </figure>

      <p>
        I’m a senior at UNC Charlotte studying Computer Science with a
        concentration in information technology. I’m excited to learn about
        front end web app development this semester.
      </p>

      <h3>Background & Interests</h3>
      <ul>
        <li>
          <strong>Personal Background:</strong> I’m currently 25 years old and a
          student veteran, I like to play strategy games in my free time.
        </li>
        <li>
          <strong>Professional Background:</strong> After my time in the
          military I’ve been working part time at Walmart while going to school.
        </li>
        <li>
          <strong>Academic Background:</strong> I’m currently a senior at UNC
          Charlotte studying computer science with a focus in Information
          Technology. Before that I attended community college at Central
          Piedmont Community College.
        </li>
        <li>
          <strong>Background in this Subject:</strong> I have little to no
          background in this subject and am excited to learn.
        </li>
        <li>
          <strong>Primary Work Computer:</strong> I primarily use a custom
          desktop computer.
        </li>
        <li>
          <strong>Backup Work Computer & Location Plan:</strong> I will use my
          school laptop and go to the Atkins library to complete my tasks.
        </li>
      </ul>
      <h3>Current Course Load</h3>
      <ol>
        <li>
          <strong>ITIS3200 - Intro to Info Security & Privacy:</strong>
          Interesting class.
        </li>
        <li>
          <strong>ITIS3135 - Front-End App Development:</strong> Required and
          interesting class.
        </li>
        <li>
          <strong>ITIS3155 - Software Engineering:</strong> Required class I
          have to take to graduate on time.
        </li>
        <li>
          <strong>ITIS3160 - Database Design & Implementation:</strong> Required
          course also learning SQL seemed interesting and useful.
        </li>
        <li>
          <strong>STAT2223 - Elements of Statistics II:</strong> Required course.
        </li>
      </ol>

      <ul>
        <li>
          <strong>Funny/Interesting item to remember me by:</strong> I had a job
          that required me to wear a safari hat.
        </li>
        <li>
          <strong>I’d also like to share:</strong> I lived in Australia for 6
          months.
        </li>
      </ul>

      <blockquote>
        “The journey of a thousand miles begins with a single step”
        <cite>- Lao Tzu</cite>
      </blockquote>
    </main>

    <footer>
      <nav>
        <ul>
          <li><a href="https://github.com/Tbercher">GitHub</a></li>
          <li><a href="https://tbercher.github.io/">GitHub.io</a></li>
          <li><a href="https://webpages.charlotte.edu/tbercher/">CLT Web</a></li>
          <li><a href="https://www.freecodecamp.org/tbercher">freeCodeCamp</a></li>
          <li><a href="https://www.linkedin.com/in/trevorbercher/">LinkedIn</a></li>
        </ul>
        <ul>
          <li><a href="https://bercherenterprises.com">Page built by Bercher Enterprises</a></li>
          <li><a href="https://www.freecodecamp.org/certification/tbercher/responsive-web-design-v9">Designed by Trevor Bercher Certified in Responsive Web Design</a></li>
        </ul>
      </nav>
    </footer>
  </div>
  );
}