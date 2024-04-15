  import NavPage from "./NavPage";
  import { MdOutlineShoppingCart } from "react-icons/md";
  import { BiMedal } from "react-icons/bi";
  import { BsTag } from "react-icons/bs";
  import { GoShieldCheck } from "react-icons/go";
  import AliceCarousel from 'react-alice-carousel';
  import "react-alice-carousel/lib/alice-carousel.css";

 

  function Homepage() {
    const smartphone = [
      {
        id: 1,
          name: 'Iphone 12',
          href: '#',
          imageSrc: 'https://www.giga.ba/images/articles/1644500845970-0194252430071.jpg',
          imageAlt: "img",
          price: '$250',
          color: 'Violet',
  
      }, {
        id: 2,
          name: 'Iphone 13',
          href: '#',
          imageSrc: 'https://www.epouzdro.cz/wp-content/uploads/2019/10/iphone11promax_plast.jpg',
          imageAlt: "img",
          price: '$350',
          color: 'Beige',
      },{
        id: 3,
        name: 'Iphone 14',
        href: '#',
        imageSrc: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/14-Pro-Space-Black.png',
        imageAlt: "img",
        price: '$450',
        color: 'White',
      },
      {
        id: 3,
        name: 'Iphone 15',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUe4lYHNYULPbEFcwAeF9UteOMSgqna6UboMVIBO1kdw&s',
        imageAlt: "img",
        price: '$550',
        color: 'White',
      },
    ]

     
    const laptops = [
      {
        id: 1,
        name: 'Acer Predator Helios 700',
        href: '#',
        imageSrc: 'https://elnstore.com/cdn/shop/products/acer-predator-PH717-72-71AQ_1200x1200.jpg?v=1619539412',
        imageAlt: "img",
        price: '₱96,230.00',
        color: 'Black',
      }, {
        id: 2,
        name: 'Lenovo Legion Pro 5i 16"',
        href: '#',
        imageSrc: 'https://benstore.com.ph/32234-medium_default/lenovo-legion-pro-5i-16-gaming-laptop-240hz-i7-13700hx-rtx-4070-8gb-gddr6-16gb-ddr5-1tb-ssd-onyx-grey-.jpg',
        imageAlt: "img",
        price: '₱105,900',
        color: 'Black',
      },{
        id: 3,
        name: 'Alienware AW15R3-10881SLV',
        href: '#',
        imageSrc: 'https://i5.walmartimages.com/asr/72cc80c8-9f04-4514-a3c2-9319ded5bd27_1.a316db9ef3dc45b973c9894e81b48f32.jpeg',
        imageAlt: "img",
        price: '₱99,230.00',
        color: 'Black',
      },
      {
        id: 3,
        name: 'Razer Blade 16 16"',
        href: '#',
        imageSrc: 'https://benstore.com.ph/32524-large_default/razer-blade-16-16-dual-uhdfhd-gaming-laptop-i9-13950hx-rtx-4080-8gb-32gb-ddr5-1tb-ssd-mercury-.jpg',
        imageAlt: "img",
        price: '₱99,230.00',
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
            {smartphone.map((smartphones) => (
              <div key={smartphone.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={smartphones.imageSrc}
                    alt={smartphones.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={smartphones.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {smartphones.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{smartphones.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{smartphones.price}</p>
                </div>
                <div className="group-hover:block hidden">
                  <button className=" text-gray-900 hover:bg-gray-100 px-2 py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Laptops</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {laptops.map((laptop) => (
            <div key={laptop.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={laptop.imageSrc}
                  alt={laptop.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={laptop.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {laptop.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{laptop.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{laptop.price}</p>
              </div>
              <div className="group-hover:block hidden">
                  <button className=" text-gray-900 hover:bg-gray-100 px-2 py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add to Cart</button>
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