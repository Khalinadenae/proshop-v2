import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
// import { toast } from 'react-toastify';
import {
  useGetProductDetailsQuery,
  // useCreateReviewMutation,
} from '../slices/productsApiSlice';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import { addToCart } from '../slices/cartSlice';
import { NavLink } from "react-router-dom";
import '../assets/css/vendor.css'; // Add this line
import '../assets/css/homestyle.css';  // Add this line
import '../assets/css/customcss.css'; // Add this line
import'../assets/css/home.css'



const ProductScreen = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  // const { userInfo } = useSelector((state) => state.auth);

  // const [createReview, { isLoading: loadingProductReview }] =
  //   useCreateReviewMutation();

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await createReview({
  //       productId,
  //       rating,
  //       comment,
  //     }).unwrap();
  //     refetch();
  //     toast.success('Review created successfully');
  //   } catch (err) {
  //     toast.error(err?.data?.message || err.error);
  //   }
  // };

  return (
    <>
    <header class="header header-absolute">
 
 <div class="container">
   <nav class="navbar navbar-expand-lg navbar-light">
     <a href="index.html" class="navbar-brand order-1 order-lg-2"><img src="../assets/images/logo.svg" alt="Logo"/></a>

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
           <NavLink to="/shop">
           <a class="nav-link dropdown-toggle text-red" href="#!" id="navbarDropdown-3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        
        

          <Meta title={product.name} description={product.description} />
          <Row >
            
            <Col md={6} style={{marginTop:"9rem", padding:"40px"}}>
            <div style={{marginBottom:"3rem"}}>
        <Link to="/shop" className="btn btn-secondary">Back to Products</Link>
      </div>
              <Image src={product.image} alt={product.name} fluid
             
              />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush' style={{marginTop:"15rem", padding:"40px"}}>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                {/* <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item> */}
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush' style={{marginTop:"15rem", padding:"40px"}}>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {/* Qty Select */}
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      className='btn-block'
                      type='button'
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
     
          {/* <Row className='review'>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant='flush'>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>

                  {loadingProductReview && <Loader />}

                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group className='my-2' controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as='select'
                          required
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group className='my-2' controlId='comment'>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as='textarea'
                          row='3'
                          required
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingProductReview}
                        type='submit'
                        variant='primary'
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to='/login'>sign in</Link> to write a review
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row> */}
        </>
      )}
    </>
  );
};

export default ProductScreen;
