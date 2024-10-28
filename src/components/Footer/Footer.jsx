import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FooterLinks = [
  {
    title: "Aviso de privacidad",
    link: "/aviso",
  },
  {
    title: "Términos y condiciones",
    link: "/terminos",
  },
];
// const HelpLinks = [
//   {
//     title: "Customer Support",
//     link: "/#support",
//   },
//   {
//     title: "Delivery Details",
//     link: "/#delivery-details",
//   },
//   {
//     title: "Terms & Conditions",
//     link: "/terminos",
//   },
//   {
//     title: "Privacy Policy",
//     link: "/#policy",
//   },
// ];
// const ResourcesLinks = [
//   {
//     title: "Free Ebooks",
//     link: "/#ebooks",
//   },
//   {
//     title: "How To Blog",
//     link: "/#blogs",
//   },
//   {
//     title: "Subscribe TCJ",
//     link: "https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1",
//   },
// ];

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10 font-montserrat">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
            © 2023 Atman Capital
            </h1>
            <p className="text-sm">
              Blvd. Manuel Ávila Camacho 40, Lomas de Chapultepec III Secc, Miguel Hidlgo, 11000, CDMX{" "}
            </p>
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.instagram.com/atman_credit/">
                <FaInstagram className="text-2xl hover:text-principalAmber duration-300" />
              </a>
              <a href="https://www.facebook.com/people/Atman-Credit/61567102081598">
                <FaFacebook className="text-2xl hover:text-principalAmber duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-principalAmber duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Enlaces
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-principalAmber space-x-1 text-gray-400 "
                    >
                      <NavLink to={link.link} className="text-md font-medium hover:text-primary py-2 hover:border-primary transition-colors duration-500">{link.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="flex flex-col gap-3 items-center justify-center">
              {/* <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Help
                </h1>
                <ul className="flex flex-col gap-3">
                  {HelpLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
              <img class="w-20 mb-4 rounded-lg lg:mb-0 lg:flex animate-fade-up animate-once animate-duration-[3000ms] animate-ease-linear" src="../src/assets/website/buro.png" alt="cellphone"/>
            </div>
            {/* <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  {ResourcesLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
