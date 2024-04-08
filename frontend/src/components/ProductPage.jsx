import Smartphones from "../categories/Smartphone";
import NavPage from "./NavPage";
import ProductMenu from "./ProductMenu";
import '../ProductStyle.css'

function ProductPage() {
    return (  
     <>
     <div>
            <NavPage/>
    </div>
        
        <div className="divider">  
            <div className="productmenu">  
            <ProductMenu />
            </div>
         
         <div className="productmain"> 
         <Smartphones />
         </div>
          
        </div>
         
   



     </>
    );
}

export default ProductPage;