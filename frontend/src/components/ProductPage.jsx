import NavPage from "./NavPage";
import '../ProductStyle.css'

function ProductPage() {
    const product = [
        {
          id: 1,
          name: 'Iphone 12',
          href: '#',
          imageSrc: 'https://www.giga.ba/images/articles/1644500845970-0194252430071.jpg',
          imageAlt: "img",
          price: '$250',
          color: 'Violet',
          type: 'Smartphone'
        }, {
          id: 2,
          name: 'Iphone 13',
          href: '#',
          imageSrc: 'https://www.epouzdro.cz/wp-content/uploads/2019/10/iphone11promax_plast.jpg',
          imageAlt: "img",
          price: '$350',
          color: 'Beige',
          type: 'Smartphone'
        },{
          id: 3,
          name: 'Iphone 14',
          href: '#',
          imageSrc: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/14-Pro-Space-Black.png',
          imageAlt: "img",
          price: '$450',
          type: 'Smartphone'

        },
        {
          id: 4,
          name: 'Iphone 15',
          href: '#',
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUe4lYHNYULPbEFcwAeF9UteOMSgqna6UboMVIBO1kdw&s',
          imageAlt: "img",
          price: '$550',
          color: 'White',
          type: 'Smartphone'
        },{
            id: 5,
            name: 'Acer Predator Helios 700',
            href: '#',
            imageSrc: 'https://elnstore.com/cdn/shop/products/acer-predator-PH717-72-71AQ_1200x1200.jpg?v=1619539412',
            imageAlt: "img",
            price: '₱96,230.00',
            color: 'Black',
            type: 'Laptop'
          }, {
            id: 6,
            name: 'Lenovo Legion Pro 5i 16"',
            href: '#',
            imageSrc: 'https://benstore.com.ph/32234-medium_default/lenovo-legion-pro-5i-16-gaming-laptop-240hz-i7-13700hx-rtx-4070-8gb-gddr6-16gb-ddr5-1tb-ssd-onyx-grey-.jpg',
            imageAlt: "img",
            price: '₱105,900',
            color: 'Black',
            type: 'Laptop'
          },{
            id: 7,
            name: 'Alienware AW15R3-10881SLV',
            href: '#',
            imageSrc: 'https://i5.walmartimages.com/asr/72cc80c8-9f04-4514-a3c2-9319ded5bd27_1.a316db9ef3dc45b973c9894e81b48f32.jpeg',
            imageAlt: "img",
            price: '₱99,230.00',
            color: 'Black',
            type: 'Laptop'
          },
          {
            id: 8,
            name: 'Razer Blade 16 16"',
            href: '#',
            imageSrc: 'https://benstore.com.ph/32524-large_default/razer-blade-16-16-dual-uhdfhd-gaming-laptop-i9-13950hx-rtx-4080-8gb-32gb-ddr5-1tb-ssd-mercury-.jpg',
            imageAlt: "img",
            price: '₱99,230.00',
            color: 'White',
            type: 'Laptop'
          },
          {
            id: 9,
            name: 'Apple Watch Series 9"',
            href: '#',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3MfiAPQPrJeoT65DojrnOhg129Vge3vhM2dSB5nBhZw&s',
            imageAlt: "img",
            price: '₱16,230.00',
            color: 'Gold',
            type: 'Smartwatches'
          },
          {
            id: 10,
            name: 'Google Fit"',
            href: '#',
            imageSrc: 'https://i5.walmartimages.com/seo/Fitbit-Inspire-2-Fitness-Tracker-Black_96b0eb36-17a8-4fde-a725-ff7cf9f5e675.43dfffa5bd5240f137e9c2f289ab339d.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF',
            imageAlt: "img",
            price: '₱10,230.00',
            color: 'Black',
            type: 'Smartwatches'
          },
          {
            id: 11,
            name: 'Samsung Galaxy Fit"',
            href: '#',
            imageSrc: 'https://p-ph.ipricegroup.com/uploaded_7feb552e5da8b4d2a3a7f5f73b26deff.jpg',
            imageAlt: "img",
            price: '₱12,230.00',
            color: 'Black',
            type: 'Smartwatches'
          },
          {
            id: 12,
            name: 'Xiaomi Smart Band 8"',
            href: '#',
            imageSrc: 'https://xiaomistoreph.com/cdn/shop/files/Xiaomi_SmartBand8_WBG_2_1024x1024.jpg?v=1695873241',
            imageAlt: "img",
            price: '₱2,999.00',
            color: 'Black',
            type: 'Smartwatches'
          },
          {
            id: 13,
            name: 'Samsung Fast Phone Charger With Micro Usb Cable 10 Watt"',
            href: '#',
            imageSrc: 'https://alohastorage.s3.amazonaws.com/461921/1.jpg',
            imageAlt: "img",
            price: '₱1,499.00',
            color: 'Black',
            type: 'Accesories'
          },
          {
            id: 14,
            name: 'iPhone 14 Pro Amplify Glass Privacy Guard Screen Protector"',
            href: '#',
            imageSrc: 'https://www.otterbox.asia/dw/image/v2/BGMS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw07b21902/productimages/dis/cases-screen-protection/amplify-iphc22/amplify-iphc22-privacy-1.jpg?sw=800&sh=800',
            imageAlt: "img",
            price: '₱750.00',
            color: 'Black',
            type: 'Accesories'
          },
          {
            id: 15,
            name: 'Xiaomi 50W Power Bank 20,000mAh"',
            href: '#',
            imageSrc: 'https://xiaomistoreph.com/cdn/shop/files/Mi_50WPowerBank20000mAh_WBG_1_1200x1200.jpg?v=1689040462',
            imageAlt: "img",
            price: '₱750.00',
            color: '',
            type: 'Accesories'
          },
          {
            id: 15,
            name: 'Iphone 13 Matte Case',
            href: '#',
            imageSrc: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1696986672-71Wj1BlpXRL.jpg?crop=1xw:1.00xh;center,top&resize=980:*',
            imageAlt: "img",
            price: '₱699.00',
            color: '',
            type: 'Accesories'
          },
         
      ]

    return (  
     <>
     <div>
            <NavPage/>
    </div>
        
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Smartphones
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {product
              .filter(product => product.type === "Smartphone")
              .map(product => (
                <div
                  key={product.id}
                  className="group relative"
                >
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
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
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
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Laptops
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {product
              .filter(product => product.type === "Laptop")
              .map(product => (
                <div
                  key={product.id}
                  className="group relative"
                >
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
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
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
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Smart Watches
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {product
              .filter(product => product.type === "Smartwatches")
              .map(product => (
                <div
                  key={product.id}
                  className="group relative"
                >
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
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
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
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Accesories
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {product
              .filter(product => product.type === "Accesories")
              .map(product => (
                <div
                  key={product.id}
                  className="group relative"
                >
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
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
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

export default ProductPage;