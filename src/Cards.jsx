import Header from './Header';
import Footer from './Footer';

export default function Cards() {
  return (
    <>
      <h1>Trevor Bercher's Tenacious Bear | ITIS3135 | Cards</h1>
      <Header />
      <main>
        <h2>Tenacious Bear Camping Supplies Giveaway Cards</h2>
        <div id="playing-cards">
          <div className="card">
            <div className="left">
              <img src="src\assets\bearmascot.png" alt="Bear Mascot" />
            </div>
            <div className="middle">
              <img src="src\assets\campingtent.png" alt="Camping Tent" />
            </div>
            <div className="right">
              <img className="flipped" src="src\assets\bearmascot.png" alt="Bear Mascot" />
            </div>
          </div>

          <div className="card">
            <div className="left">
              <img src="src\assets\bearmascot.png" alt="Bear Mascot" />
            </div>
            <div className="middle">
              <img src="src\assets\hikingbag.png" alt="Hiking Backpack" />
            </div>
            <div className="right">
              <img className="flipped" src="src\assets\bearmascot.png" alt="Bear Mascot" />
            </div>
          </div>

          <div className="card red">
            <div className="left">
              <img src="src\assets\bearmascot.png" alt="Bear Mascot" />
            </div>
            <div className="middle">
              <img src="src\assets\campfire.png" alt="Campfire" />
            </div>
            <div className="right">
              <img className="flipped" src="src\assets\bearmascot.png" alt="Bear Mascot" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
