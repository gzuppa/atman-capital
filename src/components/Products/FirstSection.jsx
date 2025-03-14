import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

const FirstSection = () => {
  const ProductItem = ({ imgUrl, title, link }) => {
    return (
      <div class="bg-white px-12 lg:px-6 pt-6 lg:pt-10 pb-6 lg:pb-0 mb-8 lg:mb-0 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <div class="relative">
          <img
            class="w-full h-80 rounded-xl object-cover"
            src={imgUrl}
            alt="Colors"
          />
        </div>
        <h1 class="mt-4 text-gray-800 text-md font-bold cursor-pointer text-center">
          {title}
          <br></br>
          <br />
        </h1>
        <div class="my-4">
          <NavLink to={link}>
            <button class="mt-4 text-sm w-full text-white dark:brightness-100 hover:shadow-lg hover:shadow-gray-700/60 hover:scale-105 rounded-xl bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-600 transition ease-in-out py-2 rounded-xl shadow-lg">
              Conoce más
            </button>
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div
      class="py-10 bg-gradient-to-tr bg-gray-50 dark:bg-gray-800 flex justify-center items-center font-montserrat"
      data-aos="fade-down"
    >
      <Stack>
        <Stack alignItems={"center"}>
          <h1 class="mt-4 text-gray-900 dark:text-white text-3xl font-bold text-center">
            Portafolio de productos y servicios financieros
          </h1>
          <div class="lg:px-40">
            <p class="mt-4 mb-12 text-center text-gray-900 dark:text-white text-md">
              El objetivo de GARC es convertirse en el líder del sector Fintech
              a través del portafolio de servicios y productos financieros
              digitales que permita maximizar el volumen de negocios y su
              rentabilidad.
            </p>
          </div>
        </Stack>
        <Stack>
          <div class="md:px-4 md:grid md:grid-cols-1 lg:grid-cols-3 lg:px-60 gap-5 space-y-">
            <ProductItem
              imgUrl="https://res.cloudinary.com/gusironhack/image/upload/v1730138179/Atman/products1.png"
              title="Créditos"
              link="/productos/creditos"
            />
            <ProductItem
              imgUrl="https://res.cloudinary.com/gusironhack/image/upload/v1730138175/Atman/products4.jpg"
              title="Consultoría y asesoría financiera"
              link="/productos/consultoria"
            />
            <ProductItem
              imgUrl="https://res.cloudinary.com/gusironhack/image/upload/v1741225366/moneyexchange_ramqap.jpg"
              title="Money Exchange"
              link="/productos/garc-pay"
            />
            <ProductItem
              imgUrl="https://res.cloudinary.com/gusironhack/image/upload/v1730138175/Atman/product2.png"
              title="GARC Pay"
              link="/productos/garc-pay"
            />
            <ProductItem
              imgUrl="https://res.cloudinary.com/gusironhack/image/upload/v1730138171/Atman/products3.jpg"
              title="GARC Credit card"
              link="/productos/tarjeta"
            />
            <ProductItem
              imgUrl="https://res.cloudinary.com/gusironhack/image/upload/v1741744832/carlease_cakc46.jpg"
              title="Leasing & Factoring"
              link="/productos/leasing"
            />
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

export default FirstSection;
