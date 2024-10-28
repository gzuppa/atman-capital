import React from 'react'
import { NavLink } from 'react-router-dom'

const CreditCard = () => {
  return (
    <>
        <section class="bg-gray-50 dark:bg-gray-800 font-montserrat" data-aos="fade-up">
            <div class="max-w-screen-xl px-4 mx-auto space-y-12 lg:space-y-20 lg:py-12 lg:px-6">
                <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <img class=" w-full mb-4 rounded-lg lg:mb-0 lg:flex animate-fade-up animate-once animate-duration-[3000ms] animate-ease-linear" src="https://res.cloudinary.com/gusironhack/image/upload/v1730137990/Atman/iphone-nobg.png" alt="cellphone"/>
                    <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 class="animate-fade-left mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Obténla de forma inmediata en cualquier momento y cualquier lugar desde tu App</h2>
                        <p class="animate-fade-left mb-8 font-light lg:text-xl">Bienvenido a la nueva era de las tarjetas de crédito! Presentamos la tarjeta ATMAN CREDIT, la cual está respaldada por MasterCard y ofrece una amplia variedad de beneficios. Esta tarjeta te permite tomar el control de tus finanzas gracias a su App, donde podrás encenderla y apagarla, así como pagar con tu NIP para mayor seguridad </p>
                        <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                            <li class="flex space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-principalAmber dark:text-principalAmber" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="animate-fade-left text-base font-medium leading-tight text-gray-900 dark:text-white">Con su uso y pago puntual, la tarjeta ATMAN CREDIT te ayuda a construir tu historial crediticio.</span>
                            </li>
                            <li class="flex space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-principalAmber dark:text-principalAmber" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="animate-fade-left text-base font-medium leading-tight text-gray-900 dark:text-white">Su tecnología Contactless te permite pagar de forma más segura sin contacto, lo que minimiza el riesgo de fraude o robo de información.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <div className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-24 lg:py-20 font-montserrat bg-gray-50 dark:bg-gray-800">
        <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
            <div className="lg:w-1/2">
            <h2 className="text-gray-900 dark:text-white max-w-md mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none xl:max-w-lg">
                ¡Solicita tu tarjeta ATMAN CREDIT ahora mismo!
            </h2>
            </div>
            <div className="lg:w-1/2">
            <p className="text-base md:text-lg text-gray-500 sm:text-lg dark:text-gray-400">
                Conoce los requisitos y descubre las ventajas de contar con una tarjeta totalmente hecha para ti.
            </p>
            </div>
        </div>
        <div className="grid gap-8 row-gap-10 sm:grid-cols-1 lg:grid-cols-3">
            <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                className="w-7 h-7 text-deep-purple-accent-400"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                >
                <circle cx="11" cy="13" fill="none" r="9" stroke="currentColor" />
                <path
                    d=" M21.955,18.005c1.089,2.145,1.378,3.816,0.622,4.572C20.92,24.234,14.799,20.799,9,15S-0.234,3.08,1.423,1.423 C2.18,0.666,3.853,0.956,6,2.047"
                    stroke="currentColor"
                    fill="none"
                />
                </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-900 dark:text-white">Ventajas</h6>
            <p className="mb-3 text-md text-gray-900 dark:text-white">
                Aceptación internacional a través de MasterCard®
            </p>
            <ul className="mb-4 -ml-1 space-y-2 text-gray-900 dark:text-white">
                <li className="flex items-start">
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
                    <p className='text-xs'>Acceso a red de más de 6,200 cajeros automáticos (Red en México)</p>
                </li>
                <li className="flex items-start">
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
                    <p className='text-xs'>Atención 24/7 los 365 días del año</p>
                </li>
                <li className="flex items-start">
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
                    <p className='text-xs'>Mastercard Global Service brinda asistencia en todo el mundo, las 24 horas del día, con Informes de Tarjetas Perdidas y Robadas, Reemplazo con Tarjeta de Emergencia y Anticipo de Efectivo de Emergencia</p>
                </li>
                <li className="flex items-start">
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
                    <p className='text-xs'>Control de tus movimientos a través de la APP</p>
                </li>
                <li className="flex items-start">
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
                    <p className='text-xs'>Tecnología Contactless para pago solo con acercar la tarjeta</p>
                </li>
                <li className="flex items-start">
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
                    <p className='text-xs'>Todos los beneficios, descuentos y promociones que se ofrecen por MasterCard® como 2 x1 en Cinepolis®, 10% de descuento en Mercado Libre® o Uber One® gratis los 3 primeros meses, entre muchos otros</p>
                </li>
                <li className="flex items-start">
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
                    <p className='text-xs'>Sin comisión por el uso en el extranjero</p>
                </li>
            </ul>
            </div>
            <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                className="w-7 h-7 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                >
                <path
                    d="M2,10C2,5.029,6.47,1,12,1c5.379,0,10,4.029,10,9S15.712,23,12,23C8.212,23,2,14.971,2,10Z"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                />
                <path
                    d="M5,9a6.529,6.529,0,0,1,4.393,1.607C10.705,11.92,10,15,10,15a6.59,6.59,0,0,1-3.436-1.564C5.022,11.894,5,9,5,9Z"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                />
                <path
                    d="M19,9a6.523,6.523,0,0,0-4.392,1.608C13.3,11.92,14,15,14,15a6.59,6.59,0,0,0,3.436-1.564C18.978,11.894,19,9,19,9Z"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                />
                </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-900 dark:text-white">Transferencias internacionales</h6>
            <p className="mb-3 text-md text-gray-900 dark:text-white">
                Liquidación de remesas a otros países más fácil que nunca
            </p>
            <ul className="mb-4 -ml-1 space-y-2 text-gray-900 dark:text-white">
                <li className="flex items-start">
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
                <p className='text-xs'>Envía o recibe pagos de forma económica y fácil a cualquier parte del mundo, en cualquier divisa</p>
                </li>
                <li className="flex items-start">
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
                <p className='text-xs'>Con ATMAN PAY tienes cuentas digitales para la liquidación de tus remesas internacionales a un tipo de cambio y costo competitivos</p>
                </li>
                <li className="flex items-start">
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
                <p className='text-xs'>Obtén seguridad y rapidez en el envío y recepción de pagos</p>
                </li>
            </ul>
            </div>
            <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                className="w-7 h-7 text-deep-purple-accent-400"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                >
                <path
                    d="M8.291,18.709,4.182,22.818c-.419.419-1.43.086-2.258-.742s-1.161-1.839-.742-2.258l4.11-4.11"
                    fill="none"
                    stroke="currentColor"
                />
                <ellipse
                    cx="19.078"
                    cy="4.922"
                    fill="none"
                    rx="2.5"
                    ry="4.95"
                    stroke="currentColor"
                    transform="translate(2.107 14.932) rotate(-45)"
                />
                <path
                    d="M9.185,9.815,5.3,13.7c-.7.7-.143,2.382,1.238,3.762S9.6,19.4,10.3,18.7l3.885-3.885"
                    fill="none"
                    stroke="currentColor"
                />
                <path
                    d="M15.578,1.422,9.422,7.578c-.976.976-.2,3.335,1.732,5.268s4.292,2.708,5.268,1.732l6.156-6.156"
                    fill="none"
                    stroke="currentColor"
                />
                </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-900 dark:text-white">Requisitos</h6>
            <p className="mb-3 text-md text-gray-900 dark:text-white">
                Son mínimos para agilizar nuestros procedimientos
            </p>
            <ul className="mb-4 -ml-1 space-y-2 text-gray-900 dark:text-white">
                <li className="flex items-start">
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
                <p className='text-xs'>INE</p>
                </li>
                <li className="flex items-start">
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
                <p className='text-xs'>Comprobante de domicilio</p>
                </li>
                <li className="flex items-start">
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
                <p className='text-xs'>CURP</p>
                </li>
                <li className="flex items-start">
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
                <p className='text-xs'>Nombre, fecha y país de nacimiento</p>
                </li>
                <li className="flex items-start">
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
                <p className='text-xs'>Correo electrónico</p>
                </li>
                <li className="flex items-start">
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
                <p className='text-xs'>Teléfono celular</p>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </>
  )
}

export default CreditCard