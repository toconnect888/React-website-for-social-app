import { Link } from "@remix-run/react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col bg-black ">
      <div className="flex flex-col lg:flex-row justify-center items-center px-5 py-8 md:px-10 md:py-16 lg:px-20 lg:py-32 gap-4">
        <div className="basis-1/2 flex flex-col gap-12">
          <div className="flex flex-row justify-start items-center gap-10">
            <Link to="/">
              <img
                src="/black_logo.png"
                alt="Site Logo"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <div className="flex flex-row justify-center items-center">
              <Link className="rounded-3xl" to="">
                <div className="border-black border-solid border-2 rounded-3xl px-4 py-3 bg-yellowBackground">
                  <p className="font-bold text-black text-center whitespace-nowrap">
                    Join Now!
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-8">
            <Link to="/about">
              <p className="font-bold text-lg text-white text-center text-white-stroke drop-shadow-lg whitespace-nowrap">
                About Us
              </p>
            </Link>
            <Link to="/blogs">
              <p className="font-bold text-lg text-white text-center text-white-stroke drop-shadow-lg whitespace-nowrap">
                Blogs
              </p>
            </Link>
            <Link to="/contact">
              <p className="font-bold text-lg text-white text-center text-white-stroke drop-shadow-lg whitespace-nowrap">
                Contact Us
              </p>
            </Link>
            <Link to="/sign-in">
              <p className="font-bold text-lg text-white text-center text-white-stroke drop-shadow-lg whitespace-nowrap">
                Sign In
              </p>
            </Link>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col py-4 justify-center items-center gap-4">
          <div className="basis-1/2 flex flex-row gap-8">
            <Link to="">
              <img
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on the App Store"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <Link to="">
              <img
                src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                alt="Download on the Google Play Store"
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>
          <p className="basis-1/2 text-white text-center lg:px-24 xl:px-44">
            Apple and the Apple Logo are trademarks of Apple Inc. Google Play
            and the Google Play logo are trademarks of Google LLC.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center border-t-gray-500 border-t-2 border-solid px-20 py-2 gap-2">
        <p className="font-semibold text-white whitespace-nowrap">
          &copy; {year} CHENS GROUP INC, ALL RIGHTS RESERVED
        </p>
        <div className="flex flex-row justify-center items-center gap-4">
          <Link to="">
            <FaFacebook className="rounded-full text-4xl text-white" />
          </Link>
          <Link to="">
            <FaInstagramSquare className="rounded-full text-4xl text-white" />
          </Link>
          <Link to="">
            <FaYoutubeSquare className="rounded-full text-4xl text-white" />
          </Link>
          <Link to="">
            <FaTwitterSquare className="rounded-full text-4xl text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
