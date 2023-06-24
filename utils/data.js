
import bcrypt from 'bcryptjs';


//creating data object users and product arrays
// so here we have created two users and six product inside the users and product array
//in data object
const data = {
  users: [
    {
      name: 'Erica',
      email: 'stargirl@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'illuminating glow scrub',
      slug: 'free-glow face scrub',
      category: 'skincare',
      image: '/images/ericaimage3.jpg',
      price: 70,
      brand: 'Stargirl skincare',
      rating: 4.5,
      numReviews: 1000,
      countInStock: 20,
      description: 'smoothen and soften the body',
      isFeatured: true,
      banner: '/images/ericaimage4.jpg',
    },
    {
      name: 'Body lotion',
      slug: 'free-smoothen skin cream',
      category: 'Skincare',
      image: '/images/ericaimage33.jpg',
      price: 80,
      brand: 'Stargirl skincare',
      rating: 3.2,
      numReviews: 1000,
      countInStock: 20,
      description: 'specifically tailored to skin types and tones',
      isFeatured: true,
      banner: '/images/ericaimage3.jpg',
    },
    {
      name: 'body lotion',
      slug: 'free-cream',
      category: 'skincare',
      image: '/images/ericaimage4.jpg',
      price: 90,
      brand: 'Stargirl skincare',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'for all skin type',
    },
    {
      name: 'facial scrub',
      slug: 'free-facial scrub',
      category: 'skincare',
      image: '/images/ericaimage2.jpg',
      price: 90,
      brand: 'Stargirl skincare',
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: 'for anti aging',
    },
    {
      name: 'Stargirl skincare',
      slug: 'free-care',
      category: 'skincare',
      image: '/images/ericaimage3(2).jpg',
      price: 95,
      brand: 'Stargirl skincare',
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: 'body,Anti-aging Detox',
    },
    {
      name: 'Stargirl skincare',
      slug: 'free-body care',
      category: 'skincare',
      image: '/images/.jpg',
      price: 75,
      brand: 'Stargirl skincare',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: '',
    },
  ],
};






export default data;

// we export the default