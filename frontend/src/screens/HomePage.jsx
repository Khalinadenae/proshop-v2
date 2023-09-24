import React from "react";

const HomePage = () => {
    return (
        <div className="App">
        <header className="header" data-header>
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
        </header>
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
                    <img src="./homeassets/images/hero-banner.png" width="704" height="700" alt="hero banner" className="img-cover" />
                  </figure>
                  <img src="./homeassets/images/hero-shape-1.png" width="255" height="249" alt="shape" className="shape shape-1" />
                </div>
                <img src="./homeassets/images/hero-shape-2.png" width="360" height="133" alt="shape" className="shape shape-2" />
              </div>
            </div>
            <section className="section product" aria-label="product">
              <div className="container">
                <h2 className="h2 section-title title text-center">Explore new arrivals</h2>
                <ul className="product-list has-scrollbar">
                  {/* Product list items */}
                </ul>
              </div>
            </section>
            {/* Other sections go here */}
          </article>
        </main>
        <footer className="footer">
          <div className="container">
            {/* Footer content */}
          </div>
        </footer>
        <script src="./homeassets/js/script.js"></script>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </div>
    )
}


export default HomePage;
