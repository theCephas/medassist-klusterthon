import { GoChevronDown } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import FooterLogo from "../assets/medassist.svg";

function Footer() {
  return (
    <section className="py-16 bg-white border-t border-primary">
      <div className="container px-4 mx-auto lg:max-w-[1140px] flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
        <div className="mb-0">
          <img src={FooterLogo} alt="MedAssist Logo" />

          <ul className="inline-flex flex-col gap-5 mt-5 sm:flex-row">
            <li className="text-[#7C7C7C] cursor-pointer hover:text-primary duration-300">
              About
            </li>
            <li className="flex gap-1 text-[#7C7C7C] cursor-pointer hover:text-primary duration-300">
              Product Overview <GoChevronDown className="w-6 h-6 fill-font" />
            </li>
            <li className="text-[#7C7C7C] cursor-pointer hover:text-primary duration-300">
              Customer Support
            </li>
            <li className="text-[#7C7C7C] cursor-pointer hover:text-primary duration-300">
              FAQs
            </li>
            <li className="text-[#7C7C7C] cursor-pointer hover:text-primary duration-300">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="mt-8 lg:w-2/5 lg:mt-0">
          <form id="newsletter">
            <div className="relative">
              <label
                htmlFor="subscribe"
                className="text-font font-semibold mb-2 inline-block"
              >
                Subscribe to our newsletter
              </label>
              <input
                type="email"
                name="newsletter"
                id="newsletter"
                placeholder="Email address"
                className="py-3 px-5 w-full border border-[#C7C7C7] rounded-md placeholder:text-sm placeholder:text-[#C7C7C7] focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-primary flex justify-center items-center w-16 h-[50px] rounded-xl absolute right-0 bottom-0 cursor-pointer"
              >
                <GoChevronRight className="fill-white w-6 h-6" />
              </button>
            </div>
          </form>
        </div>

        <div className="w-full mt-10 pt-8 border-[#E4E7EC] border-t sm:flex sm:flex-row sm:justify-between sm:items-center lg:mt-16 lg:pt-10">
          <div className="flex gap-4">
            <span className="w-10 h-10 flex justify-center items-center rounded-full bg-[#1877F2]">
              <BsFacebook className="fill-white w-6 h-6" />
            </span>
            <span className="w-10 h-10 flex justify-center items-center rounded-full bg-[#1DA1F2]">
              <FaTwitter className="fill-white w-6 h-6" />
            </span>
            <span className="w-10 h-10 flex justify-center items-center rounded-full bg-[#F00073]">
              <FaInstagram className="fill-white w-6 h-6" />
            </span>
            <span className="w-10 h-10 flex justify-center items-center rounded-full bg-[#2867B2]">
              <FaLinkedinIn className="fill-white w-6 h-6" />
            </span>
          </div>

          <ul className="flex gap-5 mt-8 sm:mt-0">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
