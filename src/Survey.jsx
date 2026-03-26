import styles from "/src/styles/survey.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { use } from "react";
import { useHomeTitle, useItisTitle } from "./usetitle";  


export default function Survey() {
  useItisTitle("Survey Project");
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

      <header className={styles.header}>
        <h1 className={styles.h1}>
          Trevor Bercher's Tenacious Bear | ITIS3135 | Survey Project
        </h1>
      </header>

      
      <Header/>

      <main className={styles.main}>
        <h2 className={styles.h2}>Survey Project</h2>
        <p className={styles.p}>
          Thank you for taking the time to help us improve the storefront.
        </p>

        <form className={styles.form}>
          {/* Contact Information */}
          <fieldset>
            <legend className={styles.legend}>Contact Information</legend>

            <label id="name-label" htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
              className={styles.inputText}
            />

            <label id="email-label" htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              className={styles.inputEmail}
            />

            <label id="number-label" htmlFor="number" className={styles.label}>
              Age (optional)
            </label>
            <input
              id="number"
              type="number"
              min="10"
              max="99"
              placeholder="Age"
              className={styles.inputNumber}
            />

            <label htmlFor="dropdown" className={styles.label}>
              Which option best describes your current role?
            </label>
            <select id="dropdown" className={`${styles.select} ${styles.dropdown}`}>
              <option disabled value="">
                Select current role
              </option>
              <option value="student">Student</option>
              <option value="job">Full Time Job</option>
            </select>
          </fieldset>

          {/* Recommend fieldset */}
          <fieldset>
            <legend className={styles.legend}>
              Would you recommend Tenacious Bear Camping Supplies to a friend?
            </legend>
            <label className={styles.formLabel}>
              <input
                name="user-recommend"
                value="Yes"
                type="radio"
                defaultChecked
                className={styles.inputRadio}
              />
              Yes
            </label>
            <label className={styles.formLabel}>
              <input
                name="user-recommend"
                value="No"
                type="radio"
                className={styles.inputRadio}
              />
              No
            </label>
          </fieldset>

          {/* Checkbox fieldset */}
          <fieldset>
            <legend className={styles.legend}>
              What would you like to see added to the store? (Check all that
              apply)
            </legend>
            <label className={styles.formLabel}>
              <input
                type="checkbox"
                value="frontend"
                name="prefer"
                className={styles.inputCheckbox}
              />
              Outdoor Tools
            </label>
            <label className={styles.formLabel}>
              <input
                type="checkbox"
                value="backend"
                name="prefer"
                className={styles.inputCheckbox}
              />
              Jet Boil Alternatives
            </label>
          </fieldset>

          {/* Additional Feedback */}
          <fieldset>
            <legend className={styles.legend}>Additional Feedback</legend>
            <label htmlFor="comment" className={styles.label}>
              Your Feedback:
            </label>
            <textarea
              id="comment"
              name="comment"
              placeholder="Enter your comment here..."
              className={styles.textarea}
            />
          </fieldset>

          <button id="submit" type="submit" className={styles.submit}>
            Submit
          </button>
        </form>
      </main>

      {/* Placeholder for footer component include */}
      <Footer />
    </div>
  );
}
