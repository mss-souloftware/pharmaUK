import React from "react";
import "../app/about/page.css";
import Link from "next/link";
import Image from "next/image";

const QualifiedTeamAboutPage = () => {
  return (
    <div className="bg-black">
    <div className="container mx-auto px-4 sm:px-2 lg:px-8 w-full my-10 md:my-14 lg:my-0">
      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-1 md:gap-4 md:h-72 lg:h-full">
        
        {/* First Section */}
        <div className="my-10 lg:my-20 w-full text-center lg:text-left ">
          <h1 className="text-white text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-bold leading-relaxed">
            Our&nbsp;
            <span className="text-hoverUnderlineColor underline-background tracking-widest ">
              Qualified&nbsp;
            </span>
            <span className="block">Dispensing Team</span>
          </h1>
          <p className="text-gray-100 mt-4 sm:mt-7 text-base lg:text-lg">
            All our pharmacists are based in the UK and are registered with the
            General Pharmaceutical Council.
          </p>
          <button className="bg-hoverUnderlineColor text-white lg:w-[133px] lg:h-[39px] h-[30px] w-[110px] md:w-[110px] mt-8 rounded-md">
            <Link href="/" className="text-sm" >Learn More</Link>
          </button>
        </div>
  
        {/* Second Section (Doctor Profiles) */}
        <div className="my-10 lg:my-20 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-3 gap-6 h-auto xl:w-[600px] xl:h-[300px] sm:w-[350px] sm:h-[250px] block mx-auto">
          {/* First Doctor */}
          <div className="text-center sm:w-full lg:w-auto ">
            <div className="border-b-slate-100 border-[12px] mb-10 lg:h-auto">
              <Image 
                src="/doctor1.png" 
                alt="Doctor 1" 
                width={250}  // Adjusted size for tablet view
                height={250} // Adjusted size for tablet view
                layout="responsive"
                className="w-full h-auto object-cover"
              />
              <div className="bg-gray-200 py-2">
                <h1 className="text-sm sm:text-base lg:text-xl font-extrabold text-black">
                  Dr. Dane Smith
                </h1>
                <h3 className="text-xs sm:text-sm font-normal text-black">
                  Pharmacy Manager
                </h3>
              </div>
            </div>
          </div>
  
          {/* Second Doctor */}
          <div className="text-center sm:w-full lg:w-auto">
            <div className="border-b-slate-100 border-[12px] mb-10">
              <Image 
                src="/doctor1.png" 
                alt="Doctor 2" 
                width={250}  // Adjusted size for tablet view
                height={250} // Adjusted size for tablet view
                layout="responsive"
                className="w-full h-auto object-cover"
              />
              <div className="bg-gray-200 py-2">
                <h1 className="text-sm   sm:text-base lg:text-xl  font-extrabold text-black">
                  Dr. Dane Smith
                </h1>
                <h3 className="text-xs sm:text-sm font-normal text-black">
                  Pharmacy Manager
                </h3>
              </div>
            </div>
          </div>
  
          {/* Third Doctor */}
          <div className="text-center sm:w-full lg:w-auto">
            <div className="border-b-slate-100 border-[12px] mb-10">
              <Image 
                src="/doctor1.png" 
                alt="Doctor 3" 
                width={250}  // Adjusted size for tablet view
                height={250} // Adjusted size for tablet view
                layout="responsive"
                className="w-full h-auto object-cover"
              />
              <div className="bg-gray-200 py-2">
                <h1 className="text-sm  sm:text-base lg:text-xl  font-extrabold text-black">
                  Dr. Dane Smith
                </h1>
                <h3 className="text-xs sm:text-sm font-normal text-black">
                  Pharmacy Manager
                </h3>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>
  
  
  
  );
};

export default QualifiedTeamAboutPage;