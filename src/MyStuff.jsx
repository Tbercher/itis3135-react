export default function MyStuff() {
  return (
    <div style={{ backgroundColor: 'white', margin: '0px' }}>
      
      <h2 style={{ fontFamily: '"Comic Sans MS"', color: 'black', marginTop: '50px' }}>
        Subheading that shouldn't be first
      </h2>

      <h1 style={{ fontFamily: '"Papyrus"', color: 'black', marginLeft: '200px' }}>
        THE MAIN TITLE
      </h1>

      <p style={{ fontSize: '48px', color: '#fafafa', fontFamily: 'serif', backgroundColor: '#eeeeee' }}>
        Barely visible text because the contrast is terrible.
      </p>

      <p style={{ textAlign: 'center', fontFamily: '"Papyrus"', color: 'rgb(4, 95, 214)' }}>
        <span style={{ textDecoration: 'underline' }}>unclickable underlined text</span>
      </p>

      <ul style={{ textAlign: 'center', listStylePosition: 'inside', fontFamily: '"Times New Roman"' }}>
        <li>This list is centered</li>
        <li>It looks very</li>
        <li>Unpleasant</li>
      </ul>

      <br /><br /><br /><br />

      <div style={{ marginLeft: '10px' }}>
        <img 
          src="aerial-view-of-birmingham-uk-at-night-panoramic-cityscape-large-file-AMGG6W" 
          width="400" 
          height="400" 
          alt="really long and bad alt text description that goes on and on and on and on and on really long and bad alt text description that goes on and on and on and on and on really long and bad alt text description that goes on and on and on and on and on "
        />
      </div>

      <p style={{ fontSize: '60px', color: '#000000', fontFamily: 'serif' }}>
        some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure
      </p>

      <p id="278" className="C906">
        some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure some sort of paragaph with sentence structure
      </p>
      
      <p id="729" className="C40">
        some sort of paragaph with sentence structuresome sort of paragaph with sentence structuresome sort of paragaph with sentence structuresome sort of paragaph with sentence structuresome sort of paragaph with sentence structuresome sort of paragaph with sentence structuresome sort of paragaph with sentence structuresome sort of paragaph with sentence structuresome sort of paragaph with sentence structuresome sort of paragaph with sentence structure some sort of paragaph with sentence structure
      </p>

      <div style={{ 
  boxSizing: 'content-box', /* <-- This is the fix */
  fontFamily: '"Comic Sans MS"', 
  color: 'black', 
  backgroundColor: '#ffff00', 
  padding: '20px', 
  margin: '50px', 
  width: '300px', 
  borderTop: '45px solid #ff0000', 
  borderRight: '60px dashed #00ff00', 
  borderBottom: '30px double #0000ff', 
  borderLeft: '50px inset #ff00ff' 
}}>
  This box has a inconsistent border.
</div>

    </div>
  );
}