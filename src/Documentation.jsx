import Header from './Header';
import Footer from './Footer';
import styles from "./src/styles/documentation.module.css";
import { useItisTitle } from "./usetitle";

export default function CampingDocumentation() {
  useItisTitle("Camping Documentation");
  return (
    
    <div className={styles.body}>
      
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400..700;1,400..700&display=swap"
        rel="stylesheet"
      />

      <header className={styles.header}>
        <h1 className={styles.h1}>
          Trevor Bercher's Tenacious Bear | ITIS3135 | Camping Documentation
        </h1>
      </header>

      
       <Header />

      <div className={styles.pageWrapper}>
        <nav id="navbar" className={styles.navbar}>
          <h2 className={styles.navTitle}>Camping Guide</h2>
          <ul>
            <li>
              <a className={styles.navLink} href="#Getting_Started_With_Camping">
                Getting Started With Camping
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#Choosing_A_Campsite">
                Choosing A Campsite
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#Setting_Up_The_Tent">
                Setting Up The Tent
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#Starting_A_Campfire">
                Starting A Campfire
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#Campground_Etiquette">
                Campground Etiquette
              </a>
            </li>
          </ul>
        </nav>

        <main id="main-doc" className={styles.mainDoc}>
          {/* Section 1 */}
          <section
            className={styles.mainSection}
            id="Getting_Started_With_Camping"
          >
            <h2 className={styles.h2}>Getting Started With Camping</h2>
            <p className={styles.p}>Steps in preparing for your first camping trip:</p>
            <ol>
              <li>Check the local weather forecast.</li>
              <li>
                Gather the "Ten Essentials" (navigation, sun protection,
                insulation, illumination, first-aid, fire, repair kit,
                nutrition, hydration, emergency shelter).
              </li>
              <li>Pack your main gear: Tent, Sleeping Bag, and Sleeping Pad.</li>
              <li>Plan your meals and bring plenty of water.</li>
              <li>Double-check your pack before hitting the trail.</li>
            </ol>
            <img
              src="src/assets/campingsupplies.jpeg"
              alt="Camping gear laid out including a backpack and other supplies"
              className={styles.image}
            />
          </section>

          {/* Section 2 */}
          <section className={styles.mainSection} id="Choosing_A_Campsite">
            <h2 className={styles.h2}>Choosing A Campsite</h2>
            <p className={styles.p}>
              Finding the right location to pitch your tent is the first major
              task once you arrive at the campground.
            </p>
            <p className={styles.p}>
              You want to look for level ground, good drainage, and safe
              surroundings. Avoid pitching your tent directly under dead
              branches (often called "widowmakers").
            </p>
            <img
              src="src/assets/campsite.png"
              alt="A tent pitched safely in a clearing away from dead trees"
              className={styles.image}
            />
            <h3 className={styles.h3}>Campsite Checklist:</h3>
            <ul>
              <li>Flat, even ground.</li>
              <li>At least 200 feet away from lakes or streams.</li>
              <li>Natural windbreaks nearby.</li>
              <li>No ant hills or animal dens underneath.</li>
            </ul>
            <p className={styles.p}>
              As you can see, choosing a site requires balancing comfort with
              safety and environmental guidelines.
            </p>
            <p className={styles.p}>
              A well-chosen site guarantees a much better night's sleep.
            </p>
          </section>

          {/* Section 3 */}
          <section className={styles.mainSection} id="Setting_Up_The_Tent">
            <h2 className={styles.h2}>Setting Up The Tent</h2>
            <p className={styles.p}>
              In order to set up your shelter securely, you need to follow a
              logical order of operations.
            </p>
            <p className={styles.p}>
              It might seem cumbersome if it's windy, but doing it methodically
              prevents broken poles and lost stakes.
            </p>
            <img
              src="src/assets/tentsetup.png"
              alt="A tent being setup."
              className={styles.image}
            />
            <h3 className={styles.h3}>Shelter Assembly:</h3>
            <ol>
              <li>Lay down the ground tarp (footprint).</li>
              <li>Unfold the main tent body on top.</li>
              <li>Assemble all tent poles.</li>
              <li>
                Insert poles into grommets and clip the tent body to them.
              </li>
              <li>Stake out the corners.</li>
              <li>Attach and stake the rainfly.</li>
            </ol>
            <p className={styles.p}>
              In this example, we are prioritizing the ground layer first so
              moisture doesn't seep into the tent floor.
            </p>
          </section>

          {/* Section 4 */}
          <section className={styles.mainSection} id="Starting_A_Campfire">
            <h2 className={styles.h2}>Starting A Campfire</h2>
            <p className={styles.p}>
              Building a fire requires three types of combustible materials and
              a spark. Here is an overview of how to structure it.
            </p>
            <img
              src="src/assets/campfiresetup.png"
              alt="A well-built campfire showing a teepee structure."
              className={styles.image}
            />
            <p className={styles.p}>Some basic materials to gather:</p>
            <h3 className={styles.h3}>Fire Materials Required:</h3>
            <ul>
              <li>
                <strong>Tinder:</strong> Dry leaves, pine needles, or dryer
                lint to catch the initial spark.
              </li>
              <li>
                <strong>Kindling:</strong> Small twigs, roughly the thickness
                of a pencil, to build the flame.
              </li>
              <li>
                <strong>Fuel Wood:</strong> Larger logs to sustain the burn for
                a longer period.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className={styles.mainSection} id="Campground_Etiquette">
            <h2 className={styles.h2}>Campground Etiquette</h2>
            <p className={styles.p}>
              Camping relies heavily on an unwritten social contract among
              nature enthusiasts.
            </p>
            <p className={styles.p}>
              This means respecting your neighbors, local wildlife, and the
              environment by strictly practicing "Leave No Trace" principles.
            </p>
            <p className={styles.p}>
              An example of this might be packing out all your trash instead of
              throwing it in the fire ring.
            </p>
            <h3 className={styles.h3}>Leave No Trace Principles:</h3>
            <ol>
              <li>Plan Ahead and Prepare</li>
              <li>Travel and Camp on Durable Surfaces</li>
              <li>Dispose of Waste Properly</li>
              <li>Leave What You Find</li>
              <li>Minimize Campfire Impacts</li>
              <li>Respect Wildlife</li>
              <li>Be Considerate of Other Visitors</li>
            </ol>
            <p className={styles.p}>
              You ensure a great trip for everyone by doing the following:
            </p>
            <ul>
              <li>Keeping noise down after 10:00 PM</li>
              <li>Storing food securely away from bears and raccoons</li>
              <li>
                Extinguishing your fire until the ashes are cool to the touch
              </li>
            </ul>
          </section>
        </main>
      </div>

     
      <Footer /> 
    </div>
  );
}
