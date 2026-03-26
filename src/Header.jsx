import { Link } from 'react-router';

export default function Header() {
    return (
        <header>
            
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/itis3135/contract">Contract Page</Link></li>
                    <li><Link to="/itis3135/website-evaluations">Website Evaluation</Link></li>
                </ul>
                <ul>
                    <li><Link to="/itis3135/mystuff">Crappy Website</Link></li>
                    <li><Link to="/itis3135/documentation">Documentation</Link></li>
                    <li><Link to="/itis3135/survey">Survey</Link></li>
                    <li><Link to="/itis3135/cards">Cards</Link></li>
                    <li><Link to="/itis3135/product">Product</Link></li>
                    <li><Link to="/itis3135/inventory">Inventory</Link></li>
                    <li><Link to="/itis3135/hobby">Hobby</Link></li>
                    <li><Link to="/itis3135/intro_form">Intro Form</Link></li>
                </ul>
            </nav>
        </header>
    );
}