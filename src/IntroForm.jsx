import { use, useState } from "react";
import styles from "/src/styles/intro_form.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { useItisTitle } from "./usetitle";

const initialCourses = [
  { dept: "ITIS", num: "3200", name: "Intro to Info Security & Privacy",    reason: "Interesting class." },
  { dept: "ITIS", num: "3135", name: "Front-End App Development",           reason: "Required and interesting class." },
  { dept: "ITIS", num: "3155", name: "Software Engineering",                reason: "Required class I have to take to graduate on time." },
  { dept: "ITIS", num: "3160", name: "Database Design & Implementation",    reason: "Required course also learning SQL seemed interesting and useful." },
  { dept: "STAT", num: "2223", name: "Elements of Statistics II",           reason: "Required course." },
];

const initialLinks = [
  { name: "CLT Web",      url: "https://webpages.charlotte.edu/tbercher/" },
  { name: "GitHub.io",    url: "https://tbercher.github.io" },
  { name: "GitHub",       url: "https://github.com/tbercher" },
  { name: "freeCodeCamp", url: "https://www.freecodecamp.org/tbercher" },
  { name: "LinkedIn",     url: "https://www.linkedin.com/in/trevorbercher/" },
];

export default function IntroForm() {

  useItisTitle("Introduction Form");  
  // Personal Information
  const [firstName,    setFirstName]    = useState("Trevor");
  const [middleName,   setMiddleName]   = useState("J.");
  const [nickname,     setNickname]     = useState("");
  const [lastName,     setLastName]     = useState("Bercher");
  const [ackStatement, setAckStatement] = useState(
    "I understand that what I put here is publicly available on the web and I won't put anything here I don't want the public to see"
  );
  const [ackDate,      setAckDate]      = useState("2026-01-12");
  const [mascotAdj,    setMascotAdj]    = useState("Tenacious");
  const [mascotAnimal, setMascotAnimal] = useState("Bear");
  const [divider,      setDivider]      = useState("|");

  // Image & Content
  const [caption,        setCaption]        = useState("Trevor Bercher - Student at UNC Charlotte");
  const [personalState,  setPersonalState]  = useState(
    "I'm a senior at UNC Charlotte studying Computer Science with a concentration in information technology. I'm excited to learn about front end web app development this semester."
  );
  const [personalBg,     setPersonalBg]     = useState(
    "I'm currently 25 years old and a student veteran, I like to play strategy games in my free time."
  );
  const [professionalBg, setProfessionalBg] = useState(
    "After my time in the military I've been working part time at Walmart while going to school."
  );
  const [academicBg,     setAcademicBg]     = useState(
    "I'm currently a senior at UNC Charlotte studying computer science with a focus in Information Technology. Before that I attended community college at Central Piedmont Community College."
  );
  const [subjectBg,      setSubjectBg]      = useState(
    "I have little to no background in this subject and am excited to learn."
  );
  const [computerBg,     setComputerBg]     = useState(
    "I primarily use a custom desktop computer. Backup Work Computer & Location Plan: I will use my school laptop and go to the Atkins library to complete my tasks."
  );
  const [funnyItem,      setFunnyItem]      = useState("I had a job that required me to wear a safari hat.");
  const [shareItem,      setShareItem]      = useState("I lived in Australia for 6 months.");

  // Courses
  const [courses, setCourses] = useState(initialCourses);

  const addCourse = () =>
    setCourses([...courses, { dept: "", num: "", name: "", reason: "" }]);

  const deleteCourse = (index) =>
    setCourses(courses.filter((_, i) => i !== index));

  const updateCourse = (index, field, value) =>
    setCourses(courses.map((c, i) => (i === index ? { ...c, [field]: value } : c)));

  // Extras & Links
  const [quote,       setQuote]       = useState("The journey of a thousand miles begins with a single step");
  const [quoteAuthor, setQuoteAuthor] = useState("Lao Tzu");
  const [links,       setLinks]       = useState(initialLinks);

  const addLink = () =>
    setLinks([...links, { name: "", url: "" }]);

  const deleteLink = (index) =>
    setLinks(links.filter((_, i) => i !== index));

  const updateLink = (index, field, value) =>
    setLinks(links.map((l, i) => (i === index ? { ...l, [field]: value } : l)));

  // Output
  const [outputVisible, setOutputVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutputVisible(true);
  };

  const handleReset = () => {
    setOutputVisible(false);
  };

  const handleClear = () => {
    setFirstName(""); setMiddleName(""); setNickname(""); setLastName("");
    setAckStatement(""); setAckDate(""); setMascotAdj(""); setMascotAnimal("");
    setDivider(""); setCaption(""); setPersonalState(""); setPersonalBg("");
    setProfessionalBg(""); setAcademicBg(""); setSubjectBg(""); setComputerBg("");
    setFunnyItem(""); setShareItem(""); setCourses([]); setQuote("");
    setQuoteAuthor(""); setLinks([]); setOutputVisible(false);
  };

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
          Trevor Bercher's Tenacious Bear | ITIS3135 | Introduction Form
        </h1>
      </header>

      
       <Header />

      <main className={styles.main}>
        <h2 id="page-title" className={styles.h2}>Introduction Form</h2>
        <h3 id="form-subtitle" className={styles.h3}>Please submit the form below.</h3>

        <form id="intro-form" className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>

          {/* ── Personal Information ── */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Personal Information</legend>

            <label className={styles.label}>First Name:
              <input type="text" id="first-name" className={styles.inputText}
                value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </label><br />

            <label className={styles.label}>Middle Name/Initial (Optional):
              <input type="text" id="middle-name" className={styles.inputText}
                value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            </label><br />

            <label className={styles.label}>Nickname (Optional):
              <input type="text" id="nickname" className={styles.inputText}
                value={nickname} onChange={(e) => setNickname(e.target.value)} />
            </label><br />

            <label className={styles.label}>Last Name:
              <input type="text" id="last-name" className={styles.inputText}
                value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </label><br />

            <label className={styles.label}>Acknowledgment Statement:
              <input type="text" id="ack-statement" className={styles.inputText}
                value={ackStatement} onChange={(e) => setAckStatement(e.target.value)} required />
            </label><br />

            <label className={styles.label}>Acknowledgement Date (YYYY-MM-DD):
              <input type="text" id="ack-date" className={styles.inputText}
                value={ackDate} onChange={(e) => setAckDate(e.target.value)}
                pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD" required />
            </label><br />

            <label className={styles.label}>Mascot Adjective:
              <input type="text" id="mascot-adj" className={styles.inputText}
                value={mascotAdj} onChange={(e) => setMascotAdj(e.target.value)} required />
            </label><br />

            <label className={styles.label}>Mascot Animal:
              <input type="text" id="mascot-animal" className={styles.inputText}
                value={mascotAnimal} onChange={(e) => setMascotAnimal(e.target.value)} required />
            </label><br />

            <label className={styles.label}>Divider:
              <input type="text" id="divider" className={styles.inputText}
                value={divider} onChange={(e) => setDivider(e.target.value)} required />
            </label><br />
          </fieldset>

          {/* ── Image & Content ── */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Image &amp; Content</legend>

            <label className={styles.label}>Upload Picture:
              <input type="file" id="user-image" accept="image/*" />
            </label><br />

            <input type="hidden" id="default-image" value="images/myprofessionalheadshot.png" />

            <label className={styles.label}>Picture Caption:
              <input type="text" id="caption" className={styles.inputText}
                value={caption} onChange={(e) => setCaption(e.target.value)} required />
            </label><br />

            <label className={styles.label}>Personal Statement:
              <textarea id="personal-state" className={styles.textarea}
                value={personalState} onChange={(e) => setPersonalState(e.target.value)} required />
            </label><br />

            <label className={styles.label}>Personal Background:
              <textarea id="personal-bg" className={styles.textarea}
                value={personalBg} onChange={(e) => setPersonalBg(e.target.value)} required />
            </label><br />

            <label className={styles.label}>Professional Background:
              <textarea id="professional-bg" className={styles.textarea}
                value={professionalBg} onChange={(e) => setProfessionalBg(e.target.value)} required />
            </label><br />

            <label className={styles.label}>Academic Background:
              <textarea id="academic-bg" className={styles.textarea}
                value={academicBg} onChange={(e) => setAcademicBg(e.target.value)} required />
            </label><br />

            <label className={styles.label}>Subject Background:
              <textarea id="subject-bg" className={styles.textarea}
                value={subjectBg} onChange={(e) => setSubjectBg(e.target.value)} required />
            </label><br />

            <label className={styles.label}>Primary Computer:
              <textarea id="computer-bg" className={styles.textarea}
                value={computerBg} onChange={(e) => setComputerBg(e.target.value)} required />
            </label><br />

            <label className={styles.label}>(Optional) Funny/Interesting item to remember me by:
              <input type="text" id="funny-item" className={styles.inputText}
                value={funnyItem} onChange={(e) => setFunnyItem(e.target.value)} />
            </label><br />

            <label className={styles.label}>(Optional) I'd also like to share:
              <input type="text" id="share-item" className={styles.inputText}
                value={shareItem} onChange={(e) => setShareItem(e.target.value)} />
            </label><br />
          </fieldset>

          {/* ── Courses ── */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Courses</legend>

            <div id="courses-container">
              {courses.map((course, index) => (
                <div key={index} className={styles.courseEntry}>
                  <input type="text" className={`${styles.inputText} course-dept`}
                    value={course.dept} onChange={(e) => updateCourse(index, "dept", e.target.value)} required />
                  <input type="text" className={`${styles.inputText} course-num`}
                    value={course.num} onChange={(e) => updateCourse(index, "num", e.target.value)} required />
                  <input type="text" className={`${styles.inputText} course-name`}
                    value={course.name} onChange={(e) => updateCourse(index, "name", e.target.value)} required />
                  <input type="text" className={`${styles.inputText} course-reason`}
                    value={course.reason} onChange={(e) => updateCourse(index, "reason", e.target.value)} required />
                  <button type="button" className={styles.deleteCourseBtn}
                    onClick={() => deleteCourse(index)}>Delete</button>
                </div>
              ))}
            </div>

            <button type="button" id="add-course-btn" className={styles.button}
              onClick={addCourse}>Add Another Course</button>
          </fieldset>

          {/* ── Extras & Links ── */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Extras &amp; Links</legend>

            <label className={styles.label}>Quote:
              <input type="text" id="quote" className={styles.inputText}
                value={quote} onChange={(e) => setQuote(e.target.value)} required />
            </label><br />

            <label className={styles.label}>Quote Author:
              <input type="text" id="quote-author" className={styles.inputText}
                value={quoteAuthor} onChange={(e) => setQuoteAuthor(e.target.value)} required />
            </label><br />

            <div id="links-container">
              {links.map((link, index) => (
                <div key={index} className={styles.linkEntry}>
                  <label className={styles.label}>Link Name:
                    <input type="text" className={`${styles.inputText} link-name`}
                      value={link.name} onChange={(e) => updateLink(index, "name", e.target.value)} required />
                  </label>
                  <label className={styles.label}>URL:
                    <input type="url" className={`${styles.inputUrl} link-url`}
                      value={link.url} onChange={(e) => updateLink(index, "url", e.target.value)} required />
                  </label>
                  <button type="button" className={styles.deleteLinkBtn}
                    onClick={() => deleteLink(index)}>Delete</button>
                </div>
              ))}
            </div>

            <button type="button" id="add-link-btn" className={styles.button}
              onClick={addLink}>Add Another Link</button>

            <div className={styles.formControls}>
              <button type="submit" id="submit-btn" className={styles.button}>Submit</button>
              <button type="reset" id="reset-btn" className={styles.button}>Reset</button>
              <button type="button" id="clear-btn" className={styles.button}
                onClick={handleClear}>Clear</button>
              <button type="button" id="generate-html-btn" className={styles.button}>Generate HTML</button>
              <button type="button" id="generate-json-btn" className={styles.button}>Generate JSON</button>
            </div>
          </fieldset>
        </form>

        {/* Output container — hidden until form is submitted */}
        <div
          id="output-container"
          className={styles.outputContainer}
          style={{ display: outputVisible ? "block" : "none" }}
        />
      </main>

      
      <Footer />

      {/*
        NOTE: The following external scripts handled dynamic behaviour in the
        original HTML. Their logic should be ported to React state / handlers:
          - scripts/introduction.js
          - scripts/generate_html.js
          - scripts/generate_json.js
        The Add / Delete / Clear handlers above are the React equivalents of
        what those scripts did for courses and links.
      */}
    </div>
  );
}
