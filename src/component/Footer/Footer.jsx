import React from "react";
import SebscribeSection from "./SebscribeSection";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: "url('/productIcon/FooterImg12.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <footer
          className="rounded-t-lg container border-2 border-solid mt-24 mx-auto text-center border-transparent text-neutral-600 dark:text-neutral-200 lg:text-left"
          style={{
            position: "relative",
            width: "100%",
            color: "#fff",
          }}
        >
          <SebscribeSection />
          {/* Social network icons container */}
          <div className="flex items-center justify-between border-b-2 border-hoverUnderlineColor p-6">
            {/* Left text */}

            <div className="mr-12 hidden lg:block">
              <span className="text-white">
                Get connected with us on social networks:
              </span>
            </div>

            {/* Social icons aligned to the right */}
            <div className="flex justify-end space-x-4 w-auto">
              <img src="/insta-icon.png" alt="Instagram" className="w-6 h-6" />
              <img
                src="/facebook-icon.png"
                alt="Facebook"
                className="w-6 h-6"
              />
              <img src="/twitter.icon.png" alt="Twitter" className="w-6 h-6" />
            </div>
          </div>

          {/* Main container div: holds the footer content */}
          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-white">
            {/* Responsive Section */}
<div className="text-center md:text-left px-1 md:px-0 lg:px-0 h-auto overflow-hidden">
  <Link
    href="/"
    className="flex justify-center md:justify-start items-center space-x-0 ml-0 "
  >
    <img
  src="/footerLogo.png"
  className="w-28 sm:w-30 md:w-36 lg:w-44 xl:w-56"
  alt="Responsive Logo"
/>

  </Link>
  <p className="mt-3 sm:mt-3 md:mt-0 text-sm sm:text-base md:text-lg lg:text-base text-white leading-relaxed">
    Here you can use rows and columns to organize your footer content. Lorem
    ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</div>


              {/* Popular Treatments section */}
              <div>
                <h6 className="mb-4 text-center md:text-left font-semibold uppercase">
                  Popular Treatments
                </h6>
                <ul className="space-y-4">
                  <li className="flex">
                    <img
                      src="/productIcon/dysFunction1.png"
                      alt=""
                      className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2"
                    />
                    <a className="text-white dark:text-neutral-200">
                      Erectile Dysfunction
                    </a>
                  </li>
                  <li className="flex">
                    <img
                      src="/productIcon/weightLoss.png"
                      alt=""
                      className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2"
                    />
                    <a className="text-white dark:text-neutral-200">
                      Weight Loss
                    </a>
                  </li>
                  <li className="flex">
                    <img
                      src="/productIcon/hairLoss.png"
                      alt=""
                      className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2"
                    />
                    <a className="text-white dark:text-neutral-200">
                      Hair Loss
                    </a>
                  </li>
                  <li className="flex">
                    <img
                      src="/productIcon/sexual.png"
                      alt=""
                      className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2"
                    />
                    <a className="text-white dark:text-neutral-200">
                      Sexual Health
                    </a>
                  </li>
                </ul>
              </div>

              {/* Learn More section */}
              <div>
                <h6 className="mb-4 text-center md:text-left font-semibold uppercase">
                  Learn More
                </h6>
                <ul className="space-y-4">
                  <li>
                    <a className="text-white dark:text-neutral-200">
                      How it Works
                    </a>
                  </li>
                  <li>
                    <a className="text-white dark:text-neutral-200">About Us</a>
                  </li>
                  <li>
                    <a className="text-white dark:text-neutral-200">
                      Health Hub
                    </a>
                  </li>
                  <li>
                    <a className="text-white dark:text-neutral-200">
                      Work for Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact section */}
              <div>
                <h6 className="mb-4 text-center md:text-left font-semibold uppercase">
                  Get In Touch
                </h6>
                <ul className="space-y-4">
                  <li className="flex items-center justify-center md:justify-start">
                    <img
                      src="/phone-icon.png"
                      className="w-5 h-5 mr-2"
                      alt="Phone"
                    />
                    <a className="text-white dark:text-neutral-200">
                      Phone: +92323471232
                    </a>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <img
                      src="/email-icon.png"
                      className="w-5 h-5 mr-2"
                      alt="Email"
                    />
                    <a className="text-white dark:text-neutral-200">
                      Email: 123@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <img src="/sms.png" className="w-5 h-5 mr-2" alt="SMS" />
                    <a className="text-white dark:text-neutral-200">
                      Text(SMS): 8818
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="bg-transparent p-6 text-center dark:bg-neutral-700">
            <span className="text-white">© 2023 Copyright:</span>
            <a
              className="font-semibold text-hoverUnderlineColor dark:text-hoverUnderlineColor"
              href="https://tw-elements.com/"
            >
              ifeelshy
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
