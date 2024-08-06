import React from 'react';
import './Navbar2.css';
import { Link } from 'react-router-dom';

export default function Navbar2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav2">
        <div className="container-fluid">
          <button
            className="navbar-toggler order-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex order-3 ms-auto">
          <Link className="nav-link active" to="/form">
              <img src="/images/user.png" title="User Avatar" style={{ height: '35px', marginRight: '15px' }} alt="User Avatar" />
            </Link>
            <Link className="nav-link active" to="/cart">
              <img src="/images/shopping-cart.png" title="Shopping Cart Icon" style={{ height: '35px' }} alt="Shopping Cart Icon" />
            </Link>
          </div>
          <div className="collapse navbar-collapse justify-content-start order-2" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Rings
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/ring">View All Rings</Link></li>
                  <li><Link className="dropdown-item" to="/ring">Engagement Rings</Link></li>
                  <li><Link className="dropdown-item" to="/ring">Fashion</Link></li>
                  <li><Link className="dropdown-item" to="/ring">Bands</Link></li>
                  <li><Link className="dropdown-item" to="/ring">Bridal Rings</Link></li>
                  <li><Link className="dropdown-item" to="/ring">Men's Rings</Link></li>
                  <li><Link className="dropdown-item" to="/ring">Colourful Rings</Link></li>
                  <li><Link className="dropdown-item" to="/ring">Plain Rings</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pendant
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/pendents">View All Pendant</Link></li>
                  <li><Link className="dropdown-item" to="/pendents">Single Pendant</Link></li>
                  <li><Link className="dropdown-item" to="/pendents">Fashion</Link></li>
                  <li><Link className="dropdown-item" to="/pendents">Love Pendant</Link></li>
                  <li><Link className="dropdown-item" to="/pendents">Religious Pendant</Link></li>
                  <li><Link className="dropdown-item" to="/pendents">Alphabet Pendant</Link></li>
                  <li><Link className="dropdown-item" to="/pendents">Colourful Pendant</Link></li>
                  <li><Link className="dropdown-item" to="/pendents">Plain Pendant</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Earrings
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/earrings">View All Earrings</Link></li>
                  <li><Link className="dropdown-item" to="/earrings">Jhumka</Link></li>
                  <li><Link className="dropdown-item" to="/earrings">Ear left right</Link></li>
                  <li><Link className="dropdown-item" to="/earrings">Multipierced</Link></li>
                  <li><Link className="dropdown-item" to="/earrings">Hooks & Huggies</Link></li>
                  <li><Link className="dropdown-item" to="/earrings">Drops</Link></li>
                  <li><Link className="dropdown-item" to="/earrings">Studs</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Bangles
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/bangles">View all Bangles</Link></li>
                  <li><Link className="dropdown-item" to="/bangles">Colourful Bangles</Link></li>
                  <li><Link className="dropdown-item" to="/bangles">Plain Bangles</Link></li>
                  <li><Link className="dropdown-item" to="/bangles">Round Bangles</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Necklace
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/nacklace">View All Necklace</Link></li>
                  <li><Link className="dropdown-item" to="/nacklace">Simple Design Necklace</Link></li>
                  <li><Link className="dropdown-item" to="/nacklace">Antique Design Necklace</Link></li>
                  <li><Link className="dropdown-item" to="/nacklace">Colourful Design Necklace</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nose pins
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/pins">View All Nose Pins</Link></li>
                  <li><Link className="dropdown-item" to="/pins">Simple Nose Pins</Link></li>
                  <li><Link className="dropdown-item" to="/pins">Hooks Nose Pins</Link></li>
                  <li><Link className="dropdown-item" to="/pins">Thread Nose Pins</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Bracelet
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/bracelat">View All Bracelet</Link></li>
                  <li><Link className="dropdown-item" to="/bracelat">Colourful Bracelet</Link></li>
                  <li><Link className="dropdown-item" to="/bracelat">Simple Bracelet</Link></li>
                  <li><Link className="dropdown-item" to="/bracelat">Eternity</Link></li>
                  <li><Link className="dropdown-item" to="/bracelat">Oval</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/mangalsutra">Magalsutra</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">Chain</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Kids</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Gifts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Cufflinks</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
