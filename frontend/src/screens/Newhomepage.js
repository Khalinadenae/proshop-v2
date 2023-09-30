import React from "react";
import '../assets/css/vendor.css'; // Add this line
import '../assets/css/homestyle.css';  // Add this line
import '../assets/css/customcss.css'; // Add this line
import'../assets/css/home.css'
import { NavLink } from "react-router-dom";

import { useRef, useState } from 'react';
// Import Swiper React components
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

import logo from '../assets/images/demo/logo/logoo.png'

const Newhomepage = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;


  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };


    return (
<div>

<header class="header header-absolute" style={{backgroundColor:"rgba(28,26,23,.8)", borderBottom:"3px solid #d7cdb9"}}>
 
      <div class="container" style={{color:"#d7cdb9"}}>
      
        <nav class="navbar navbar-expand-lg" >
          {/* logo */}
          <a href="index.html" class="navbar-brand order-1 order-lg-2">    <img src={logo} alt='ProShop'  className="logo"style={{height:"auto" , width:"250px"}}


          
        
          />  </a>
  <h5 className="logo-small-devices">
          Move Plotters
        </h5>
          <div class="collapse navbar-collapse order-4 order-lg-1" id="navbarMenu">
            <ul class="navbar-nav mr-auto">
          
              <li class="nav-item dropdown dropdown-sm dropdown-hover">
                <a class="nav-link dropdown-toggle" href="#!" id="navbarDropdown-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"#d7cdb9"}}>
                  Home
                </a>
             
              </li>
         
              <li class="nav-item dropdown-lg dropdown-hover">
                <NavLink to="/shop">
                <a class="nav-link dropdown-toggle" href="#!" id="navbarDropdown-3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"#d7cdb9"}}>
                  SHOP
                </a>
                </NavLink>
        
              </li>
            </ul>
          </div>

          <div class="collapse navbar-collapse order-5 order-lg-3" id="navbarMenu2">
            <ul class="navbar-nav ml-auto position-relative">
   
{/* 
      <!-- user area --> */}
      <li class="nav-item dropdown dropdown-md dropdown-hover">
        <a class="nav-icon dropdown-toggle" id="navbarDropdown-6" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="icon-user d-none d-lg-inline-block" style={{color:"#d7cdb9"}}></i>
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
          <i class="icon-shopping-bag d-none d-lg-inline-block" style={{color:"#d7cdb9"}}></i>
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
        <div class="hero-image" >
{/*         
        // style={{ backgroundImage: 'url(assets/images/demo/background-2.jpeg)' }}> */}
        
        </div>
        <div class="hero-container">
          <div class="row align-items-end vh-100">
            <div class="col-lg-8 mb-4 text-white" data-swiper-parallax-x="-100%">
              <span class="eyebrow mb-5 " style={{color:"#D7CDB9"}}> Shop the latest drop from Move Plotters apparel</span>
              <div style={{marginBottom:"3rem"}}>
        <Link to="/shop" className="btn btn-secondary" style={{padding:"20px 70px"}}>Shop Now </Link>
      </div>
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

              <div style={{marginBottom:"3rem"}}>
        <Link to="/shop" className="btn btn-secondary"> Shop Now </Link>
      </div>
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
              {/* <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next"></div> */}
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
           
          </div>
        </div>
    </section>
    
    <div class="about-container">
  <img src="assets/images/demo/look-4.jpg" alt="Snow" style={{width:"100vw", height:"50vh", margin:"30px 0", opacity:".8"}}/>
  <div class="centered">
    <h4 style={{color:"white"}}>
      Who We Are
    </h4>
    <p>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  </div>
</div>
      
      
  <div className="swiper-container-wrapper">
    <div className="follow-us" 
    style={{width:"40vw"}}>
     <h5 style={{fontSize:"3rem"}}>
      Follow us on Instagram
     </h5>
     <p style={{fontSize:"1.5rem"}}> @Moveplottersapparel</p>
    </div>
  <Swiper
    style={{width:"95vw"}}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          type: 'fraction',
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="assets/images/demo/look-4.jpg" alt="Image"
        />
        </SwiperSlide>
        <SwiperSlide>
        <img src="assets/images/demo/look-4.jpg" alt="Image"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="assets/images/demo/look-4.jpg" alt="Image"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="assets/images/demo/look-4.jpg" alt="Image"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="assets/images/demo/look-4.jpg" alt="Image"/>
        </SwiperSlide>
      </Swiper>

      {/* <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
    </div>

      
      
      
      
      <div class="footer-basic">
        <footer>
          <hr style={{ height: "2px", borderWidth: 0, color: "grey", backgroundColor: "#adaca3" }}/>
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
