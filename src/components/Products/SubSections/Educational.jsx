import React from "react";

const Educational = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:py-20 font-montserrat bg-gray-50 dark:bg-gray-900"
      >
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 lg:px-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none">
                Mejores finanzas, <br className="hidden md:block" />
                mejores{" "}
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block text-deep-purple-accent-400">
                    decisiones
                  </span>
                </span>
              </h2>
              <p className="text-base text-gray-700 dark:text-white md:text-lg">
                Queremos ayudarte a tomar las mejores decisiones con el
                propósito de que utilices de la mejor forma posible los
                productos y servicios financieros y así tener finanzas más
                sanas, crecimiento empresarial y una mejor calidad de vida.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2 ">
              <div className="bg-gray-50 dark:bg-gray-800 border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5 text-gray-900 dark:text-white">
                    La importancia de unas finanzas sanas
                  </h6>
                  <p className="text-sm text-gray-900 dark:text-white">
                    Te ayudamos a resolver los problemas financieros mas comunes
                    y tambien los complejos
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5 text-gray-900 dark:text-white">
                    Crecimiento empresarial y personal
                  </h6>
                  <p className="text-sm text-gray-900 dark:text-white">
                    Alcanza el equilibrio en los aspectos mas importantes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://res.cloudinary.com/gusironhack/image/upload/v1730298838/finacnial.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        class="px-6 lg:px-40 font-montserrat bg-gray-50 dark:bg-gray-800"
      >
        <p class="pt-10 mb-6 text-center text-gray-900 dark:text-white text-md">
          Es importante el manejo que le des tanto a tus finanzas empresariales
          como a tus finanzas personales y familiares, te recomendamos que
          ahorres una parte de tu ingreso para cumplir metas a mediano o largo
          plazo, pero como sabemos que a veces hay imprevistos y/o situaciones
          en las cuales es necesario una ayuda extra, recuerda que en GARC
          Financial Services siempre podrás contar con el respaldo económico
          cuando más lo necesites, el crédito o préstamo es una herramienta que
          te puede ayudar a salir de esas situaciones no previstas o cumplir
          metas y esos sueños que te has propuesto.
        </p>
        <p class="mt-2 pb-12 text-center text-gray-900 dark:text-white text-md"></p>
      </div>
    </>
  );
};

export default Educational;
