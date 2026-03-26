import Header from './Header';
import './styles/itis3135.css';

export default function Survey() {
  return (
    <>
        <h1>Trevor Bercher's Tenacious Bear | ITIS3135 | Survey Project</h1>
      <Header />
      <main>
        <h2>Survey Project</h2>
        <p>Thank you for taking the time to help us improve the storefront.</p>

        <form>
          <fieldset>
            <legend>Contact Information</legend>
            <label id="name-label" htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" required />

            <label id="email-label" htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" required />

            <label id="number-label" htmlFor="number">Age (optional)</label>
            <input id="number" type="number" min="10" max="99" placeholder="Age" />

            <label htmlFor="dropdown">Which option best describes your current role?</label>
            <select id="dropdown">
              <option disabled selected value="">Select current role</option>
              <option value="student">Student</option>
              <option value="job">Full Time Job</option>
            </select>
          </fieldset>

          <fieldset>
            <legend>Would you recommend Tenacious Bear Camping Supplies to a friend?</legend>
            <label>
              <input name="user-recommend" value="Yes" type="radio" defaultChecked />
              Yes
            </label>
            <label>
              <input name="user-recommend" value="No" type="radio" />
              No
            </label>
          </fieldset>

          <fieldset>
            <legend>What would you like to see added to the store? (Check all that apply)</legend>
            <label>
              <input type="checkbox" value="frontend" name="prefer" /> Outdoor Tools
            </label>
            <label>
              <input type="checkbox" value="backend" name="prefer" /> Jet Boil Alternatives
            </label>
          </fieldset>

          <fieldset>
            <legend>Additional Feedback</legend>
            <label htmlFor="comment">Your Feedback:</label>
            <textarea id="comment" name="comment" placeholder="Enter your comment here..."></textarea>
          </fieldset>

          <button id="submit" type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}
