import { Link } from 'react-router';

export default function Header() {
    return (
        <header>
            <h1>Trevor Bercher's Tenacious Bear | ITIS3135</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/itis3135/contract">Contract Page</Link></li>
                    <li><Link to="/itis3135/website-evaluations">Website Evaluation</Link></li>
                </ul>
                <ul>
                    <li><Link to="/itis3135/mystuff">Crappy Website</Link></li>
                    <li><a href="#/itis3135/documentation.html">Documentation</a></li>
                    <li><a href="#/itis3135/survey.html">Survey</a></li>
                    <li><a href="#/itis3135/cards.html">Cards</a></li>
                    <li><a href="#/itis3135/product.html">Product</a></li>
                    <li><a href="#/itis3135/inventory.html">Inventory</a></li>
                    <li><a href="#/itis3135/hobby">Hobby</a></li>
                    <li><a href="#/itis3135/intro_form.html">Intro Form</a></li>
                </ul>
            </nav>
        </header>
    );
}