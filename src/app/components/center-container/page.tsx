import React from "react";

const CenterContent = () => {
  return (
    <div>
      <div className="container grid text-white mx-auto py-20 w-[1046px]">
        <div className="row grid  grid-cols-12 gap-x-20 gap-y-10 grid-rows-1 ">
          <div className="main-content mx-auto self-center text-center p-[3.25rem] grid gap-x-20 gap-y-10 col-start-3 col-end-11">
            <h5 className="header-tag text-base leading-6 font-bold text-[#23A6F0]">
              Welcome
            </h5>
            <h1 className="headline text-5xl leading-[80px] tracking-[0.2px] font-bold tracking-[0.2px]">
              Selling on the internet like a pro
            </h1>
            <h4 className="sub-headline text-lg leading-[30px] tracking-[0.2px] font-normal">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <div>
              <button className="btn-text rounded-md px-10 py-3 bg-[#23A6F0] font-bold text-sm leading-[22px] tracking-[0.2px] text-center mr-2.5">
                Get Quote Now
              </button>
              <button className="btn-text border border-[#23A6F0] px-10 py-3 rounded-md font-bold text-sm leading-[22px] tracking-[0.2px] text-center text-[#23A6F0]">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="row grid grid-rows-1">
          <div className="grid grid-cols-3 gap-[30px]">
            <div className="card col-start-1 col-end-2 bg-white text-black rounded-none">
              <div className="grid p-[35px] px-[40px] gap-[20px]">
                <div className="grid p-[22px] px-[19px] bg-[#FFDCD1] gap-[10px] w-[70px] h-[76px] rounded-lg"></div>
                <h3 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
                  training Courses
                </h3>
                <div className="fixed-width w-[50px] h-[2px] bg-[#E74040]"></div>
                <p className="text-[14px] font-normal leading-[20px] tracking-[0.2px] text-[#737373]">
                  The gradual accumulation of information about atomic and
                  small-scale behaviour...
                </p>
              </div>
            </div>
            <div className="card col-start-2 col-end-3 bg-white text-black rounded-none">
              <div className="grid p-[35px] px-[40px] gap-[20px]">
                <div className="grid p-[22px] px-[19px] bg-[#B9EAA8] gap-[10px] w-[70px] h-[76px] rounded-lg"></div>
                <h3 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
                2,769 online courses
                </h3>
                <div className="fixed-width w-[50px] h-[2px] bg-[#E74040]"></div>
                <p className="text-[14px] font-normal leading-[20px] tracking-[0.2px] text-[#737373]">
                  The gradual accumulation of information about atomic and
                  small-scale behaviour...
                </p>
              </div>
            </div>
            <div className="card col-start-3 col-end-4 bg-[#23A6F0] text-black rounded-none">
              <div className="grid p-[35px] px-[40px] gap-[20px]">
                <div className="grid p-[22px] px-[19px] bg-white gap-[10px] w-[70px] h-[76px] rounded-lg"></div>
                <h3 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
                  training Courses
                </h3>
                <div className="fixed-width w-[50px] h-[2px] bg-[#E74040]"></div>
                <p className="text-[14px] font-normal leading-[20px] tracking-[0.2px] text-[#737373]">
                  The gradual accumulation of information about atomic and
                  small-scale behaviour...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterContent;
