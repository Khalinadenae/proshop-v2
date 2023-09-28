import React from "react";
import '../assets/css/vendor.css'; // Add this line
import '../assets/css/homestyle.css';  // Add this line
import '../assets/css/customcss.css'; // Add this line


const Newhomepage = () => {

    return (
<div>

<header class="header header-absolute">
      <div class="py-1 bg-dark">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="owl-carousel owl-carousel-promo" data-loop="true" data-items="[3,3,2,1]" data-margin="10" data-nav="true">
                <h6 class="fs-14 text-uppercase text-center text-white m-0"><i class="icon-truck mr-1 text-opaque"></i> Free Shipping and Returns</h6>
                <h6 class="fs-14 text-uppercase text-center text-white m-0"><i class="icon-award mr-1 text-opaque"></i> 2 Years of Warranty</h6>
                <h6 class="fs-14 text-uppercase text-center text-white m-0"><i class="icon-shield mr-1 text-opaque"></i> 30 Days Moneyback Guarantee</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a href="index.html" class="navbar-brand order-1 order-lg-2"><img src="assets/images/logo.svg" alt="Logo"/></a>

          <div class="collapse navbar-collapse order-4 order-lg-1" id="navbarMenu">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown dropdown-sm dropdown-hover">
                <a class="nav-link dropdown-toggle" href="#!" id="navbarDropdown-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Home
                </a>
             
              </li>
         
              <li class="nav-item dropdown-lg dropdown-hover">
                <a class="nav-link dropdown-toggle text-red" href="#!" id="navbarDropdown-3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  SHOP
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown-3">
                  <div class="container">
                    <div class="row gutter-1">
                      <div class="col-lg-6">
                        <div class="card card-tile">
                          <figure class="card-image equal equal-50">
                            <span class="image" 
                       style={{ backgroundImage: 'url(assets/images/demo/menu-sale-1.jpg)' }}></span>
                          </figure>
                          <div class="card-footer p-1">
                            <div class="bg-white p-2">
                              <div class="row align-items-center">
                                <div class="col">
                                  <h4 class="fs-20"><a href="#">50% Sale on Cardigans</a></h4>
                                </div>
                                <div class="col text-right">
                                  <a href="" class="underline">Shop Now</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="card card-tile">
                          <figure class="card-image equal equal-50">
                            <span class="image"
                            
                            style={{ backgroundImage: 'url(assets/images/demo/menu-sale-2.jpg)' }}></span>
                          </figure>
                          <div class="card-footer p-1">
                            <div class="bg-white p-2">
                              <div class="row align-items-center">
                                <div class="col">
                                  <h4 class="fs-20"><a href="#">20% Sale on Jewelery</a></h4>
                                </div>
                                <div class="col text-right">
                                  <a href="" class="underline">Shop Now</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="collapse navbar-collapse order-5 order-lg-3" id="navbarMenu2">
            <ul class="navbar-nav ml-auto position-relative">
   
{/* 
      <!-- user area --> */}
      <li class="nav-item dropdown dropdown-md dropdown-hover">
        <a class="nav-icon dropdown-toggle" id="navbarDropdown-6" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="icon-user d-none d-lg-inline-block"></i>
          <span class="d-inline-block d-lg-none">Account</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown-6">
          <div class="row gutter-2">
            <div class="col-12">
              <fieldset>
                <div class="row">
                  <div class="col-12">
                    <div class="form-label-group">
                      <input type="text" id="inputName" class="form-control form-control-lg" placeholder="Name" required="" value="Dumitru"/>
                      <label for="inputName">First Name</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="form-label-group">
                      <input type="text" id="inputSurname" class="form-control form-control-lg" placeholder="Surname" required=""/>
                      <label for="inputSurname">Surname</label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="col-12 text-center">
              <a href="" class="underline fs-14">Forgot Password ?</a>
            </div>
            <div class="col-12">
              <a href="" class="btn btn-primary btn-block">Sign In</a>
              <a href="" class="btn btn-outline-secondary btn-block">Create Account</a>
            </div>
          </div>
        </div>
      </li>

{/* 
      <!-- cart --> */}
      <li class="nav-item dropdown dropdown-md dropdown-hover">
        <a class="nav-icon dropdown-toggle" id="navbarDropdown-8" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="icon-shopping-bag d-none d-lg-inline-block"></i>
          <span class="d-inline-block d-lg-none">Bag</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown-8">
          <div class="row gutter-3">
            <div class="col-12">
              <h3 class="eyebrow text-dark fs-16 mb-0">My Bag</h3>
            </div>
            <div class="col-12">
              <div class="cart-item">
                <a href="#!" class="cart-item-image"><img src="assets/images/demo/product-1.jpg" alt="Image"/></a>
                <div class="cart-item-body">
                  <div class="row">
                    <div class="col-9">
                      <h5 class="cart-item-title">Bold Cuff Insert Polo Shirt</h5>
                      <small>Fred Perry</small>
                      <ul class="list list--horizontal fs-14">
                        <li><s>$85.00</s></li>
                        <li class="text-red">$42.00</li>
                      </ul>
                    </div>
                    <div class="col-3 text-right">
                      <ul class="cart-item-options">
                        <li><a href="" class="icon-x"></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <ul class="list-group list-group-minimal">
                <li class="list-group-item d-flex justify-content-between align-items-center text-uppercase font-weight-bold">
                  Subtotal
                  <span>$78.00</span>
                </li>
              </ul>
            </div>
            <div class="col-12">
              <a href="" class="btn btn-primary btn-block">Add all to cart</a>
              <a href="" class="btn btn-outline-secondary btn-block">View favorites</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <div class="order-2 d-flex d-lg-none" id="navbarMenuMobile">
    <ul class="navbar-nav navbar-nav--icons ml-auto position-relative">

   
      <li class="nav-item">
        <a href="" class="nav-icon"><i class="icon-search"></i></a>
      </li>


      <li class="nav-item dropdown dropdown-md dropdown-hover">
        <a href="" class="nav-icon"><i class="icon-shopping-bag"></i></a>
      </li>

      <li class="nav-item dropdown dropdown-md dropdown-hover">
        <a href="" class="nav-icon" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <i class="icon-menu"></i>
        </a>
      </li>
    </ul>
</div>
</nav>
</div>
</header>





<div class="swiper-container mb-5" >
    <div class="swiper-wrapper">

      <div class="swiper-slide">
        <div class="image" 
        
        style={{ backgroundImage: 'url(assets/images/demo/background-2.jpg)' }}></div>
        <div class="container">
          <div class="row align-items-end vh-100">
            <div class="col-lg-8 text-white" data-swiper-parallax-x="-100%">
              <span class="eyebrow">New Collection</span>
              <h1 class="mb-3 text-uppercase">Summer is here</h1>
              <a href="listing-full.html" class="btn btn-outline-white">Shop Now</a>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div class="image image--overlay" 
        
        style={{ backgroundImage: 'url(assets/images/demo/background-1.jpg)' }}></div>
        <div class="container">
          <div class="row align-items-end vh-100">
            <div class="col-lg-8 text-white" data-swiper-parallax-x="-100%">
              <span class="eyebrow">New Collection</span>
              <h1>Casual Dresses</h1>
              <a href="listing-full.html" class="btn btn-outline-white">Shop Now</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="swiper-footer">
      <div class="container">
        <div class="row justify-content-end align-items-center">
          <div class="col-lg-6 text-right">
            <div class="swiper-navigation">
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Hoerosection end -->


  <!-- categories --> */}
  
<section>
      <div class="container mt-5">
        <div class="row">
          <div class="col text-center">
            <span class="eyebrow text-muted">Just In</span>
            <h2>Shop New Arrivals</h2>
          </div>
        </div>
        <div class="row gutter-1">
          <div class="col-lg-6">
            <figure class="equal">
              <span class="image" style={{ backgroundImage: 'url(assets/images/demo/image-5.jpg)'
              }}>
                <a href="#" class="shop-now-button">Shop Now</a></span>
            </figure>
          </div>

          <div class="col-6 col-lg-3">
            <div class="card card-product mb-1">
              <figure class="card-image equal">
                <a href="#!" class="image">
                  <img src="assets/images/demo/look-1.jpg" alt="Image" />
                  <img src="assets/images/demo/look-1-2.jpg" alt="Image" />
                </a>
              </figure>
              <a href="" class="card-body">
                <h3 class="card-title">Black Blazzer</h3>
                <span class="price">$98.00</span>
              </a>
            </div>
            <div class="card card-product">
              <figure class="card-image equal">
                <a href="#!" class="image">
                  <img src="assets/images/demo/look-3.jpg" alt="Image" />
                  <img src="assets/images/demo/look-3-1.jpg" alt="Image" />
                </a>
              </figure>
              <a href="" class="card-body">
                <h3 class="card-title">Gold Earrings</h3>
                <span class="price">$260.00</span>
              </a>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div class="card card-product mb-1">
              <figure class="card-image equal">
                <a href="#!" class="image">
                  <img src="assets/images/demo/look-2.jpg" alt="Image"/>
                    <img src="assets/images/demo/look-2-1.jpg" alt="Image"/>
                    </a>
                  </figure>
                  <a href="" class="card-body">
                    <h3 class="card-title">Black T-Shirt</h3>
                    <span class="price">$24.00</span>
                  </a>
                </div>
                <div class="card card-product">
                  <figure class="card-image equal">
                    <a href="#!" class="image">
                      <img src="assets/images/demo/look-4.jpg" alt="Image"/>
                        <img src="assets/images/demo/look-4-1.jpg" alt="Image" />
                    
                      </a>
                  </figure>
                  <a href="" class="card-body">
                    <h3 class="card-title">Sunglass</h3>
                    <span class="price">$18.00</span>
                  </a>
                </div>
            </div>
          </div>
         <div class="row">
            <div class="col text-center">
              <a href="" class="underlined">View all products</a>
            </div>
          </div>
        </div>
    </section>
    

      
      <section class="py-lg-0 no-overflow">
        <div class="container">
          <div class="row align-items-center gutter-1">
            <div class="col-lg-3">
              <div class="pr-lg-5">
                <div class="level-1">
                  <span class="eyebrow text-muted">Follow Our Instagram</span>
                  <h4>@Moveplottersapparel</h4>
                  <div class="nav nav-tabs flex-lg-column mt-md-3 lavalamp">
                    <a class="nav-item nav-link active" data-filter="1"></a>
                    <a class="nav-item nav-link" data-filter="2"></a>
                    <a class="nav-item nav-link" data-filter="3"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="row gutter-2 filtr-container">

                <div class="col-12 filtr-item m-5" data-category="1" data-sort="value">
                  <div class="owl-carousel owl-carousel--mask visible" data-items="[2,2,2,1]" data-loop="true" data-margin="10" data-nav="true">
                    <div class="card card-product">
                      <figure class="card-image">
                  
                        <a href="#!">
                          <img src="assets/images/demo/product-1.jpg" alt="Image" />
                          {/* <img src="assets/images/demo/product-1-3.jpg" alt="Image" /> */}
                        </a>
                      </figure>
                      {/* <a href="" class="card-body">
                        <h3 class="card-title">T-shirt</h3>
                        <span class="price">$19.00</span>
                      </a> */}
                    </div>
                    <div class="card card-product">
                      <figure class="card-image">
                  
                        <a href="#!">
                          <img src="assets/images/demo/product-2.jpg" alt="Image" />
                          {/* <img src="assets/images/demo/product-2-2.jpg" alt="Image" /> */}
                        </a>
                      </figure>
                   
                    </div>
                    <div class="card card-product">
                      <figure class="card-image">
                  
                        <a href="#!">
                          <img src="assets/images/demo/product-3.jpg" alt="Image" />
                          {/* <img src="assets/images/demo/product-3-3.jpg" alt="Image" /> */}
                        </a>
                      </figure>
                 
                    </div>
                  </div>
                </div>


                <div class="col-12 filtr-item filteredOut" data-category="2" data-sort="value">
                  <div class="owl-carousel owl-carousel--mask visible" data-items="[2,2,2,1]" data-loop="true" data-margin="10" data-nav="true">
                    <div class="card card-product">
                      <figure class="card-image">
                        <a href="#!" class="action"><i class="icon-heart"></i></a>
                        <a href="#!">
                          <img src="assets/images/demo/product-1.jpg" alt="Image" />
                          <img src="assets/images/demo/product-1-3.jpg" alt="Image" />
                        </a>
                      </figure>
                      <a href="" class="card-body">
                        <h3 class="card-title">T-shirt</h3>
                        <span class="price">$19.00</span>
                      </a>
                    </div>
                    <div class="card card-product">
                      <figure class="card-image">
                        <a href="#!" class="action"><i class="icon-heart"></i></a>
                        <a href="#!">
                          <img src="assets/images/demo/product-2.jpg" alt="Image" />
                          <img src="assets/images/demo/product-2-2.jpg" alt="Image" />
                        </a>
                      </figure>
                      <a href="" class="card-body">
                        <h3 class="card-title">Swimwear</h3>
                        <span class="price">$39.00</span>
                      </a>
                    </div>
                    <div class="card card-product">
                      <figure class="card-image">
                        <a href="#!" class="action"><i class="icon-heart"></i></a>
                        <a href="#!">
                          <img src="assets/images/demo/product-3.jpg" alt="Image" />
                          <img src="assets/images/demo/product-3-3.jpg" alt="Image" />
                        </a>
                      </figure>
                      <a href="" class="card-body">
                        <h3 class="card-title">Skirt</h3>
                        <span class="price">$29.00</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-12 filtr-item filteredOut" data-category="3" data-sort="value">
                  <div class="owl-carousel owl-carousel--mask visible" data-items="[2,2,2,1]" data-loop="true" data-margin="10" data-nav="true">
                    <div class="card card-product">
                      <figure class="card-image">
                        <a href="#!" class="action"><i class="icon-heart"></i></a>
                        <a href="#!">
                          <img src="assets/images/demo/product-1.jpg" alt="Image" />
                          <img src="assets/images/demo/product-1-3.jpg" alt="Image" />
                        </a>
                      </figure>
                      <a href="" class="card-body">
                        <h3 class="card-title">T-shirt</h3>
                        <span class="price">$19.00</span>
                      </a>
                    </div>
                    <div class="card card-product">
                      <figure class="card-image">
                        <a href="#!" class="action"><i class="icon-heart"></i></a>
                        <a href="#!">
                          <img src="assets/images/demo/product-2.jpg" alt="Image" />
                          <img src="assets/images/demo/product-2-2.jpg" alt="Image" />
                        </a>
                      </figure>
                      <a href="" class="card-body">
                        <h3 class="card-title">Swimwear</h3>
                        <span class="price">$39.00</span>
                      </a>
                    </div>
                    <div class="card card-product">
                      <figure class="card-image">
                        <a href="#!" class="action"><i class="icon-heart"></i></a>
                        <a href="#!">
                          <img src="assets/images/demo/product-3.jpg" alt="Image" />
                          <img src="assets/images/demo/product-3-3.jpg" alt="Image" />
                        </a>
                      </figure>
                      <a href="" class="card-body">
                        <h3 class="card-title">Skirt</h3>
                        <span class="price">$29.00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      
      
      
      
      <div class="footer-basic">
        <footer>
          <hr style={{ height: "2px", borderWidth: 0, color: "grey", backgroundColor: "white" }}/>
            <ul class="list-inline">
              <li class="list-inline-item"><a href="#">Home</a></li>
              <li class="list-inline-item"><a href="#">Services</a></li>
              <li class="list-inline-item"><a href="#">About</a></li>
              <li class="list-inline-item"><a href="#">Sitemap</a></li>
              <li class="list-inline-item"><a href="#">Privacy Notice</a></li>
            </ul>
            <p class="copyright"> Move Plotters  © 2023</p>
        
          </footer>
      </div>
    
      </div>
    )};
export default Newhomepage;
