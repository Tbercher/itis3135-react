import Header from './Header';
import Footer from './Footer';
import { useHomeTitle, useItisTitle } from './usetitle';
import CatSlideshow from './CatSlideshow';

export default function Index() {
  useItisTitle("Index");
  return (
    <>
      <h1>Trevor J. Bercher | Tenacious Bear | ITIS3135 | Cat Api</h1>
      <Header />
      
      <main>
        <h2>Cat Api</h2>
        
        {/* Cat Slideshow Integration */}
        <div style={{ padding: '20px 0' }}>
          <CatSlideshow />
        </div>
      </main>
      
      <Footer />
    </>
  );
}