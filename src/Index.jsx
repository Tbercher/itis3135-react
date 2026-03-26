import Header from './Header';
import Footer from './Footer';
import { use } from 'react';
import { useHomeTitle, useItisTitle } from './usetitle';

export default function Index() {
  useItisTitle("Index");
  return (
    <>
      <h1>Trevor Bercher's Tenacious Bear | ITIS3135</h1>
      <Header />
      
      <main>
        <h2>Home</h2>
      </main>
      <Footer />
    </>
  );
}