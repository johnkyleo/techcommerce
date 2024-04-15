import NavPage from "./NavPage";

function AboutPage() {
    return ( 
        <>
        <NavPage/>
      <div className="">
         
          <p className="mt-20 ml-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to our ecommerce website!</p> 
          <p className="mt-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We are a team of passionate individuals who are dedicated to bringing you the best products at the best prices.
          Our mission is to provide a seamless and enjoyable shopping experience for all of our customers. We believe that shopping should be fun, easy, and accessible to everyone, no matter where you are in the world.
         </p>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>


     



      </>
     );
}

export default AboutPage;