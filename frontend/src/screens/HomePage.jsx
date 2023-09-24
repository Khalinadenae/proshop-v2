import React from "react";
import './homeassets/css/style.css'
import './homeassets/fonts/font.css'
import {Helmet} from "react-helmet";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import heroBanner from './homeassets/images/hero-banner.png';


const HomePage = () => {
    const currentYear = new Date().getFullYear();
    const sectionStyle = {
        backgroundImage: `url(${heroBanner})`
      };
      
    return (
        <div className="App">
        {/* <header className="header" data-header>
          <div className="container">
            <a href="#" className="logo">
              Moveplotters
            </a>
            <nav className="navbar" data-navbar>
              <ul className="navbar-list">
                <li>
                  <a href="#" className="navbar-link">Home</a>
                </li>
                <li>
                  <a href="#" className="navbar-link">Portfolio</a>
                </li>
                <li>
                  <a href="#" className="navbar-link">Blog</a>
                </li>
                <li>
                  <a href="#" className="navbar-link">Shop</a>
                </li>
              </ul>
              <button className="cart-btn">
                <ion-icon name="bag" aria-hidden="true"></ion-icon>
                <span className="span">Cart (02)</span>
              </button>
              <a href="#" className="btn">Contact Us</a>
            </nav>
            <button className="nav-open-btn" aria-label="toggle menu" data-nav-toggler>
              <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
        </header> */}
        <main>
          <article>
            <div className="hero">
              <div className="container">
                <div className="hero-content">
                  <p className="hero-subtitle title">$120.00</p>
                  <h1 className="h1 hero-title title">Man summer <br /> collection</h1>
                  <p className="hero-text">
                    This is the factor that sets us apart from competition and allows us deliver a specialist business service
                    team applies its ranging experience determining
                  </p>
                  <a href="#" className="btn btn-primary">
                    <span className="span">Shop Now</span>
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>
                </div>
                <div className="hero-banner">
                  <figure className="img-holder" style={{ '--width': 704, '--height': 700 }}>
                    <img src={require('./homeassets/images/hero-banner.png')} width="704" height="700" alt="hero banner" className="img-cover" />
                  </figure>
                  <img src={require('./homeassets/images/hero-shape-1.png')} width="255" height="249" alt="shape" className="shape shape-1" />
                </div>
                <img src={require('./homeassets/images/hero-shape-2.png')} width="360" height="133" alt="shape" className="shape shape-2" />
              </div>
            </div>
            <section className="section product" aria-label="product">
              <div className="container">
                <h2 className="h2 section-title title text-center">Explore new arrivals</h2>
                <ul className="product-list has-scrollbar">
                  {/* Product list items */}
                  <li className="scrollbar-item">
              <div className="product-card text-center">

                <div className="card-banner">

                  <figure className="product-banner img-holder" style={{ '--width': '448px', '--height': '470px' }}>
                    <img src={require('./homeassets/images/product-1.png')} width="448" height="470" loading="lazy"
                      alt="Short Sleeve Shirt" className="img-cover"/>
                  </figure>

                  <a href="#" className="btn product-btn">
                    <ion-icon name="bag" aria-hidden="true"></ion-icon>

                    <span className="span">Add To Cart</span>
                  </a>

                </div>

                <div className="card-content">

                  <h3 className="h4 title">
                    <a href="#" className="card-title">Short Sleeve Shirt</a>
                  </h3>

                  <span className="price">$170.00</span>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="product-card text-center">

                <div className="card-banner">

                  <figure className="product-banner img-holder" style={{ '--width': '448px', '--height': '470px' }}>
                    <img src={require('./homeassets/images/product-2.png')} width="448" height="470" loading="lazy"
                      alt="Short Sleeve Shirt" className="img-cover"/>
                  </figure>

                  <a href="#" className="btn product-btn">
                    <ion-icon name="bag" aria-hidden="true"></ion-icon>

                    <span className="span">Add To Cart</span>
                  </a>

                </div>

                <div className="card-content">

                  <h3 className="h4 title">
                    <a href="#" className="card-title">Short Sleeve Shirt</a>
                  </h3>

                  <span className="price">$170.00</span>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="product-card text-center">

                <div className="card-banner">

                  <figure className="product-banner img-holder" style={{ '--width': '448px', '--height': '470px' }}>
                    <img src={require('./homeassets/images/product-3.png')} width="448" height="470" loading="lazy"
                      alt="Short Sleeve Shirt" className="img-cover"/>
                  </figure>

                  <a href="#" className="btn product-btn">
                    <ion-icon name="bag" aria-hidden="true"></ion-icon>

                    <span className="span">Add To Cart</span>
                  </a>

                </div>

                <div className="card-content">

                  <h3 className="h4 title">
                    <a href="#" className="card-title">Short Sleeve Shirt</a>
                  </h3>

                  <span className="price">$170.00</span>

                </div>

              </div>
            </li>
                </ul>
              </div>



            </section>




            <section className="offer has-bg-image" style={sectionStyle}>
      <div className="container">

        <div className="offer-card" style={{width:"60vw", margin:"0 auto"}}>

          <h2 className="title card-title">WHO WE ARE</h2>

          <p className="card-text">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

        </div>

      </div>
    </section>

            <section className="section feature" aria-label="feature-label">
  <div className="container">

    <h2 className="h2 section-title title text-center" style={{marginTop:"100px"}} id="feature-label">Featured products</h2>

    <ul className="feature-list">

      <li>
        <div className="product-card text-center">

          <div className="card-banner">

            <figure className="product-banner img-holder" style={{ '--width': '448px', '--height': '470px' }}>
              <img src={require('./homeassets/images/product-4.png')} width="448" height="470" loading="lazy"
                alt="Acne Baseball Cap" className="img-cover" />
            </figure>

            <a href="#" className="btn product-btn">
              <ion-icon name="bag" aria-hidden="true"></ion-icon>

              <span className="span">Add To Cart</span>
            </a>

          </div>

          <div className="card-content">
            <h3 className="h3 title">
              <a href="#" className="card-title">Acne Baseball Cap</a>
            </h3>

            <span className="price">$80.00</span>
          </div>

        </div>
      </li>

      <li>
        <div className="product-card text-center">

          <div className="card-banner">

            <figure className="product-banner img-holder" style={{ '--width': '448px', '--height': '470px' }}>
              <img src={require('./homeassets/images/product-5.png')} width="448" height="470" loading="lazy"
                alt="Acne Baseball Cap" className="img-cover" />
            </figure>

            <a href="#" className="btn product-btn">
              <ion-icon name="bag" aria-hidden="true"></ion-icon>

              <span className="span">Add To Cart</span>
            </a>

          </div>

          <div className="card-content">
            <h3 className="h3 title">
              <a href="#" className="card-title">Acne Baseball Cap</a>
            </h3>

            <span className="price">$80.00</span>
          </div>

        </div>
      </li>

      <li>
        <div className="product-card text-center">

          <div className="card-banner">

            <figure className="product-banner img-holder" style={{ '--width': '448px', '--height': '470px' }}>
              <img src={require('./homeassets/images/product-6.png')} width="448" height="470" loading="lazy"
                alt="Acne Baseball Cap" className="img-cover" />
            </figure>

            <a href="#" className="btn product-btn">
              <ion-icon name="bag" aria-hidden="true"></ion-icon>

              <span className="span">Add To Cart</span>
            </a>

          </div>

          <div className="card-content">
            <h3 className="h3 title">
              <a href="#" className="card-title">Acne Baseball Cap</a>
            </h3>

            <span className="price">$80.00</span>
          </div>

        </div>
      </li>

      <li>
        <div className="product-card text-center">

          <div className="card-banner">

            <figure className="product-banner img-holder" style={{ '--width': '448px', '--height': '470px' }}>
              <img src={require('./homeassets/images/product-7.png')} width="448" height="470" loading="lazy"
                alt="Acne Baseball Cap" className="img-cover" />
            </figure>

            <a href="#" className="btn product-btn">
              <ion-icon name="bag" aria-hidden="true"></ion-icon>

              <span className="span">Add To Cart</span>
            </a>

          </div>

          <div className="card-content">
            <h3 className="h3 title">
              <a href="#" className="card-title">Acne Baseball Cap</a>
            </h3>

            <span className="price">$80.00</span>
          </div>

        </div>
      </li>
      <li>
        <div className="product-card text-center">

          <div className="card-banner">

            <figure className="product-banner img-holder" style={{ '--width': '448px', '--height': '470px' }}>
              <img src={require('./homeassets/images/product-8.png')} width="448" height="470" loading="lazy"
                alt="Acne Baseball Cap" className="img-cover" />
            </figure>

            <a href="#" className="btn product-btn">
              <ion-icon name="bag" aria-hidden="true"></ion-icon>

              <span className="span">Add To Cart</span>
            </a>

          </div>

          <div className="card-content">
            <h3 className="h3 title">
              <a href="#" className="card-title">Acne Baseball Cap</a>
            </h3>

            <span className="price">$80.00</span>
          </div>

        </div>
      </li>
      <li>
        <div className="product-card text-center">

          <div className="card-banner">

            <figure className="product-banner img-holder" style={{ '--width': '448px', '--height': '470px' }}>
              <img src={require('./homeassets/images/product-9.png')} width="448" height="470" loading="lazy"
                alt="Acne Baseball Cap" className="img-cover" />
            </figure>

            <a href="#" className="btn product-btn">
              <ion-icon name="bag" aria-hidden="true"></ion-icon>

              <span className="span">Add To Cart</span>
            </a>

          </div>

          <div className="card-content">
            <h3 className="h3 title">
              <a href="#" className="card-title">Acne Baseball Cap</a>
            </h3>

            <span className="price">$80.00</span>
          </div>

        </div>
      </li>
      {/* Repeat similar blocks for other products */}

    </ul>

    <a href="#" className="btn btn-secondary">View All Products</a>

  </div>
</section>




          </article>
        </main>
        <footer className="footer">
          <div className="container">
            {/* Footer content */}
            <div className="footer-top">
  <div className="footer-brand">
    <a href="#" className="logo">
      <img src="./assets/images/logo.svg" width="132" height="27" loading="lazy" alt="shoppie home" />
    </a>
    <p className="footer-text">
      Main factor that sets us apart competition allows deliver a specialist business consultancy service applies
      its ranging experience
    </p>
    <ul className="social-list">
  <li>
    <a href="#" className="social-link">
      <FaFacebook />
    </a>
  </li>
  <li>
    <a href="#" className="social-link">
      <FaTwitter />
    </a>
  </li>
  <li>
    <a href="#" className="social-link">
      <FaLinkedin />
    </a>
  </li>
</ul>
  </div>
  <ul className="footer-list">
    <li>
      <p className="footer-list-title title">Contact info</p>
      <address className="footer-text">
        Neal St, London WC2H 9PR <br />
        United Kingdom
      </address>
    </li>
    <li>
      <a href="mailto:info.shoppie@support.com" className="email">info.shoppie@support.com</a>
    </li>
    <li>
      <a href="tel:+00 123 456 789" className="call">+00 123 456 789</a>
    </li>
  </ul>
  <div className="footer-list">
    <p className="footer-list-title title">Subscribe newsletter</p>
    <input type="email" name="email_address" placeholder="Enter your email address" required autoComplete="off" className="input-field" />
    <button className="btn btn-secondary">Subscribe</button>
  </div>
</div>
<div className="footer-bottom">
  <div className="wrapper">
    <div className="link-wrapper">
      <a href="#" className="footer-bottom-link">Portfolio</a>
      <a href="#" className="footer-bottom-link">Our Team</a>
      <a href="#" className="footer-bottom-link">Pricing Plan</a>
      <a href="#" className="footer-bottom-link">Services</a>
      <a href="#" className="footer-bottom-link">Contact Us</a>
    </div>
    <div className="link-wrapper">
      <a href="#" className="footer-bottom-link">Terms & Conditions</a>
      <a href="#" className="footer-bottom-link">Privacy Policy</a>
    </div>
  </div>
  <p className="copyright">
  <p>Moveplotter &copy; {currentYear}</p>
  </p>
</div>
<img src={require('./homeassets/images/footer-shape-1.png')} width="245" height="165" loading="lazy" alt="shape" className="shape shape-1" />
<img src={require('./homeassets/images/footer-shape-2.png')} width="138" height="316" loading="lazy" alt="shape" className="shape shape-2" />
<img  src={require('./homeassets/images/footer-shape-3.png')}  width="346" height="92" loading="lazy" alt="shape" className="shape shape-3" />

          </div>
        </footer>
        <Helmet>
              <script src="./homeassets/js/script.js" type="text/javascript" />
            </Helmet>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </div>
    )
}


export default HomePage;
