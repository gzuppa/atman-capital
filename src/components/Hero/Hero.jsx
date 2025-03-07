import React from "react";
import { Stack } from "@mui/system";

const Hero = () => {
  return (
    <div class="min-h-screen flex justify-center items-center bg-hero bg-fixed bg-no-repeat bg-cover bg-center">
      <Stack spacing={2}>
        <h1 class="font-montserrat text-6xl text-white font-bold text-center">
          GARC
        </h1>
        <h1 class="font-montserrat text-2xl text-white text-center">
          Financial services
        </h1>
        <a
          href="/quienes-somos"
          class="dark:brightness-100 group hover:shadow-lg hover:shadow-gray-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-600"
        >
          <div class="px-6 py-2 backdrop-blur-xl bg-black/80 rounded-xl font-medium font-montserrat w-full h-full">
            <div class="group-hover:scale-100 flex justify-center group-hover:text-gray-500 text-gray-300 gap-1">
              <svg
                class="w-6 h-6 stroke-gray-300 group-hover:stroke-gray-500 group-hover:stroke-{1.99}"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z" />
              </svg>
              <p>Más información</p>
            </div>
          </div>
        </a>
      </Stack>
    </div>
  );
};

export default Hero;
