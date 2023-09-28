import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import '../assets/css/vendor.css'; // Add this line
import '../assets/css/homestyle.css';  // Add this line
import '../assets/css/customcss.css'; // Add this line
import { NavLink } from "react-router-dom";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {/* {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )} */}

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
                <NavLink to="/">
                <a class="nav-link dropdown-toggle" href="#!" id="navbarDropdown-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             HOME
                </a>
                </NavLink>
             
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

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        
        <>
          <Meta />
          <h1>Latest Products</h1>
          <Row style={{width:"90vw", margin:"90px auto"}}>
            {data.products.map((product) => (
              <Col key={product._id} xs={12} sm={6} md={6} lg={6} xl={6} className="mb-5">
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};
export default HomeScreen;
