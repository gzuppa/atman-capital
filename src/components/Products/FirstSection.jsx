import { Stack } from "@mui/material"
import { NavLink } from "react-router-dom"

const FirstSection = () => {
  return (
    <div class="py-10 bg-gradient-to-tr bg-gray-50 dark:bg-gray-800 flex justify-center items-center font-montserrat" data-aos="fade-down">
        <Stack>
            <Stack alignItems={'center'}>
                <h1 class="mt-4 text-gray-900 dark:text-white text-3xl font-bold text-center">Portafolio de productos y servicios financieros</h1>
                <div class="lg:px-40">
                    <p class="mt-4 mb-12 text-center text-gray-900 dark:text-white text-md">El objetivo de ATMAN es convertirse en el líder del sector Fintech a través del portafolio de servicios y productos financieros digitales que permita maximizar el volumen de negocios y su rentabilidad.</p>
                </div>
            </Stack>
            <Stack>
                <div class="md:px-4 md:grid md:grid-cols-1 lg:grid-cols-4 lg:px-20 gap-5 space-y-">
                    <div class="bg-white px-12 lg:px-6 pt-6 lg:pt-10 pb-6 lg:pb-0 mb-8 lg:mb-0 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                        <div class="relative">
                            <img class="w-full h-80 rounded-xl" src="https://res.cloudinary.com/gusironhack/image/upload/v1730138179/Atman/products1.png" alt="Colors" />
                        </div>
                        <h1 class="mt-4 text-gray-800 text-xl font-bold cursor-pointer text-center">Créditos<br></br><br/></h1>
                        <div class="my-4">
                            <NavLink to={"/productos/creditos"}><button class="mt-4 text-sm w-full text-white bg-principalAmber py-2 rounded-xl shadow-lg">Conoce más</button></NavLink>
                        </div> 
                    </div>
                    <div class="bg-white px-12 lg:px-6 pt-6 lg:pt-10 pb-6 lg:pb-0 mb-8 lg:mb-0 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                        <div class="relative">
                            <img class="w-full h-80 rounded-xl" src="https://res.cloudinary.com/gusironhack/image/upload/v1730138175/Atman/products4.jpg" alt="Colors" />
                        </div>
                        <h1 class="mt-4 text-gray-800 text-xl font-bold cursor-pointer text-center">Consultoría y asesoría financiera</h1>
                        <div class="my-4">
                            <NavLink to={"/productos/consultoria"}><button class="mt-4 text-sm w-full text-white bg-principalAmber py-2 rounded-xl shadow-lg">Conoce más</button></NavLink>
                        </div> 
                    </div>
                    <div class="bg-white px-12 lg:px-6 pt-6 lg:pt-10 pb-6 lg:pb-0 mb-8 lg:mb-0 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                        <div class="relative">
                            <img class="w-full h-80 rounded-xl" src="https://res.cloudinary.com/gusironhack/image/upload/v1730138175/Atman/product2.png" alt="Colors" />
                        </div>
                        <h1 class="mt-4 text-gray-800 text-xl font-bold cursor-pointer text-center">ATMAN Pay<br></br><br/></h1>
                        <div class="my-4">
                            <NavLink to={"/productos/atman-pay"}><button class="mt-4 text-sm w-full text-white bg-principalAmber py-2 rounded-xl shadow-lg">Conoce más</button></NavLink>
                        </div>
                    </div>
                    <div class="bg-white px-12 lg:px-6 pt-6 lg:pt-10 pb-6 lg:pb-0 mb-8 lg:mb-0 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                        <div class="relative">
                            <img class="w-full h-80 rounded-xl" src="https://res.cloudinary.com/gusironhack/image/upload/v1730138171/Atman/products3.jpg" alt="Colors" />
                        </div>
                        <h1 class="mt-4 text-gray-800 text-xl font-bold cursor-pointer text-center">Tarjeta de crédito<br></br><br/></h1>
                        <div class="my-4">
                            <NavLink to={"/productos/tarjeta"}><button class="mt-4 text-sm w-full text-white bg-principalAmber py-2 rounded-xl shadow-lg">Conoce más</button></NavLink>
                        </div>
                    </div>
                </div>
            </Stack>
        </Stack>
    </div>
  )
}

export default FirstSection