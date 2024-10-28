import React from 'react'

const Educational = () => {
  return (
    <>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:py-20 font-montserrat bg-gray-50 dark:bg-gray-900">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 lg:px-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none">
              Mejores finanzas,{' '}
              <br className="hidden md:block" />
              mejores{' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                  decisiones
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 dark:text-white md:text-lg">
              Queremos ayudarte a tomar las mejores decisiones con el propósito de que utilices de la mejor forma posible los productos y servicios financieros y así tener finanzas más sanas, crecimiento empresarial y una mejor calidad de vida.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2 ">
            <div className="bg-gray-50 dark:bg-gray-800 border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5 text-gray-900 dark:text-white">
                  La importancia de unas finanzas sanas
                </h6>
                <p className="text-sm text-gray-900 dark:text-white">
                  Te ayudamos a resolver los problemas financieros mas comunes y tambien los complejos
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
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="px-6 lg:px-40 font-montserrat bg-gray-50 dark:bg-gray-800">
      <p class="pt-10 mb-6 text-center text-gray-900 dark:text-white text-md">Es importante el manejo que le des tanto a tus finanzas empresariales como a tus finanzas personales y familiares, te recomendamos que ahorres una parte de tu ingreso para cumplir metas a mediano o largo plazo, pero como sabemos que a veces hay imprevistos y o situaciones en las cuales es necesario una ayuda extra, recuerda que en Dracma Capital Services siempre podrás contar con el respaldo económico cuando más lo necesites, el crédito o préstamo es una herramienta que te puede ayudar a salir de esas situaciones no previstas o cumplir metas y esos sueños que te has propuesto.</p>
      <p class="mt-2 pb-12 text-center text-gray-900 dark:text-white text-md">Dracma Capital Services es una Sociedad Financiera de Objeto Múltiple, las cuales se encuentran reguladas por la CONDUSEF y la cual establece diversas obligaciones que todas las SOFOMS debemos cumplir en beneficio de que tú tomes la mejor decisión a la hora de contratar un crédito en el sector financiero. Infórmate de las opciones que tienes, es importante que cuando solicites un crédito pidas que se te expliquen a detalle, cuánto vas a pagar, cuándo, por cuánto tiempo y demás características relevantes del crédito para que puedas determinar si el crédito que más te conviene y no te sobre endeudes. Cumplir con tus obligaciones de pago es importante ya que así evitarás pagar intereses moratorios y poner en riesgo la economía empresarial, existen créditos que el pago se realiza mediante domiciliación, eso ayudará a que cumplas en tiempo con tu obligación de pago.</p>
    </div>
    </>
  )
}

export default Educational