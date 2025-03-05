import React from "react";

const SecondSection = () => {
  return (
    <section
      class="bg-gray-50 dark:bg-gray-800 font-montserrat"
      data-aos="fade-down"
    >
      <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            class="hidden w-128 rounded-lg lg:mb-0 lg:flex"
            src="https://res.cloudinary.com/gusironhack/image/upload/v1741122521/garcLogo_qbfil8.png"
            alt="feature image 2"
          />
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Fortalece el alma de tu desarrollo
            </h2>
            <p class="mb-8 font-light lg:text-xl">
              Nuestra sociedad, fundada en 2022, tiene como objetivo brindar
              servicios financieros / cuentas / liquidaciones a un creciente
              número de usuarios que requieren de servicios financieros ágiles y
              de un costo competitivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
