import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useHomeTitle, useItisTitle } from './usetitle';
export default function IntroForm() {
  useItisTitle("Introduction Form");

  return (
    <>
      <header>
        <h1>Trevor Bercher's Tenacious Bear | ITIS3135 | Introduction Form</h1>
      </header>

       <Header />

      <main>
        <h2 id="page-title">Introduction Form</h2>
        <h3 id="form-subtitle">Please submit the form below.</h3>

        <form id="intro-form">
          <fieldset>
            <legend>Personal Information</legend>

            <label>First Name:
              <input type="text" id="first-name" defaultValue="Trevor" required />
            </label><br />

            <label>Middle Name/Initial (Optional):
              <input type="text" id="middle-name" defaultValue="J." />
            </label><br />

            <label>Nickname (Optional):
              <input type="text" id="nickname" defaultValue="" />
            </label><br />

            <label>Last Name:
              <input type="text" id="last-name" defaultValue="Bercher" required />
            </label><br />

            <label>Acknowledgment Statement:
              <input
                type="text"
                id="ack-statement"
                defaultValue="I understand that what I put here is publicly available on the web and I won’t put anything here I don’t want the public to see"
                required
              />
            </label><br />

            <label>Acknowledgement Date(YYYY-MM-DD):
              <input
                type="text"
                id="ack-date"
                defaultValue="2026-01-12"
                pattern="\d{4}-\d{2}-\d{2}"
                placeholder="YYYY-MM-DD"
                required
              />
            </label><br />

            <label>Mascot Adjective:
              <input type="text" id="mascot-adj" defaultValue="Tenacious" required />
            </label><br />

            <label>Mascot Animal:
              <input type="text" id="mascot-animal" defaultValue="Bear" required />
            </label><br />

            <label>Divider:
              <input type="text" id="divider" defaultValue="|" required />
            </label><br />
          </fieldset>

          <fieldset>
            <legend>Image & Content</legend>

            <label>Upload Picture:
              <input type="file" id="user-image" accept="image/*" />
            </label><br />

            <input
              type="hidden"
              id="default-image"
              defaultValue="images/myprofessionalheadshot.png"
            />

            <label>Picture Caption:
              <input
                type="text"
                id="caption"
                defaultValue="Trevor Bercher - Student at UNC Charlotte"
                required
              />
            </label><br />

            <label>Personal Statement:
              <textarea
                id="personal-state"
                required
                defaultValue="I’m a senior at UNC Charlotte studying Computer Science with a concentration in information technology. I’m excited to learn about front end web app development this semester."
              />
            </label><br />

            <label>Personal Background:
              <textarea
                id="personal-bg"
                required
                defaultValue="I’m currently 25 years old and a student veteran, I like to play strategy games in my free time."
              />
            </label><br />

            <label>Professional Background:
              <textarea
                id="professional-bg"
                required
                defaultValue="After my time in the military I’ve been working part time at Walmart while going to school."
              />
            </label><br />

            <label>Academic Background:
              <textarea
                id="academic-bg"
                required
                defaultValue="I’m currently a senior at UNC Charlotte studying computer science with a focus in Information Technology. Before that I attended community college at Central Piedmont Community College."
              />
            </label><br />

            <label>Subject Background:
              <textarea
                id="subject-bg"
                required
                defaultValue="I have little to no background in this subject and am excited to learn."
              />
            </label><br />

            <label>Primary Computer:
              <textarea
                id="computer-bg"
                required
                defaultValue="I primarily use a custom desktop computer. Backup Work Computer & Location Plan: I will use my school laptop and go to the Atkins library to complete my tasks."
              />
            </label><br />

            <label>(Optional)Funny/Interesting item to remember me by:
              <input
                type="text"
                id="funny-item"
                defaultValue="I had a job that required me to wear a safari hat."
              />
            </label><br />

            <label>(Optional)I’d also like to share:
              <input
                type="text"
                id="share-item"
                defaultValue="I lived in Australia for 6 months."
              />
            </label><br />
          </fieldset>

          <fieldset>
            <legend>Courses</legend>
            <div id="courses-container">
              
              <div className="course-entry">
                <input type="text" className="course-dept" defaultValue="ITIS" required />
                <input type="text" className="course-num" defaultValue="3200" required />
                <input type="text" className="course-name" defaultValue="Intro to Info Security & Privacy" required />
                <input type="text" className="course-reason" defaultValue="Interesting class." required />
                <button type="button" className="delete-course-btn">Delete</button>
              </div>

              <div className="course-entry">
                <input type="text" className="course-dept" defaultValue="ITIS" required />
                <input type="text" className="course-num" defaultValue="3135" required />
                <input type="text" className="course-name" defaultValue="Front-End App Development" required />
                <input type="text" className="course-reason" defaultValue="Required and interesting class." required />
                <button type="button" className="delete-course-btn">Delete</button>
              </div>

              <div className="course-entry">
                <input type="text" className="course-dept" defaultValue="ITIS" required />
                <input type="text" className="course-num" defaultValue="3155" required />
                <input type="text" className="course-name" defaultValue="Software Engineering" required />
                <input type="text" className="course-reason" defaultValue="Required class I have to take to graduate on time." required />
                <button type="button" className="delete-course-btn">Delete</button>
              </div>

              <div className="course-entry">
                <input type="text" className="course-dept" defaultValue="ITIS" required />
                <input type="text" className="course-num" defaultValue="3160" required />
                <input type="text" className="course-name" defaultValue="Database Design & Implementation" required />
                <input type="text" className="course-reason" defaultValue="Required course also learning SQL seemed interesting and useful." required />
                <button type="button" className="delete-course-btn">Delete</button>
              </div>

              <div className="course-entry">
                <input type="text" className="course-dept" defaultValue="STAT" required />
                <input type="text" className="course-num" defaultValue="2223" required />
                <input type="text" className="course-name" defaultValue="Elements of Statistics II" required />
                <input type="text" className="course-reason" defaultValue="Required course." required />
                <button type="button" className="delete-course-btn">Delete</button>
              </div>

            </div>
            <button type="button" id="add-course-btn">Add Another Course</button>
          </fieldset>

          <fieldset>
            <legend>Extras & Links</legend>

            <label>Quote:
              <input type="text" id="quote" defaultValue="The journey of a thousand miles begins with a single step" required />
            </label><br />

            <label>Quote Author:
              <input type="text" id="quote-author" defaultValue="Lao Tzu" required />
            </label><br />

            <div id="links-container">
              
              <div className="link-entry">
                <label>Link Name:
                  <input type="text" className="link-name" defaultValue="CLT Web" required />
                </label>
                <label>URL:
                  <input type="url" className="link-url" defaultValue="https://webpages.charlotte.edu/tbercher/" required />
                </label>
                <button type="button" className="delete-link-btn">Delete</button>
              </div>

              <div className="link-entry">
                <label>Link Name:
                  <input type="text" className="link-name" defaultValue="GitHub.io" required />
                </label>
                <label>URL:
                  <input type="url" className="link-url" defaultValue="https://tbercher.github.io" required />
                </label>
                <button type="button" className="delete-link-btn">Delete</button>
              </div>

              <div className="link-entry">
                <label>Link Name:
                  <input type="text" className="link-name" defaultValue="GitHub" required />
                </label>
                <label>URL:
                  <input type="url" className="link-url" defaultValue="https://github.com/tbercher" required />
                </label>
                <button type="button" className="delete-link-btn">Delete</button>
              </div>

              <div className="link-entry">
                <label>Link Name:
                  <input type="text" className="link-name" defaultValue="freeCodeCamp" required />
                </label>
                <label>URL:
                  <input type="url" className="link-url" defaultValue="https://www.freecodecamp.org/tbercher" required />
                </label>
                <button type="button" className="delete-link-btn">Delete</button>
              </div>

              <div className="link-entry">
                <label>Link Name:
                  <input type="text" className="link-name" defaultValue="LinkedIn" required />
                </label>
                <label>URL:
                  <input type="url" className="link-url" defaultValue="https://www.linkedin.com/in/trevorbercher/" required />
                </label>
                <button type="button" className="delete-link-btn">Delete</button>
              </div>

            </div>

            <button type="button" id="add-link-btn">Add Another Link</button>

            <div className="form-controls">
              <button type="submit" id="submit-btn">Submit</button>
              <button type="reset" id="reset-btn">Reset</button>
              <button type="button" id="clear-btn">Clear</button>
              <button type="button" id="generate-html-btn">Generate HTML</button>
              <button type="button" id="generate-json-btn">Generate JSON</button>
            </div>
          </fieldset>
        </form>

        <div id="output-container" style={{ display: 'none' }}></div>
      </main>

       <Footer />
    </>
  );
}