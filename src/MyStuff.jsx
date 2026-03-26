import Header from './Header';


export default function MyStuff() {
  return (
    <>
      
      <main>
        <h2>MY STUFF</h2>
        <p>
          Subheading that shouldn't be first
        </p>

        <h1>THE MAIN TITLE</h1>

        <p style={{ fontSize: '48px', color: '#fafafa', fontFamily: 'serif', backgroundColor: '#eeeeee' }}>
          Barely visible text because the contrast is terrible.
        </p>

        <p style={{ textAlign: 'center', fontFamily: 'Papyrus', color: 'rgb(4, 95, 214)' }}>
          <span style={{ textDecoration: 'underline' }}>unclickable underlined text</span>
        </p>

        <ul style={{ textAlign: 'center', listStylePosition: 'inside', fontFamily: 'Times New Roman' }}>
          <li>This list is centered</li>
          <li>It looks very</li>
          <li>Unpleasant</li>
        </ul>

        <div style={{ marginLeft: '10px' }}>
          <img 
            src="aerial-view-of-birmingham-uk-at-night-panoramic-cityscape-large-file-AMGG6W" 
            width="400" 
            height="400" 
            alt="really long and bad alt text description that goes on and on and on and on and on really long and bad alt text description that goes on and on and on and on and on really long and bad alt text description that goes on and on and on and on and on "
          />
        </div>

        <p style={{ fontSize: '60px', color: '#000000', fontFamily: 'serif' }}>
          some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure
        </p>

        <p>
          some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure
        </p>

        <p>
          some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure some sort of paragraph with sentence structure
        </p>

        <div style={{ fontFamily: 'Comic Sans MS', color: 'black', backgroundColor: '#ffff00', padding: '20px', margin: '50px', width: '300px', borderTop: '45px solid #ff0000', borderRight: '60px dashed #00ff00', borderBottom: '30px double #0000ff', borderLeft: '50px inset #ff00ff' }}>
          This box has an inconsistent border.
        </div>
      </main>
    </>
  );
}
