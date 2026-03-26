import { useState, useRef } from "react";
import styles from "/src/styles/intro_form.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { useItisTitle } from "./usetitle";

// ─── Initial data ────────────────────────────────────────────────────────────

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

const DEFAULT_IMG = "/src/assets/myprofessionalheadshot.png";

// ─── Helper ───────────────────────────────────────────────────────────────────

const escapeHtml = (text) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

// ─── Component ───────────────────────────────────────────────────────────────

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
  const [imageFile,      setImageFile]      = useState(null);
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
  const [funnyItem,  setFunnyItem]  = useState("I had a job that required me to wear a safari hat.");
  const [shareItem,  setShareItem]  = useState("I lived in Australia for 6 months.");

  // Courses
  const [courses, setCourses] = useState(initialCourses);

  const addCourse = () =>
    setCourses([...courses, { dept: "", num: "", name: "", reason: "" }]);

  const deleteCourse = (i) => {
    if (courses.length > 1) {
      setCourses(courses.filter((_, idx) => idx !== i));
    } else {
      setCourses([{ dept: "", num: "", name: "", reason: "" }]);
    }
  };

  const updateCourse = (i, field, val) =>
    setCourses(courses.map((c, idx) => (idx === i ? { ...c, [field]: val } : c)));

  // Extras & Links
  const [quote,       setQuote]       = useState("The journey of a thousand miles begins with a single step");
  const [quoteAuthor, setQuoteAuthor] = useState("Lao Tzu");
  const [links, setLinks]             = useState(initialLinks);

  const addLink = () =>
    setLinks([...links, { name: "", url: "" }]);

  const deleteLink = (i) => {
    if (links.length > 1) {
      setLinks(links.filter((_, idx) => idx !== i));
    } else {
      setLinks([{ name: "", url: "" }]);
    }
  };

  const updateLink = (i, field, val) =>
    setLinks(links.map((l, idx) => (idx === i ? { ...l, [field]: val } : l)));

  // View: null = form visible | "preview" | { type:"html", content } | { type:"json", content }
  const [view, setView] = useState(null);

  const formRef = useRef(null);

  // ── Derived values ──────────────────────────────────────────────────────────

  const headerTitle =
    `${firstName}${middleName ? " " + middleName : ""}${nickname ? ` "${nickname}"` : ""} ${lastName}'s ${mascotAdj} ${mascotAnimal}`;

  const imageUrl = imageFile ? URL.createObjectURL(imageFile) : DEFAULT_IMG;

  const checkValid = () => {
    if (formRef.current && !formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return false;
    }
    return true;
  };

  // ── Button handlers ─────────────────────────────────────────────────────────

  // Submit → rendered preview  (introduction.js → form.onsubmit)
  const handleSubmit = (e) => {
    e.preventDefault();
    setView("preview");
  };

  // Reset → restore all defaults  (introduction.js → resetBtn)
  const handleReset = () => {
    setFirstName("Trevor"); setMiddleName("J."); setNickname(""); setLastName("Bercher");
    setAckStatement("I understand that what I put here is publicly available on the web and I won't put anything here I don't want the public to see");
    setAckDate("2026-01-12"); setMascotAdj("Tenacious"); setMascotAnimal("Bear"); setDivider("|");
    setImageFile(null);
    setCaption("Trevor Bercher - Student at UNC Charlotte");
    setPersonalState("I'm a senior at UNC Charlotte studying Computer Science with a concentration in information technology. I'm excited to learn about front end web app development this semester.");
    setPersonalBg("I'm currently 25 years old and a student veteran, I like to play strategy games in my free time.");
    setProfessionalBg("After my time in the military I've been working part time at Walmart while going to school.");
    setAcademicBg("I'm currently a senior at UNC Charlotte studying computer science with a focus in Information Technology. Before that I attended community college at Central Piedmont Community College.");
    setSubjectBg("I have little to no background in this subject and am excited to learn.");
    setComputerBg("I primarily use a custom desktop computer. Backup Work Computer & Location Plan: I will use my school laptop and go to the Atkins library to complete my tasks.");
    setFunnyItem("I had a job that required me to wear a safari hat.");
    setShareItem("I lived in Australia for 6 months.");
    setCourses(initialCourses);
    setQuote("The journey of a thousand miles begins with a single step");
    setQuoteAuthor("Lao Tzu");
    setLinks(initialLinks);
    setView(null);
  };

  // Clear → blank slate  (introduction.js → clearBtn)
  const handleClear = () => {
    setFirstName(""); setMiddleName(""); setNickname(""); setLastName("");
    setAckStatement(""); setAckDate(""); setMascotAdj(""); setMascotAnimal(""); setDivider("");
    setImageFile(null); setCaption(""); setPersonalState(""); setPersonalBg("");
    setProfessionalBg(""); setAcademicBg(""); setSubjectBg(""); setComputerBg("");
    setFunnyItem(""); setShareItem("");
    setCourses([{ dept: "", num: "", name: "", reason: "" }]);
    setQuote(""); setQuoteAuthor("");
    setLinks([{ name: "", url: "" }]);
    setView(null);
  };

  // Generate HTML  (generate_html.js → genHtmlBtn.onclick)
  const handleGenerateHtml = () => {
    if (!checkValid()) return;

    const coursesLi = courses
      .filter((c) => c.dept && c.num)
      .map((c) => `            <li><strong>${c.dept} ${c.num} - ${c.name}:</strong> ${c.reason}</li>`)
      .join("\n");

    const linkTags = links
      .filter((l) => l.name && l.url)
      .map((l) => `<a href="${l.url}" target="_blank">${l.name}</a>`)
      .join(" | ");

    const rawHtml = `<!DOCTYPE html>
<html lang="en">
<body>

    <header>
        <h1>${firstName}${middleName ? " " + middleName : ""} ${lastName}'s ${mascotAdj} ${mascotAnimal}</h1>
    </header>
    <main>
        <figure>
            <img src="${DEFAULT_IMG}" alt="${firstName}">
            <figcaption>${caption}</figcaption>
        </figure>
        <p>${personalState}</p>
        <ul>
            ${nickname ? `<li><strong>Nickname:</strong> ${nickname}</li>` : ""}
            <li><strong>Personal Background:</strong> ${personalBg}</li>
            <li><strong>Professional Background:</strong> ${professionalBg}</li>
            <li><strong>Academic Background:</strong> ${academicBg}</li>
            <li><strong>Subject Background:</strong> ${subjectBg}</li>
            <li><strong>Computer Platform:</strong> ${computerBg}</li>
            <li><strong>Courses:</strong>
                <ul>
${coursesLi}
                </ul>
            </li>
            ${funnyItem ? `<li><strong>Funny Item:</strong> ${funnyItem}</li>` : ""}
            ${shareItem ? `<li><strong>Shared Item:</strong> ${shareItem}</li>` : ""}
        </ul>
        <p><em>"${quote}"</em> — ${quoteAuthor}</p>
        <nav>
            ${linkTags}
        </nav>
    </main>
</body>
</html>`;

    setView({ type: "html", content: rawHtml });
  };

  // Generate JSON  (generate_json.js → genJsonBtn.onclick)
  const handleGenerateJson = () => {
    if (!checkValid()) return;

    const data = {
      personalInfo: {
        firstName,
        middleName: middleName || null,
        lastName,
        nickname: nickname || null,
        mascot: `${mascotAdj} ${mascotAnimal}`,
      },
      imageContent: {
        imagePath: imageFile ? imageFile.name : DEFAULT_IMG,
        caption,
        statement: personalState,
      },
      background: {
        personal: personalBg,
        professional: professionalBg,
        academic: academicBg,
        subject: subjectBg,
        computer: computerBg,
      },
      extras: {
        funnyItem: funnyItem || null,
        shareItem: shareItem || null,
        quote: { text: quote, author: quoteAuthor },
      },
      courses: courses.map((c) => ({ dept: c.dept, number: c.num, name: c.name, reason: c.reason })),
      links: links.map((l) => ({ name: l.name, url: l.url })),
    };

    setView({ type: "json", content: JSON.stringify(data, null, 4) });
  };

  // Back to form from any output panel
  const handleBack = () => setView(null);

  const isFormVisible = view === null;

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className={styles.body}>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Libre+Baskerville:ital,wght@0,400..700;1,400..700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
      />

      <header>
        <h1 className={styles.h1}>
          Trevor Bercher's Tenacious Bear | ITIS3135 | Introduction Form
        </h1>
      </header>

       <Header />

      <main className={styles.main}>

        {/* Title / subtitle — hidden while any output panel is active */}
        {isFormVisible && (
          <>
            <h2 className={styles.h2}>Introduction Form</h2>
            <h3 className={styles.h3}>Please submit the form below.</h3>
          </>
        )}

        {/* ══════════════════════════════════════════
            FORM
        ══════════════════════════════════════════ */}
        {isFormVisible && (
          <form
            ref={formRef}
            className={styles.form}
            onSubmit={handleSubmit}
          >
            {/* Personal Information */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Personal Information</legend>

              <label className={styles.label}>First Name:
                <input type="text" className={styles.inputText} value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} required />
              </label><br />

              <label className={styles.label}>Middle Name/Initial (Optional):
                <input type="text" className={styles.inputText} value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)} />
              </label><br />

              <label className={styles.label}>Nickname (Optional):
                <input type="text" className={styles.inputText} value={nickname}
                  onChange={(e) => setNickname(e.target.value)} />
              </label><br />

              <label className={styles.label}>Last Name:
                <input type="text" className={styles.inputText} value={lastName}
                  onChange={(e) => setLastName(e.target.value)} required />
              </label><br />

              <label className={styles.label}>Acknowledgment Statement:
                <input type="text" className={styles.inputText} value={ackStatement}
                  onChange={(e) => setAckStatement(e.target.value)} required />
              </label><br />

              <label className={styles.label}>Acknowledgement Date (YYYY-MM-DD):
                <input type="text" className={styles.inputText} value={ackDate}
                  onChange={(e) => setAckDate(e.target.value)}
                  pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD" required />
              </label><br />

              <label className={styles.label}>Mascot Adjective:
                <input type="text" className={styles.inputText} value={mascotAdj}
                  onChange={(e) => setMascotAdj(e.target.value)} required />
              </label><br />

              <label className={styles.label}>Mascot Animal:
                <input type="text" className={styles.inputText} value={mascotAnimal}
                  onChange={(e) => setMascotAnimal(e.target.value)} required />
              </label><br />

              <label className={styles.label}>Divider:
                <input type="text" className={styles.inputText} value={divider}
                  onChange={(e) => setDivider(e.target.value)} required />
              </label><br />
            </fieldset>

            {/* Image & Content */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Image &amp; Content</legend>

              <label className={styles.label}>Upload Picture:
                <input type="file" accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0] || null)} />
              </label><br />

              <label className={styles.label}>Picture Caption:
                <input type="text" className={styles.inputText} value={caption}
                  onChange={(e) => setCaption(e.target.value)} required />
              </label><br />

              <label className={styles.label}>Personal Statement:
                <textarea className={styles.textarea} value={personalState}
                  onChange={(e) => setPersonalState(e.target.value)} required />
              </label><br />

              <label className={styles.label}>Personal Background:
                <textarea className={styles.textarea} value={personalBg}
                  onChange={(e) => setPersonalBg(e.target.value)} required />
              </label><br />

              <label className={styles.label}>Professional Background:
                <textarea className={styles.textarea} value={professionalBg}
                  onChange={(e) => setProfessionalBg(e.target.value)} required />
              </label><br />

              <label className={styles.label}>Academic Background:
                <textarea className={styles.textarea} value={academicBg}
                  onChange={(e) => setAcademicBg(e.target.value)} required />
              </label><br />

              <label className={styles.label}>Subject Background:
                <textarea className={styles.textarea} value={subjectBg}
                  onChange={(e) => setSubjectBg(e.target.value)} required />
              </label><br />

              <label className={styles.label}>Primary Computer:
                <textarea className={styles.textarea} value={computerBg}
                  onChange={(e) => setComputerBg(e.target.value)} required />
              </label><br />

              <label className={styles.label}>(Optional) Funny/Interesting item to remember me by:
                <input type="text" className={styles.inputText} value={funnyItem}
                  onChange={(e) => setFunnyItem(e.target.value)} />
              </label><br />

              <label className={styles.label}>(Optional) I'd also like to share:
                <input type="text" className={styles.inputText} value={shareItem}
                  onChange={(e) => setShareItem(e.target.value)} />
              </label><br />
            </fieldset>

            {/* Courses */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Courses</legend>

              {courses.map((course, i) => (
                <div key={i} className={styles.courseEntry}>
                  <input type="text" className={styles.inputText} placeholder="Dept"
                    value={course.dept} onChange={(e) => updateCourse(i, "dept", e.target.value)} required />
                  <input type="text" className={styles.inputText} placeholder="Number"
                    value={course.num} onChange={(e) => updateCourse(i, "num", e.target.value)} required />
                  <input type="text" className={styles.inputText} placeholder="Course Name"
                    value={course.name} onChange={(e) => updateCourse(i, "name", e.target.value)} required />
                  <input type="text" className={styles.inputText} placeholder="Why?"
                    value={course.reason} onChange={(e) => updateCourse(i, "reason", e.target.value)} required />
                  <button type="button" className={styles.deleteCourseBtn}
                    onClick={() => deleteCourse(i)}>Delete</button>
                </div>
              ))}

              <button type="button" className={styles.button} onClick={addCourse}>
                Add Another Course
              </button>
            </fieldset>

            {/* Extras & Links */}
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Extras &amp; Links</legend>

              <label className={styles.label}>Quote:
                <input type="text" className={styles.inputText} value={quote}
                  onChange={(e) => setQuote(e.target.value)} required />
              </label><br />

              <label className={styles.label}>Quote Author:
                <input type="text" className={styles.inputText} value={quoteAuthor}
                  onChange={(e) => setQuoteAuthor(e.target.value)} required />
              </label><br />

              {links.map((link, i) => (
                <div key={i} className={styles.linkEntry}>
                  <label className={styles.label}>Link Name:
                    <input type="text" className={styles.inputText} value={link.name}
                      onChange={(e) => updateLink(i, "name", e.target.value)} required />
                  </label>
                  <label className={styles.label}>URL:
                    <input type="url" className={styles.inputUrl} value={link.url}
                      onChange={(e) => updateLink(i, "url", e.target.value)} required />
                  </label>
                  <button type="button" className={styles.deleteLinkBtn}
                    onClick={() => deleteLink(i)}>Delete</button>
                </div>
              ))}

              <button type="button" className={styles.button} onClick={addLink}>
                Add Another Link
              </button>

              <div className={styles.formControls}>
                <button type="submit"  className={styles.button}>Submit</button>
                <button type="button" className={styles.button} onClick={handleReset}>Reset</button>
                <button type="button" className={styles.button} onClick={handleClear}>Clear</button>
                <button type="button" className={styles.button} onClick={handleGenerateHtml}>Generate HTML</button>
                <button type="button" className={styles.button} onClick={handleGenerateJson}>Generate JSON</button>
              </div>
            </fieldset>
          </form>
        )}

        {/* ══════════════════════════════════════════
            OUTPUT: Submit preview  (introduction.js)
        ══════════════════════════════════════════ */}
        {view === "preview" && (
          <div className={styles.outputContainer}>
            <h2 style={{ textAlign: "center" }}>{headerTitle}</h2>

            <figure style={{ textAlign: "center" }}>
              <img src={imageUrl} alt="Profile" style={{ maxWidth: "300px", borderRadius: "10px" }} />
              <figcaption>{caption}</figcaption>
            </figure>

            <p>{personalState}</p>

            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><h3>Background &amp; Interests</h3></li>
              <li><strong>•Personal Background:</strong> {personalBg}</li>
              <li><strong>•Professional Background:</strong> {professionalBg}</li>
              <li><strong>•Academic Background:</strong> {academicBg}</li>
              <li><strong>•Subject Background:</strong> {subjectBg}</li>
              <li><strong>•Primary Computer:</strong> {computerBg}</li>
              {funnyItem && <li><strong>•Funny/Interesting Item:</strong> {funnyItem}</li>}
              {shareItem && <li><strong>•I'd also like to share:</strong> {shareItem}</li>}
              <li>
                <h3>Courses:</h3>
                <ul>
                  {courses.filter((c) => c.dept && c.num).map((c, i) => (
                    <li key={i}><strong>{c.dept} {c.num} – {c.name}:</strong> {c.reason}</li>
                  ))}
                </ul>
              </li>
            </ul>

            <p style={{ textAlign: "center", fontStyle: "italic", marginTop: "20px" }}>
              "{quote}" — {quoteAuthor}
            </p>

            <div style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold" }}>
              {links.filter((l) => l.name && l.url).map((l, i, arr) => (
                <span key={i}>
                  <a href={l.url} target="_blank" rel="noreferrer">{l.name}</a>
                  {i < arr.length - 1 && " | "}
                </span>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <button type="button" className={styles.button} onClick={handleBack}>
                Fill out the form again
              </button>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════
            OUTPUT: Generate HTML  (generate_html.js)
        ══════════════════════════════════════════ */}
        {view && view.type === "html" && (
          <div className={styles.outputContainer}>
            <h2 className={styles.h2}>Introduction HTML</h2>
            <section>
              <h3 className={styles.h3}>Generated HTML Code:</h3>
              <pre style={{ overflowX: "auto", borderRadius: "6px" }}>
                <code
                  className="language-html"
                  dangerouslySetInnerHTML={{ __html: escapeHtml(view.content) }}
                />
              </pre>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button type="button" className={styles.button} onClick={handleBack}>
                  Back to Form
                </button>
              </div>
            </section>
          </div>
        )}

        {/* ══════════════════════════════════════════
            OUTPUT: Generate JSON  (generate_json.js)
        ══════════════════════════════════════════ */}
        {view && view.type === "json" && (
          <div className={styles.outputContainer}>
            <h2 className={styles.h2}>Introduction JSON</h2>
            <section>
              <h3 className={styles.h3}>Generated JSON Data:</h3>
              <pre style={{ overflowX: "auto", borderRadius: "6px" }}>
                <code className="language-json">{view.content}</code>
              </pre>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button type="button" className={styles.button} onClick={handleBack}>
                  Back to Form
                </button>
              </div>
            </section>
          </div>
        )}

      </main>

       <Footer />
    </div>
  );
}
