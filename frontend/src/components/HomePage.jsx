  import NavPage from "./NavPage";
  import { MdOutlineShoppingCart } from "react-icons/md";
  import { BiMedal } from "react-icons/bi";
  import { BsTag } from "react-icons/bs";
  import { GoShieldCheck } from "react-icons/go";
  import AliceCarousel from 'react-alice-carousel';
  import "react-alice-carousel/lib/alice-carousel.css";

 

  function Homepage() {
    const products = [
      {
        id: 1,
        name: 'Iphone 12',
        href: '#',
        imageSrc: 'https://pngimg.com/d/iphone_12_PNG3.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$250',
        color: 'Gray',
      }, {
        id: 2,
        name: 'Iphone 13',
        href: '#',
        imageSrc: 'https://pngimg.com/d/iphone_13_PNG2.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$350',
        color: 'Orange',
      },{
        id: 3,
        name: 'Iphone 14',
        href: '#',
        imageSrc: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/14-Pro-Space-Black.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$450',
        color: 'White',
      },
      {
        id: 3,
        name: 'Iphone 15',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUe4lYHNYULPbEFcwAeF9UteOMSgqna6UboMVIBO1kdw&s',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$550',
        color: 'White',
      },
      
    ]
      return ( 
          <>
          <NavPage/>
          <div className="h-auto ">
            <AliceCarousel autoPlay autoPlayInterval={"3000"}>
              <p><img src={require('../asset/razer.jpg')} alt="" className="sliderimg" /></p>
              <p><img src={require('../asset/acer.jpg')} alt="" className="sliderimg" /></p>
              <p><img src={require('../asset/dell.jpeg')} alt="" className="sliderimg" /></p>
              <p><img src={require('../asset/lenovo.jpg')} alt="" className="sliderimg" /></p>
            </AliceCarousel>
          </div>
        <div className="flex justify-center items-center h-auto">
          <ul className="flex space-x-4">
            <li>
              <h2 className="text-2xl"><MdOutlineShoppingCart/>FREE DELIVERY</h2>
              <h4 className="text-gray-800 text-opacity-75">Consectetur adipi elit lorem ipsum dolor sit amet.</h4>
            </li>
            <li>
              <h2 className="text-2xl"><BiMedal />QUALITY GUARANTEE</h2>
              <h4 className="text-gray-800 text-opacity-75">Dolor sit amet orem ipsu mcons ectetur adipi elit.</h4>
            </li>
            <li>
              <h2 className="text-2xl"><BsTag />DAILY OFFERS</h2>
              <h4 className="text-gray-800 text-opacity-75">Amet consectetur adipi elit loreme ipsum dolor sit.</h4>
            </li>
            <li>
              <h2 className="text-2xl"><GoShieldCheck />100% SECURE PAYMENT</h2>
              <h4 className="text-gray-800 text-opacity-75">Rem Lopsum dolor sit amet, consectetur adipi elit.</h4>
            </li>
          </ul>
        </div>
        
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Smartphones</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </>
        
      );
  }

  export default Homepage;