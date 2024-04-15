import { LuSmartphone,LuCable } from "react-icons/lu";
import { FaLaptop } from "react-icons/fa";
import { IoWatchOutline } from "react-icons/io5";
import { RiBattery2ChargeLine } from "react-icons/ri";



function ProductMenu() {
    return (
        <div className=""> 
            <p className="text-2xl pb-3 font-bold">Categories</p>
             <ul>
                <li className="pl-7"> 
                <a href="#" className="inline-flex items-center justify-center">
                <LuSmartphone />
                <span className="w-full font-bold">Smartphones</span></a> 
                    <ol>
                        <li className="mx-8">Samsung</li>
                        <li className="mx-8">Apple</li>
                        <li className="mx-8">Xiaomi</li>
                        <li className="mx-8">Huawei</li>
                    </ol>
                </li>
                <li className="pl-7"> 
                <a href="#" className="inline-flex items-center justify-centerg">
                <FaLaptop />
                <span className="w-full font-bold">Laptops</span></a> 
                    <ul>
                        <li className="mx-8">Acer</li>
                        <li className="mx-8">Lenovo</li>
                        <li className="mx-8">Dell</li>
                        <li className="mx-8">HP</li>
                        <li className="mx-8">Razer</li>
                    </ul>
                </li>
                <li className="pl-7"> 
                <a href="#" className="inline-flex items-center justify-centerg">
                <IoWatchOutline />
                <span className="w-full font-bold">Smart Watches</span></a> 
                    <ul>
                        <li className="mx-8">Samsung Galaxy</li>
                        <li className="mx-8">Apple Watches</li>
                        <li className="mx-8">Google Fit</li>

                    </ul>
                </li>
                <li className="pl-7">
                <a href="#" className="inline-flex items-center justify-centerg">
                <RiBattery2ChargeLine />
                <span className="w-full font-bold">Power Banks</span></a> 
                    <ul>
                        <li className="mx-8">Romoss</li>
                        <li className="mx-8">Anker</li>
                        <li className="mx-8">Bavin</li>
                    </ul>
                </li>
                <li className="pl-7">
                <a href="#" className="inline-flex items-center justify-centerg">
                <LuCable />
                <span className="w-full font-bold">Accesories</span></a> 
                    <ul>
                        <li className="mx-8">Power Bricks</li>
                        <li className="mx-8">USB Cables</li>
                        <li className="mx-8">Phone Cases</li>
                    </ul>
                </li>
             </ul>
               
              
          
        </div>
      );
}

export default ProductMenu;


