import { useIsVisible } from "../../../utils/useIsVisible";
import { Stack } from "@mui/material";
import "./index.css";

const Loans = () => {
  const ListItem = ({ text }) => {
    return (
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
        {text}
      </li>
    );
  };

  return (
    <Stack class="font-montserrat">
      <Stack
        data-aos="fade-up"
        class="bg-gray-50 dark:bg-gray-900 text-center px-2 lg:px-0"
      >
        <h1 class="pt-10 text-gray-900 dark:text-white text-5xl font-bold pb-6 lg:pb-0">
          Parámetros del crédito
        </h1>
        <div class="lg:px-40">
          <p class="mt-4 text-center text-gray-900 dark:text-white text-md">
            Ofrecemos créditos con descuento vía nómina o domiciliación bancaria
            a empleados que laboren en una Empresa o Dependencia Gubernamental
            y/o Privada
          </p>
        </div>
      </Stack>
      <Stack>
        <div
          data-aos="fade-up"
          className="bg-gray-50 dark:bg-gray-900 px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:py-12 font-montserrat text-gray-500 dark:text-gray-400"
        >
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6 font-montserrat">
                <h2 className="text-gray-900 dark:text-white max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                  Descuento vía nómina
                </h2>
                <p className="text-base text-gray-500 dark:text-white md:text-lg">
                  Ahora puedes acceder a un crédito por descuento vía nómina
                  para personas físicas, entre ellas, las que trabajan en el
                  sector gubernamental ¡sin complicaciones!
                </p>
              </div>
              <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                Características
              </p>
              <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                <ul className="space-y-3">
                  <ListItem text="Plazos de 12 a 60 meses" />
                  <ListItem text="Montos desde $2,000 hasta $350,000" />
                </ul>
                <ul className="space-y-3">
                  <ListItem text="Tasa promedio 3% sin IVA" />
                  <ListItem text="Sin comisiones ni aval" />
                </ul>
              </div>
              <p className="mt-4 mb-4 text-sm font-bold tracking-widest uppercase">
                Requisitos
              </p>
              <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                <ul className="space-y-3">
                  <ListItem text="Registro Federal de Contribuyentes" />
                  <ListItem text="Identificación oficial vigente" />
                  <ListItem text="CURP" />
                </ul>
                <ul className="space-y-3">
                  <ListItem text="Solicitud de crédito" />
                  <ListItem text="Comprobante de domicilio" />
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
                  <ListItem text="Plazos de 1 a 18 meses" />
                  <ListItem text="Montos desde $2,000 hasta $100,000" />
                </ul>
                <ul className="space-y-3">
                  <ListItem text="Comisión por apertura 5% sin IVA" />
                  <ListItem text="Firma digital" />
                </ul>
              </div>
              <p className="mt-4 mb-4 text-sm font-bold tracking-widest uppercase">
                Requisitos
              </p>
              <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                <ul className="space-y-3">
                  <ListItem text="Tener una cuenta bancaria" />
                  <ListItem text="Identificación oficial vigente" />
                </ul>
                <ul className="space-y-3">
                  <ListItem text="Comprobante de domicilio" />
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          class="py-12 bg-white dark:bg-gray-700 font-montserrat"
        >
          <section>
            <h2 class="text-4xl font-extrabold text-center text-gray-700 dark:text-white">
              Beneficios
            </h2>
            <div class="content-center lg:flex lg:justify-center lg:items-center">
              <div class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8 ">
                <div class="relative w-64 h-48 hover:animate-fade-left animate-once animate-ease-linear">
                  <div class="absolute top-0 left-0 flex items-center w-64 h-48 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                    <div class="w-1/3 h-40"></div>
                    <div class="w-2/3 h-40 pr-4">
                      <h3 class="pt-1 text-xl font-semibold text-gray-700">
                        Eficiencia
                      </h3>
                      <p class="pt-1 text-sm text-gray-600">
                        En liquidez al contar con una sola cuenta en Banco de
                        México
                      </p>
                    </div>
                  </div>
                  <div class="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                    <svg
                      class="mt-2 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#000000"
                      width="32px"
                      height="32px"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                  </div>
                  <div class="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-gray-900 rounded-lg">
                    01
                  </div>
                  <div class="absolute top-0 left-0 z-30 w-24 h-2 mt-48 ml-48 bg-gray-900"></div>
                </div>
              </div>
              <div class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                <div class="relative w-64 h-48 hover:animate-fade-left animate-once animate-ease-linear">
                  <div class="absolute top-0 left-0 flex items-center w-64 h-48 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                    <div class="w-1/3 h-40"></div>
                    <div class="w-2/3 h-40 pr-4">
                      <h3 class="pt-1 text-xl font-semibold text-gray-700">
                        Integración tecnológica
                      </h3>
                      <p class="pt-1 text-sm text-gray-600">
                        Rápida y segura entre aplicativos empresariales y el
                        sistema de pagos STP-SPEI
                      </p>
                    </div>
                  </div>
                  <div class="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                    <svg
                      class="mt-2 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      fill="#723e11"
                      width="32px"
                      height="32px"
                    >
                      <g>
                        <rect fill="none" height="24" width="24" />
                      </g>
                      <g>
                        <g>
                          <path d="M6.36,18.78L6.61,21l1.62-1.54l2.77-7.6c-0.68-0.17-1.28-0.51-1.77-0.98L6.36,18.78z" />
                          <path d="M14.77,10.88c-0.49,0.47-1.1,0.81-1.77,0.98l2.77,7.6L17.39,21l0.26-2.22L14.77,10.88z" />
                          <path d="M15,8c0-1.3-0.84-2.4-2-2.82V3h-2v2.18C9.84,5.6,9,6.7,9,8c0,1.66,1.34,3,3,3S15,9.66,15,8z M12,9c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C13,8.55,12.55,9,12,9z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-yellow-900 rounded-lg">
                    02
                  </div>
                  <div class="absolute top-0 left-0 z-30 w-24 h-2 mt-48 ml-48 bg-yellow-900"></div>
                </div>
              </div>
              <div class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                <div class="relative w-64 h-48 hover:animate-fade-left animate-once animate-ease-linear">
                  <div class="absolute top-0 left-0 flex items-center w-64 h-48 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                    <div class="w-1/3 h-40"></div>
                    <div class="w-2/3 h-40 pr-4">
                      <h3 class="pt-1 text-xl font-semibold text-gray-700">
                        Transferencias
                      </h3>
                      <p class="pt-1 text-sm text-gray-600">
                        A cuentas CLABE, TDD celulares, tarjetas de crédito y
                        productos financieros 24/7
                      </p>
                    </div>
                  </div>
                  <div class="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                    <svg
                      class="mt-2 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#a16107"
                      width="32px"
                      height="32px"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                    </svg>
                  </div>
                  <div class="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-yellow-700 rounded-lg">
                    03
                  </div>
                  <div class="absolute top-0 left-0 z-30 w-24 h-2 mt-48  ml-48 bg-yellow-700"></div>
                </div>
              </div>
              <div class="flex justify-center pt-10 m-auto lg:w-1/4 lg:mx-6 lg:my-8">
                <div class="relative w-64 h-48 hover:animate-fade-left animate-once animate-ease-linear">
                  <div class="absolute top-0 left-0 flex items-center w-64 h-48 mt-6 ml-6 bg-white border-8 border-gray-700 border-solid rounded-lg">
                    <div class="w-1/3 h-40"></div>
                    <div class="w-2/3 h-40 pr-4">
                      <h3 class="pt-1 text-xl font-semibold text-gray-700">
                        Menor importe
                      </h3>
                      <p class="pt-1 text-sm text-gray-600">
                        Por transacción enr relación al volumen de operación
                      </p>
                    </div>
                  </div>
                  <div class="absolute top-0 left-0 z-20 w-12 h-12 mt-6 ml-6 bg-white rounded-full">
                    <svg
                      class="mt-2 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#d2a663"
                      width="32px"
                      height="32px"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                    </svg>
                  </div>
                  <div class="absolute top-0 left-0 z-10 w-24 h-40 py-20 text-5xl font-bold text-center text-white bg-principalAmber rounded-lg">
                    04
                  </div>
                  <div class="absolute top-0 left-0 z-30 w-24 h-2 mt-48  ml-48 bg-principalAmber"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="git text-center md:flex justify-center">
          <img src="https://res.cloudinary.com/gusironhack/image/upload/v1731024404/procesocobranza.gif" />
        </div>
      </Stack>
    </Stack>
  );
};

export default Loans;
