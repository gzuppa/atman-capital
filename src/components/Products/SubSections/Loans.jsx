import { useIsVisible } from "../../../utils/useIsVisible";
import { Stack } from "@mui/material"
import "./index.css"; 
import { useRef } from 'react';

const Loans = () => {

    // const ref1 = useRef();
    // const isVisible1 = useIsVisible(ref1);
    // const ref2 = useRef();
    // const isVisible2 = useIsVisible(ref2);
    // const ref3 = useRef();
    // const isVisible3 = useIsVisible(ref3);
    // const ref4 = useRef();
    // const isVisible4 = useIsVisible(ref3);
    // const ref5 = useRef();
    // const isVisible5 = useIsVisible(ref3);
    // const ref6 = useRef();
    // const isVisible6 = useIsVisible(ref3);

    return (
        <Stack class="font-montserrat">
            <Stack class="bg-gray-50 dark:bg-gray-900 text-center px-2 lg:px-0">
                <h1 class="pt-10 text-gray-900 dark:text-white text-5xl font-bold pb-6 lg:pb-0">Obten el crédito que necesitas</h1>
                <div class="lg:px-40">
                    <p class="mt-4 text-center text-gray-900 dark:text-white text-md">Ofrecemos créditos con descuento vía nómina o domiciliación bancaria a empleados que laboren en una Empresa o Dependencia Gubernamental y/o Privada</p>
                </div>
            </Stack>
            <Stack>
                {/* <section class="bg-gray-50 dark:bg-gray-800" data-aos="fade-up">
                    <div class="max-w-screen-xl px-4 mx-auto space-y-12 lg:space-y-20 lg:py-12 lg:px-6">
                        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                            <div class="text-gray-500 sm:text-lg dark:text-gray-400 px-4 lg:px-0">
                                <h2 class="animate-fade-left mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Obtén el crédito que necesitas</h2>
                                <p class="animate-fade-left mb-8 font-light lg:text-xl">Ahora puedes acceder a un crédito por descuento vía nómina para personas físicas, entre ellas, las que trabajan en el sector gubernamental ¡sin complicaciones!</p>
                                <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-principalAmber dark:text-principalAmber" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="animate-fade-left text-base font-medium leading-tight text-gray-900 dark:text-white">¡Disfruta de $2,000.00 hasta $350,000.00!</span>
                                    </li>
                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-principalAmber dark:text-principalAmber" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="animate-fade-left text-base font-medium leading-tight text-gray-900 dark:text-white">Elige el plazo para pagarlo que más te convenga: 12, 18, 24, 36, 48 o  hasta 60 meses.</span>
                                    </li>
                                </ul>
                            </div>
                            <img class=" w-full mb-4 rounded-lg lg:mb-0 lg:flex animate-fade-up animate-once animate-duration-[3000ms] animate-ease-linear" src="https://res.cloudinary.com/gusironhack/image/upload/v1730137990/Atman/iphone-nobg.png" alt="cellphone"/>
                        </div>
                    </div>
                </section>

                <section class="bg-gray-50 dark:bg-gray-800" data-aos="fade-up">
                    <div class="max-w-screen-xl px-4 mx-auto space-y-12 lg:space-y-20 lg:py-12 lg:px-6">
                        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <img class=" w-full mb-4 rounded-lg lg:mb-0 lg:flex animate-fade-up animate-once animate-duration-[3000ms] animate-ease-linear" src="https://res.cloudinary.com/gusironhack/image/upload/v1730137990/Atman/iphone-nobg.png" alt="cellphone"/>
                            <div class="text-gray-500 sm:text-lg dark:text-gray-400 px-4 lg:px-0">
                                <h2 class="animate-fade-left mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Nuestros créditos son la solución perfecta para tus necesidades financieras.</h2>
                                <p class="animate-fade-left mb-8 font-light lg:text-xl">Con una tasa de interés fija del 3% o hasta el 4%, nuestros créditos son accesibles y fáciles de pagar. Además, no requieres aval ni garantías para obtener el préstamo que necesitas. (CAT).</p>
                                <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-principalAmber dark:text-principalAmber" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="animate-fade-left text-base font-medium leading-tight text-gray-900 dark:text-white">En ATMAN Credit no encontrarás comisiones ocultas ni sorpresas desagradables.</span>
                                    </li>
                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-principalAmber dark:text-principalAmber" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="animate-fade-left text-base font-medium leading-tight text-gray-900 dark:text-white">Te ofrecemos un proceso transparente y sin letra chica para que puedas tomar la mejor decisión para tu economía. Además, ¡no consultamos tu buró!, por lo que no importa si tienes algún antecedente crediticio. Confiamos en tu capacidad de pago y en tu compromiso para liquidar tu crédito en tiempo y forma.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-white dark:bg-gray-900 font-montserrat" data-aos="fade-up">
                    <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                        <div class="col-span-2 mb-8 px-4 lg:px-0">
                            <p class="animate-fade-right animate-once text-lg font-medium text-principalAmber dark:text-principalAmber">Transparencia y confianza</p>
                            <h2 class="animate-fade-right mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">Trámite sencillo con requisitos mínimos.</h2>
                            <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-principalAmber dark:text-principalAmber" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="animate-fade-left text-base font-medium leading-tight text-gray-900 dark:text-white">Tasa fija del 36% al 48%.</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-principalAmber dark:text-principalAmber" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="animate-fade-left text-base font-medium leading-tight text-gray-900 dark:text-white">Plazos de 12, 18, 24, 36, 48 y 60 meses.</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-principalAmber dark:text-principalAmber" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="animate-fade-left text-base font-medium leading-tight text-gray-900 dark:text-white">Préstamos de $2,000 a $250,000.</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-principalAmber dark:text-principalAmber" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="animate-fade-left text-base font-medium leading-tight text-gray-900 dark:text-white">Pagos fijos.</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                            <div>
                                <svg fill="#d2a663" width="50px" height="50px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M196,112a4.0002,4.0002,0,0,1-4,4H152a4,4,0,0,1,0-8h40A4.0002,4.0002,0,0,1,196,112Zm-4,28H152a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8Zm-65.03467,27a3.99992,3.99992,0,0,1-7.74707,1.99512,28.01047,28.01047,0,0,0-54.23584.00146,3.9998,3.9998,0,1,1-7.74707-1.99414,35.93915,35.93915,0,0,1,19.54688-23.58179,27.99991,27.99991,0,1,1,30.63672.00013A35.94048,35.94048,0,0,1,126.96533,167ZM92.10059,140a20,20,0,1,0-20-20A20.02292,20.02292,0,0,0,92.10059,140ZM228,56V200a12.01375,12.01375,0,0,1-12,12H40a12.01375,12.01375,0,0,1-12-12V56A12.01375,12.01375,0,0,1,40,44H216A12.01375,12.01375,0,0,1,228,56Zm-8,0a4.00458,4.00458,0,0,0-4-4H40a4.00458,4.00458,0,0,0-4,4V200a4.00458,4.00458,0,0,0,4,4H216a4.00458,4.00458,0,0,0,4-4Z"></path> </g></svg>
                                <h3 class="animate-fade-down mb-2 text-2lg dark:text-white">Identificación personal vigente</h3>
                            </div>
                            <div>
                                <svg fill="#d2a663" width="50px" height="50px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M212.826 645.495c98.432 0 171.947-37.76 171.947-71.509v-55.595c-38.059 27.435-99.584 44.715-171.947 44.715s-133.931-17.28-171.947-44.715v55.595c0 33.749 73.515 71.509 171.947 71.509zm0 122.582c98.432 0 171.947-37.76 171.947-71.509v-54.912c-38.059 27.435-99.584 44.715-171.947 44.715s-133.931-17.28-171.947-44.715v54.912c0 33.749 73.515 71.509 171.947 71.509zm171.946 53.12h.085c0-.213-.085-.469-.085-.64v-56.32c-38.059 27.477-99.584 44.715-171.947 44.715S78.894 791.715 40.878 764.237v56.96c0 33.749 73.515 71.509 171.947 71.509s171.947-37.76 171.947-71.509zM212.826 379.213c-98.432 0-171.947 37.76-171.947 71.509 0 33.792 73.515 71.509 171.947 71.509s171.947-37.717 171.947-71.509c0-33.749-73.515-71.509-171.947-71.509zm0-40.832c121.301 0 212.821 48.299 212.821 112.341v369.835c0 .171-.085.427-.085.64h.085c0 64.085-91.52 112.384-212.821 112.384-115.755 0-204.16-43.989-212.053-103.723-.427-1.664-.768-3.413-.768-5.248V450.722c0-64.043 91.477-112.341 212.821-112.341zM949.756 128c39.424 0 71.509 32.085 71.509 71.509V862.08c0 39.424-32.085 71.509-71.509 71.509H545.105c-39.424 0-71.509-32.085-71.509-71.509V199.509c0-39.424 32.085-71.509 71.509-71.509h404.651zm30.634 734.08V199.509c0-16.896-13.739-30.677-30.635-30.677H545.104c-16.896 0-30.635 13.781-30.635 30.677V862.08c0 16.896 13.739 30.635 30.635 30.635h404.651c16.896 0 30.635-13.739 30.635-30.635zm-79.867-594.573c16.853 0 30.635 13.739 30.635 30.635v80.939c0 16.896-13.781 30.635-30.635 30.635H594.347c-16.896 0-30.677-13.739-30.677-30.635v-80.939c0-16.896 13.781-30.635 30.677-30.635h306.176zM604.544 368.841h285.781V308.34H604.544v60.501zm13.367 114.803c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.792-33.792 33.792s-33.792-15.147-33.792-33.792c0-18.688 15.147-33.792 33.792-33.792zm129.519 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.792-33.792 33.792s-33.792-15.147-33.792-33.792c0-18.688 15.147-33.792 33.792-33.792zm129.502-2.812c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.792-33.792 33.792s-33.792-15.147-33.792-33.792c0-18.688 15.147-33.792 33.792-33.792zM617.911 604.727c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zm129.519 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zm129.502 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zM617.911 728.602c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zm129.519 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zm129.502 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792z"></path></g></svg>
                                <h3 class="animate-fade-down mb-2 text-2lg dark:text-white">Registro Federal de Contribuyentes</h3>
                            </div>
                            <div>
                                <svg fill="#d2a663" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 480" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M399.67,60.827h-35.62V10c0-5.523-4.478-10-10-10c-5.522,0-10,4.477-10,10v50.827H135.951V10c0-5.523-4.478-10-10-10 c-5.522,0-10,4.477-10,10v50.827H80.33c-5.522,0-10,4.477-10,10V470c0,5.523,4.478,10,10,10h319.34c5.523,0,10-4.477,10-10 V70.827C409.67,65.304,405.192,60.827,399.67,60.827z M90.33,460V80.827h299.34V460H90.33z"></path> <path d="M354.05,383.967H141.157c-5.522,0-10,4.477-10,10s4.478,10,10,10H354.05c5.522,0,10-4.477,10-10 S359.572,383.967,354.05,383.967z"></path> <path d="M308.43,414.38H186.777c-5.522,0-10,4.477-10,10s4.478,10,10,10H308.43c5.522,0,10-4.477,10-10 S313.952,414.38,308.43,414.38z"></path> <path d="M323.636,358.347h30.413c5.522,0,10-4.477,10-10V116.446c0-5.523-4.478-10-10-10H125.951c-5.522,0-10,4.477-10,10 v231.901c0,5.523,4.478,10,10,10h30.412H323.636z M227.127,338.348h-60.764v-19.543c0-14.776,8.854-31.789,23.685-45.509 c8.739-8.086,18.628-14.227,28.459-17.917c0.796,0.204,1.626,0.324,2.485,0.324h6.135V338.348z M313.637,338.347h-66.51v-82.645 h11.881c0.161,0,0.318-0.017,0.478-0.024c10.022,3.776,20.218,9.902,29.131,17.773c15.666,13.832,25.02,30.787,25.02,45.353 V338.347z M344.05,126.445v211.902h-10.413v-19.543c0-34.153-30.871-66.784-63.918-80.538 c19.764-10.752,33.207-31.705,33.207-55.739c0-24.294-13.735-45.432-33.842-56.082H344.05z M282.926,182.528 c0,23.936-19.48,43.409-43.423,43.409c-23.932-0.001-43.401-19.474-43.401-43.409c0-23.946,19.47-43.427,43.401-43.427 C263.446,139.101,282.926,158.582,282.926,182.528z M146.362,338.348H135.95V126.446h0.001h73.98 c-20.1,10.65-33.83,31.787-33.83,56.082c0,23.733,13.113,44.451,32.466,55.319c-11.295,4.677-22.367,11.762-32.102,20.768 c-19.131,17.699-30.103,39.637-30.103,60.19V338.348z"></path> </g> </g> </g> </g></svg>
                                <h3 class="animate-fade-down mb-2 text-2lg dark:text-white">CURP</h3>
                            </div>
                            <div>
                                <svg fill="#d2a663" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" width="50px" height="50px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon points="306.115,102.283 295.289,91.456 259.924,126.822 259.924,0 244.611,0 244.611,126.822 209.246,91.456 198.419,102.283 252.268,156.131 "></polygon> <rect x="61.25" y="362.401" width="219.085" height="15.313"></rect> <rect x="61.25" y="406.589" width="82.918" height="15.313"></rect> <path d="M451.554,169.275H38.461C17.257,169.275,0,186.516,0,207.721v243.833C0,472.759,17.257,490,38.461,490h413.093 C472.758,490,490,472.759,490,451.554V207.721C490,186.516,472.758,169.275,451.554,169.275z M38.461,184.587h413.093 c12.755,0,23.133,10.378,23.133,23.133v24.688H15.312v-24.688C15.312,194.965,25.69,184.587,38.461,184.587z M474.687,247.722 v51.68H15.312v-51.68H474.687z M451.554,474.687H38.461c-12.771,0-23.148-10.378-23.148-23.133v-136.84h459.375v136.84 C474.687,464.31,464.31,474.687,451.554,474.687z"></path> </g> </g></svg>
                                <h3 class="animate-fade-down mb-2 text-2lg dark:text-white">Solicitud de crédito</h3>
                            </div>
                            <div>
                                <svg fill="#d2a663" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M498.665,213.084l-51.215-40.182V20.539c0-8.103-5.836-14.67-13.937-14.67h-58.682c-8.101,0-15.404,6.568-15.404,14.67 v83.3l-93.778-73.864c-5.314-4.168-12.605-4.169-17.924-0.003L13.622,213.303C5.141,219.95,0,229.945,0,240.722v17.845 c0,19.212,16.363,34.842,35.576,34.842h23.106v198.052c0,8.102,7.303,14.67,15.404,14.67h365.295 c8.101,0,13.937-6.568,13.937-14.67V293.41h24.573c19.213,0,34.109-15.63,34.109-34.842v-18.07 C512,229.725,507.14,219.733,498.665,213.084z M388.768,35.209h29.341v114.672l-29.341-23.021V35.209z M305.146,476.791h-99.759 V316.883h99.759V476.791z M423.977,476.791h-89.49V302.212c0-8.102-5.102-14.67-13.203-14.67h-129.1 c-8.101,0-16.138,6.568-16.138,14.67v174.579H88.023V266.605l168.188-131.864l167.766,131.627V476.791z M482.659,258.567 c0,3.034-1.736,5.501-4.768,5.501h-24.573v-4.838c0-4.505-1.703-8.761-5.248-11.543L265.819,104.554 c-5.315-4.168-12.697-4.171-18.015-0.003L64.622,247.919c-3.547,2.782-5.94,7.037-5.94,11.546v4.604H35.576 c-3.032,0-6.235-2.468-6.235-5.501v-17.845c0-1.702,1.134-3.279,2.475-4.329L256.773,60.162L480.828,236.17 c1.338,1.049,1.831,2.628,1.831,4.328V258.567z"></path> </g> </g> </g></svg>
                                <h3 class="animate-fade-down mb-2 text-2lg dark:text-white">Comprobante de domicilio con una antigüedad no mayor a 3 meses</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-white dark:bg-gray-900">
                    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                        <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Nuestros convenios</h2>
                            <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Nos especializamos en el otorgamiento de créditos con descuento vía nómina a empleados de gobierno, bajo las modalidades de los tres niveles de gobierno.
</p>
                        </div>
                    </div>
                </section> */}

                <div className="bg-gray-50 dark:bg-gray-900 px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:py-12 font-montserrat text-gray-500 dark:text-gray-400">
                    <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6 font-montserrat">
                            <h2 className="text-gray-900 dark:text-white max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                            Descuento vía nómina
                            </h2>
                            <p className="text-base text-gray-500 dark:text-white md:text-lg">
                            Ahora puedes acceder a un crédito por descuento vía nómina para personas físicas, entre ellas, las que trabajan en el sector gubernamental ¡sin complicaciones!
                            </p>
                        </div>
                        <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                            Características
                        </p>
                        <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                            <ul className="space-y-3">
                            <li className="flex">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Plazos de 12 a 60 meses
                            </li>
                            <li className="flex">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Montos desde $2,000 hasta $250,000
                            </li>
                            <li className="flex">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Tasa promedio 3% sin IVA
                            </li>
                            </ul>
                            <ul className="space-y-3">
                            <li className="flex">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Sin comisiones ni aval
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:py-12 font-montserrat text-gray-500 dark:text-gray-400">
                    <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src="https://res.cloudinary.com/gusironhack/image/upload/v1730297450/office1.jpg"
                            alt=""
                        />
                        <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6 font-montserrat">
                            <h2 className="text-gray-900 dark:text-white max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                            Descuento domiciliado
                            </h2>
                            <p className="text-base text-gray-500 dark:text-white md:text-lg">
                            Te garantizamos una respuesta en máximo 24 hora
                            </p>
                        </div>
                        <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                            Características
                        </p>
                        <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                            <ul className="space-y-3">
                            <li className="flex">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Plazos de 1 a 18 meses
                            </li>
                            <li className="flex">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Montos desde $2,00 hasta $100,000
                            </li>
                            <li className="flex">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Tasa promedio 7% sin IVA
                            </li>
                            </ul>
                            <ul className="space-y-3">
                            <li className="flex">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Comisión por apertura 5% sin IVA
                            </li>
                            <li className="flex">
                                <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                                </span>
                                Firma digital
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>

                {/* <section class="bg-white dark:bg-gray-900 font-montserrat" data-aos="fade-up">
                    <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                        <div class="col-span-2 mb-8 px-4 lg:px-0">
                            <p class="animate-fade-right animate-once text-lg font-medium text-principalAmber dark:text-principalAmber">Transparencia y confianza</p>
                            <h2 class="animate-fade-right mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">Trámite sencillo con requisitos mínimos.</h2>
                        </div>
                        <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                            <div>
                                <svg fill="#d2a663" width="50px" height="50px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M196,112a4.0002,4.0002,0,0,1-4,4H152a4,4,0,0,1,0-8h40A4.0002,4.0002,0,0,1,196,112Zm-4,28H152a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8Zm-65.03467,27a3.99992,3.99992,0,0,1-7.74707,1.99512,28.01047,28.01047,0,0,0-54.23584.00146,3.9998,3.9998,0,1,1-7.74707-1.99414,35.93915,35.93915,0,0,1,19.54688-23.58179,27.99991,27.99991,0,1,1,30.63672.00013A35.94048,35.94048,0,0,1,126.96533,167ZM92.10059,140a20,20,0,1,0-20-20A20.02292,20.02292,0,0,0,92.10059,140ZM228,56V200a12.01375,12.01375,0,0,1-12,12H40a12.01375,12.01375,0,0,1-12-12V56A12.01375,12.01375,0,0,1,40,44H216A12.01375,12.01375,0,0,1,228,56Zm-8,0a4.00458,4.00458,0,0,0-4-4H40a4.00458,4.00458,0,0,0-4,4V200a4.00458,4.00458,0,0,0,4,4H216a4.00458,4.00458,0,0,0,4-4Z"></path> </g></svg>
                                <h3 class="animate-fade-down mb-2 text-2lg dark:text-white">Identificación personal vigente</h3>
                            </div>
                            <div>
                                <svg fill="#d2a663" width="50px" height="50px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M212.826 645.495c98.432 0 171.947-37.76 171.947-71.509v-55.595c-38.059 27.435-99.584 44.715-171.947 44.715s-133.931-17.28-171.947-44.715v55.595c0 33.749 73.515 71.509 171.947 71.509zm0 122.582c98.432 0 171.947-37.76 171.947-71.509v-54.912c-38.059 27.435-99.584 44.715-171.947 44.715s-133.931-17.28-171.947-44.715v54.912c0 33.749 73.515 71.509 171.947 71.509zm171.946 53.12h.085c0-.213-.085-.469-.085-.64v-56.32c-38.059 27.477-99.584 44.715-171.947 44.715S78.894 791.715 40.878 764.237v56.96c0 33.749 73.515 71.509 171.947 71.509s171.947-37.76 171.947-71.509zM212.826 379.213c-98.432 0-171.947 37.76-171.947 71.509 0 33.792 73.515 71.509 171.947 71.509s171.947-37.717 171.947-71.509c0-33.749-73.515-71.509-171.947-71.509zm0-40.832c121.301 0 212.821 48.299 212.821 112.341v369.835c0 .171-.085.427-.085.64h.085c0 64.085-91.52 112.384-212.821 112.384-115.755 0-204.16-43.989-212.053-103.723-.427-1.664-.768-3.413-.768-5.248V450.722c0-64.043 91.477-112.341 212.821-112.341zM949.756 128c39.424 0 71.509 32.085 71.509 71.509V862.08c0 39.424-32.085 71.509-71.509 71.509H545.105c-39.424 0-71.509-32.085-71.509-71.509V199.509c0-39.424 32.085-71.509 71.509-71.509h404.651zm30.634 734.08V199.509c0-16.896-13.739-30.677-30.635-30.677H545.104c-16.896 0-30.635 13.781-30.635 30.677V862.08c0 16.896 13.739 30.635 30.635 30.635h404.651c16.896 0 30.635-13.739 30.635-30.635zm-79.867-594.573c16.853 0 30.635 13.739 30.635 30.635v80.939c0 16.896-13.781 30.635-30.635 30.635H594.347c-16.896 0-30.677-13.739-30.677-30.635v-80.939c0-16.896 13.781-30.635 30.677-30.635h306.176zM604.544 368.841h285.781V308.34H604.544v60.501zm13.367 114.803c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.792-33.792 33.792s-33.792-15.147-33.792-33.792c0-18.688 15.147-33.792 33.792-33.792zm129.519 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.792-33.792 33.792s-33.792-15.147-33.792-33.792c0-18.688 15.147-33.792 33.792-33.792zm129.502-2.812c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.792-33.792 33.792s-33.792-15.147-33.792-33.792c0-18.688 15.147-33.792 33.792-33.792zM617.911 604.727c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zm129.519 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zm129.502 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zM617.911 728.602c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zm129.519 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zm129.502 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792z"></path></g></svg>
                                <h3 class="animate-fade-down mb-2 text-2lg dark:text-white">Registro Federal de Contribuyentes</h3>
                            </div>
                            <div>
                                <svg fill="#d2a663" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 480" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M399.67,60.827h-35.62V10c0-5.523-4.478-10-10-10c-5.522,0-10,4.477-10,10v50.827H135.951V10c0-5.523-4.478-10-10-10 c-5.522,0-10,4.477-10,10v50.827H80.33c-5.522,0-10,4.477-10,10V470c0,5.523,4.478,10,10,10h319.34c5.523,0,10-4.477,10-10 V70.827C409.67,65.304,405.192,60.827,399.67,60.827z M90.33,460V80.827h299.34V460H90.33z"></path> <path d="M354.05,383.967H141.157c-5.522,0-10,4.477-10,10s4.478,10,10,10H354.05c5.522,0,10-4.477,10-10 S359.572,383.967,354.05,383.967z"></path> <path d="M308.43,414.38H186.777c-5.522,0-10,4.477-10,10s4.478,10,10,10H308.43c5.522,0,10-4.477,10-10 S313.952,414.38,308.43,414.38z"></path> <path d="M323.636,358.347h30.413c5.522,0,10-4.477,10-10V116.446c0-5.523-4.478-10-10-10H125.951c-5.522,0-10,4.477-10,10 v231.901c0,5.523,4.478,10,10,10h30.412H323.636z M227.127,338.348h-60.764v-19.543c0-14.776,8.854-31.789,23.685-45.509 c8.739-8.086,18.628-14.227,28.459-17.917c0.796,0.204,1.626,0.324,2.485,0.324h6.135V338.348z M313.637,338.347h-66.51v-82.645 h11.881c0.161,0,0.318-0.017,0.478-0.024c10.022,3.776,20.218,9.902,29.131,17.773c15.666,13.832,25.02,30.787,25.02,45.353 V338.347z M344.05,126.445v211.902h-10.413v-19.543c0-34.153-30.871-66.784-63.918-80.538 c19.764-10.752,33.207-31.705,33.207-55.739c0-24.294-13.735-45.432-33.842-56.082H344.05z M282.926,182.528 c0,23.936-19.48,43.409-43.423,43.409c-23.932-0.001-43.401-19.474-43.401-43.409c0-23.946,19.47-43.427,43.401-43.427 C263.446,139.101,282.926,158.582,282.926,182.528z M146.362,338.348H135.95V126.446h0.001h73.98 c-20.1,10.65-33.83,31.787-33.83,56.082c0,23.733,13.113,44.451,32.466,55.319c-11.295,4.677-22.367,11.762-32.102,20.768 c-19.131,17.699-30.103,39.637-30.103,60.19V338.348z"></path> </g> </g> </g> </g></svg>
                                <h3 class="animate-fade-down mb-2 text-2lg dark:text-white">CURP</h3>
                            </div>
                            <div>
                                <svg fill="#d2a663" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" width="50px" height="50px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon points="306.115,102.283 295.289,91.456 259.924,126.822 259.924,0 244.611,0 244.611,126.822 209.246,91.456 198.419,102.283 252.268,156.131 "></polygon> <rect x="61.25" y="362.401" width="219.085" height="15.313"></rect> <rect x="61.25" y="406.589" width="82.918" height="15.313"></rect> <path d="M451.554,169.275H38.461C17.257,169.275,0,186.516,0,207.721v243.833C0,472.759,17.257,490,38.461,490h413.093 C472.758,490,490,472.759,490,451.554V207.721C490,186.516,472.758,169.275,451.554,169.275z M38.461,184.587h413.093 c12.755,0,23.133,10.378,23.133,23.133v24.688H15.312v-24.688C15.312,194.965,25.69,184.587,38.461,184.587z M474.687,247.722 v51.68H15.312v-51.68H474.687z M451.554,474.687H38.461c-12.771,0-23.148-10.378-23.148-23.133v-136.84h459.375v136.84 C474.687,464.31,464.31,474.687,451.554,474.687z"></path> </g> </g></svg>
                                <h3 class="animate-fade-down mb-2 text-2lg dark:text-white">Solicitud de crédito</h3>
                            </div>
                            <div>
                                <svg fill="#d2a663" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M498.665,213.084l-51.215-40.182V20.539c0-8.103-5.836-14.67-13.937-14.67h-58.682c-8.101,0-15.404,6.568-15.404,14.67 v83.3l-93.778-73.864c-5.314-4.168-12.605-4.169-17.924-0.003L13.622,213.303C5.141,219.95,0,229.945,0,240.722v17.845 c0,19.212,16.363,34.842,35.576,34.842h23.106v198.052c0,8.102,7.303,14.67,15.404,14.67h365.295 c8.101,0,13.937-6.568,13.937-14.67V293.41h24.573c19.213,0,34.109-15.63,34.109-34.842v-18.07 C512,229.725,507.14,219.733,498.665,213.084z M388.768,35.209h29.341v114.672l-29.341-23.021V35.209z M305.146,476.791h-99.759 V316.883h99.759V476.791z M423.977,476.791h-89.49V302.212c0-8.102-5.102-14.67-13.203-14.67h-129.1 c-8.101,0-16.138,6.568-16.138,14.67v174.579H88.023V266.605l168.188-131.864l167.766,131.627V476.791z M482.659,258.567 c0,3.034-1.736,5.501-4.768,5.501h-24.573v-4.838c0-4.505-1.703-8.761-5.248-11.543L265.819,104.554 c-5.315-4.168-12.697-4.171-18.015-0.003L64.622,247.919c-3.547,2.782-5.94,7.037-5.94,11.546v4.604H35.576 c-3.032,0-6.235-2.468-6.235-5.501v-17.845c0-1.702,1.134-3.279,2.475-4.329L256.773,60.162L480.828,236.17 c1.338,1.049,1.831,2.628,1.831,4.328V258.567z"></path> </g> </g> </g></svg>
                                <h3 class="animate-fade-down mb-2 text-2lg dark:text-white">Comprobante de domicilio con una antigüedad no mayor a 3 meses</h3>
                            </div>
                        </div>
                    </div>
                </section> */}


                <div class="py-12 bg-white dark:bg-gray-700 font-montserrat">
                    <section>
                        <h2 class="text-4xl font-extrabold text-center text-gray-700 dark:text-white">Beneficios</h2>
                        <div class="content-center lg:flex lg:justify-center lg:items-center">

                            <div class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8 ">
                                <div class="relative w-64 h-48 hover:animate-fade-left animate-once animate-ease-linear">
                                    <div
                                        class="absolute top-0 left-0 flex items-center w-64 h-48 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                                        <div class="w-1/3 h-40"></div>
                                        <div class="w-2/3 h-40 pr-4">
                                            <h3 class="pt-1 text-xl font-semibold text-gray-700">Eficiencia</h3>
                                            <p class="pt-1 text-sm text-gray-600">En liquidez al contar con una sola cuenta en Banco de México</p>
                                        </div>
                                    </div>
                                    <div class="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                                        <svg class="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e53e3e"
                                            width="32px" height="32px">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path
                                                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                        </svg>
                                    </div>
                                    <div
                                        class="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-red-600 rounded-lg">
                                        01</div>
                                    <div class="absolute top-0 left-0 z-30 w-24 h-2 mt-48 ml-48 bg-red-600"></div>
                                </div>
                            </div>
                            <div class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                                <div class="relative w-64 h-48 hover:animate-fade-left animate-once animate-ease-linear">
                                    <div
                                        class="absolute top-0 left-0 flex items-center w-64 h-48 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                                        <div class="w-1/3 h-40"></div>
                                        <div class="w-2/3 h-40 pr-4">
                                            <h3 class="pt-1 text-xl font-semibold text-gray-700">Integración tecnológica</h3>
                                            <p class="pt-1 text-sm text-gray-600">Rápida y segura entre aplicativos empresariales y el sistema de pagos STP-SPEI</p>
                                        </div>
                                    </div>
                                    <div class="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                                        <svg class="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                                            viewBox="0 0 24 24" fill="#38a169" width="32px" height="32px">
                                            <g>
                                                <rect fill="none" height="24" width="24" />
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M6.36,18.78L6.61,21l1.62-1.54l2.77-7.6c-0.68-0.17-1.28-0.51-1.77-0.98L6.36,18.78z" />
                                                    <path
                                                        d="M14.77,10.88c-0.49,0.47-1.1,0.81-1.77,0.98l2.77,7.6L17.39,21l0.26-2.22L14.77,10.88z" />
                                                    <path
                                                        d="M15,8c0-1.3-0.84-2.4-2-2.82V3h-2v2.18C9.84,5.6,9,6.7,9,8c0,1.66,1.34,3,3,3S15,9.66,15,8z M12,9c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C13,8.55,12.55,9,12,9z" />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div
                                        class="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-green-600 rounded-lg">
                                        02</div>
                                    <div class="absolute top-0 left-0 z-30 w-24 h-2 mt-48 ml-48 bg-green-600"></div>
                                </div>
                            </div>
                            <div class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                                <div class="relative w-64 h-48 hover:animate-fade-left animate-once animate-ease-linear">
                                    <div
                                        class="absolute top-0 left-0 flex items-center w-64 h-48 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                                        <div class="w-1/3 h-40"></div>
                                        <div class="w-2/3 h-40 pr-4">
                                            <h3 class="pt-1 text-xl font-semibold text-gray-700">Transferencias</h3>
                                            <p class="pt-1 text-sm text-gray-600">A cuentas CLABE, TDD celulares, tarjetas de crédito y productos financieros 24/7</p>
                                        </div>
                                    </div>
                                    <div class="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                                        <svg class="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3182ce"
                                            width="32px" height="32px">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path
                                                d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                                        </svg>
                                    </div>
                                    <div
                                        class="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-blue-600 rounded-lg">
                                        03</div>
                                    <div class="absolute top-0 left-0 z-30 w-24 h-2 mt-48  ml-48 bg-blue-600"></div>
                                </div>
                            </div>
                            <div class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                                <div class="relative w-64 h-48 hover:animate-fade-left animate-once animate-ease-linear">
                                    <div
                                        class="absolute top-0 left-0 flex items-center w-64 h-48 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                                        <div class="w-1/3 h-40"></div>
                                        <div class="w-2/3 h-40 pr-4">
                                            <h3 class="pt-1 text-xl font-semibold text-gray-700">Menor importe</h3>
                                            <p class="pt-1 text-sm text-gray-600">Por transacción enr relación al volumen de operación</p>
                                        </div>
                                    </div>
                                    <div class="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                                        <svg class="mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3182ce"
                                            width="32px" height="32px">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path
                                                d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                                        </svg>
                                    </div>
                                    <div
                                        class="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-indigo-600 rounded-lg">
                                        04</div>
                                    <div class="absolute top-0 left-0 z-30 w-24 h-2 mt-48  ml-48 bg-indigo-600"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* <div class="py-12 bg-gray-100 dark:bg-gray-900 font-montserrat flex justify-center">
                    <div class="timeline">
                        <h2 class="text-4xl font-extrabold text-center text-gray-700 dark:text-white mb-4">Proceso de cobranza</h2>
                        <div class="outer">
                            <div ref={ref1} className={`card transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
                                <div class="info">
                                    <h3 class="title">1</h3>
                                    <p>Generación de listas de cobranza en sistema por periodo</p>
                                </div>
                            </div>
                            <div ref={ref2} className={`card transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
                                <div class="info">
                                    <h3 class="title">2</h3>
                                    <p>Envío a cobro de layout a dependencias </p>
                                </div>
                            </div>
                            <div ref={ref3} className={`card transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
                                <div class="info">
                                    <h3 class="title">3</h3>
                                    <p>Gestión de pagos y enteros</p>
                                </div>
                            </div>
                            <div ref={ref4} className={`card transition-opacity ease-in duration-700 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
                                <div class="info">
                                    <h3 class="title">4</h3>
                                    <p>Aplicación de pagos </p>
                                </div>
                            </div>
                            <div ref={ref5} className={`card transition-opacity ease-in duration-700 ${isVisible5 ? "opacity-100" : "opacity-0"}`}>
                                <div class="info">
                                    <h3 class="title">5</h3>
                                    <p>Dictamen de cartera </p>
                                </div>
                            </div>
                            <div ref={ref6} className={`card transition-opacity ease-in duration-700 ${isVisible6 ? "opacity-100" : "opacity-0"}`}>
                                <div class="info">
                                    <h3 class="title">6</h3>
                                    <p>Cobranza alterna en caso de falta de pago o bajo pago </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            <div className="hidden md:block">
                <img src="https://res.cloudinary.com/gusironhack/image/upload/v1730693857/cobranzatwotimes.gif" />
            </div>
            </Stack>
        </Stack>
    )
}

export default Loans