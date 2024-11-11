import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (

    <div>
      <div className="container mx-auto w-full h-[91px]">
        <nav className="navbar w-[auto] h-[91px] gap-[324px] text-white ">
          <div className="collapse navbar-collapse w-[830px] h-[58px] p-[3px_0] gap-0 absolute top-[16px] left-[364px] ">
            <div className="navbar-nav w-[196px] h-[auto] absolute top-[3px] left-[626px] gap-[45px] flex items-center">
              <div className="nav-item w-[41px] h-[22px] gap-0 ">
                <a
                  href="#"
                  className="btn-text font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px] text-right"
                >
                  Login
                </a>
              </div>
              <div className="nav-item w-[214px] h-[52px] ">
                <button className="p-[14px_25px] rounded-md h-full gap-4 flex items-center bg-[#23A6F0] "><a href="#" className="font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.1px] text-left w-[auto] h-[auto] flex items-center">
                  JOIN US
                  </a></button>
              </div>
            </div>
            <div className="navbar-nav w-auto h-auto top-[17px] gap-[21px] flex list-none items-center absolute">
              <li><a href="" className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center">Home</a></li>
              <li><a href="" className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center">Product</a></li>
              <li><a href="" className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center">Pricing</a></li>
              <li><a href="" className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center">Contact</a></li>
            </div>
          </div>
          <div className="navbar-toggler w-[24px] h-[13.71px] absolute top-[39px] left-[1270px] gap-0 border-2 opacity-0">
            <div className="navbar-toggler-icon"></div>
          </div>
          <div className="navbar-brand absolute w-[187px] h-[58px] top-[17px] left-[153px] p-[13px_35px_13px_0px] gap-[10px] ">
            <h3 className="w-[152px] h-[32px] top-[13px] gap-0 font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-left">BrandName</h3>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
