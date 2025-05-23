import React from "react";

const Banner = () => {
  return (
    <section
      class="bg-white dark:bg-gray-900 font-montserrat"
      data-aos="fade-up"
    >
      <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div class="mr-auto place-self-center lg:col-span-7 ">
          <img
            class="w-64 rounded-lg lg:mb-0 lg:flex"
            src="https://res.cloudinary.com/gusironhack/image/upload/v1741129083/garcNoLogo_oujxgp.png"
            alt="feature image 2"
          />
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Somos una sociedad financiera enfocada en revolucionar el mercado de
            servicios financieros digitales en México. Nos enfocamos en ofrecer
            productos y servicios innovadores que permitan a nuestros clientes
            acceder a soluciones financieras a través de una plataforma
            tecnológica de punta transaccional y de fácil acceso y uso.
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://res.cloudinary.com/gusironhack/image/upload/v1730137943/Atman/whoweare.png"
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
