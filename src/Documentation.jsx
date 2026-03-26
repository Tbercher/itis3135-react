import Header from './Header';
import './styles/itis3135.css';

export default function Documentation() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <nav id="navbar">
          <h2 className="nav-title">Camping Guide</h2>
          <ul>
            <li><a className="nav-link" href="#Getting_Started_With_Camping">Getting Started With Camping</a></li>
            <li><a className="nav-link" href="#Choosing_A_Campsite">Choosing A Campsite</a></li>
            <li><a className="nav-link" href="#Setting_Up_The_Tent">Setting Up The Tent</a></li>
            <li><a className="nav-link" href="#Starting_A_Campfire">Starting A Campfire</a></li>
            <li><a className="nav-link" href="#Campground_Etiquette">Campground Etiquette</a></li>
          </ul>
        </nav>

        <main id="main-doc">
          <section className="main-section" id="Getting_Started_With_Camping">
            <h2>Getting Started With Camping</h2>
            <p>Steps in preparing for your first camping trip:</p>
            <ol>
              <li>Check the local weather forecast.</li>
              <li>Gather the "Ten Essentials" (navigation, sun protection, insulation, illumination, first-aid, fire, repair kit, nutrition, hydration, emergency shelter).</li>
              <li>Pack your main gear: Tent, Sleeping Bag, and Sleeping Pad.</li>
              <li>Plan your meals and bring plenty of water.</li>
              <li>Double-check your pack before hitting the trail.</li>
            </ol>
            <img src="src\assets\campingsupplies.jpeg" alt="Camping gear laid out including a backpack and other supplies" className="image" />
          </section>

          <section className="main-section" id="Choosing_A_Campsite">
            <h2>Choosing A Campsite</h2>
            <p>Finding the right location to pitch your tent is the first major task once you arrive at the campground.</p>
            <p>You want to look for level ground, good drainage, and safe surroundings. Avoid pitching your tent directly under dead branches (often called "widowmakers").</p>
            <img src="src\assets\campsite.png" alt="A tent pitched safely in a clearing away from dead trees" className="image" />
            <h3>Campsite Checklist:</h3>
            <ul>
              <li>Flat, even ground.</li>
              <li>At least 200 feet away from lakes or streams.</li>
              <li>Natural windbreaks nearby.</li>
              <li>No ant hills or animal dens underneath.</li>
            </ul>
            <p>As you can see, choosing a site requires balancing comfort with safety and environmental guidelines.</p>
            <p>A well-chosen site guarantees a much better night's sleep.</p>
          </section>

          <section className="main-section" id="Setting_Up_The_Tent">
            <h2>Setting Up The Tent</h2>
            <p>In order to set up your shelter securely, you need to follow a logical order of operations.</p>
            <p>It might seem cumbersome if it's windy, but doing it methodically prevents broken poles and lost stakes.</p>
            <img src="src\assets\tentsetup.png" alt="A tent being setup." className="image" />
            <h3>Shelter Assembly:</h3>
            <ol>
              <li>Lay down the ground tarp (footprint).</li>
              <li>Unfold the main tent body on top.</li>
              <li>Assemble all tent poles.</li>
              <li>Insert poles into grommets and clip the tent body to them.</li>
              <li>Stake out the corners.</li>
              <li>Attach and stake the rainfly.</li>
            </ol>
            <p>In this example, we are prioritizing the ground layer first so moisture doesn't seep into the tent floor.</p>
          </section>

          <section className="main-section" id="Starting_A_Campfire">
            <h2>Starting A Campfire</h2>
            <p>Building a fire requires three types of combustible materials and a spark. Here is an overview of how to structure it.</p>
            <img src="src\assets\campfiresetup.png" alt="A well-built campfire showing a teepee structure." className="image" />
            <p>Some basic materials to gather:</p>
            <h3>Fire Materials Required:</h3>
            <ul>
              <li><strong>Tinder:</strong> Dry leaves, pine needles, or dryer lint to catch the initial spark.</li>
              <li><strong>Kindling:</strong> Small twigs, roughly the thickness of a pencil, to build the flame.</li>
              <li><strong>Fuel Wood:</strong> Larger logs to sustain the burn for a longer period.</li>
            </ul>
          </section>

          <section className="main-section" id="Campground_Etiquette">
            <h2>Campground Etiquette</h2>
            <p>Camping relies heavily on an unwritten social contract among nature enthusiasts.</p>
            <p>This means respecting your neighbors, local wildlife, and the environment by strictly practicing "Leave No Trace" principles.</p>
            <p>An example of this might be packing out all your trash instead of throwing it in the fire ring.</p>
            <h3>Leave No Trace Principles:</h3>
            <ol>
              <li>Plan Ahead and Prepare</li>
              <li>Travel and Camp on Durable Surfaces</li>
              <li>Dispose of Waste Properly</li>
              <li>Leave What You Find</li>
              <li>Minimize Campfire Impacts</li>
              <li>Respect Wildlife</li>
              <li>Be Considerate of Other Visitors</li>
            </ol>
            <p>You ensure a great trip for everyone by doing the following:</p>
            <ul>
              <li>Keeping noise down after 10:00 PM</li>
              <li>Storing food securely away from bears and raccoons</li>
              <li>Extinguishing your fire until the ashes are cool to the touch</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
