const Consulting = () => {

  const ItemListService = ({ text }) => {
    return (
      <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
        <div className="mr-2">
          <svg
            className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8 dark:text-white"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <span className="text-gray-800 dark:text-white">{text}</span>
      </div>
    );
  };

  const ItemListOurServices = ({ text }) => {
    return (
      <div className="flex flex-col max-w-md sm:flex-row">
        <div className="mb-4 mr-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </div>
        <div>
          <h6 className="mb-3 text-xl font-bold mt-2 text-gray-900 dark:text-white">
            {text}
          </h6>
        </div>
      </div>
    );
  };

  const CompanyItems = ({url, title, subtitle}) => {
    return (
      <div>
        <div class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            class="object-contain w-full h-56 md:h-64 xl:h-80"
            src={url}
            alt="Person"
          />
          <div class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p class="mb-1 text-lg font-bold text-gray-100">{title}</p>
            <p class="mb-4 text-xs text-gray-100">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className="bg-gray-50 dark:bg-gray-800 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20 font-montserrat"
        data-aos="fade-up"
      >
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
            Consultoría y administración de portafolios y cobranza especializada
          </h2>
          <p className="text-base text-gray-700 dark:text-white md:text-lg">
            Mejoramos negocios con pasión
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="pb-4 mb-4 border-b">
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Nuestro equipo de consultores desarrolla proyectos en función de
                la necesidad de cada empresa, encargándose del diseño,
                implementación y seguimiento de los proyectos, involucrándose en
                el proceso hasta conseguir los objetivos marcados.
              </p>
            </div>
            <div className="pb-4 mb-4 border-b">
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Nuestro equipo no se limita a resolver problemas, se adelanta a
                situaciones que pueden representar oportunidades o amenazas para
                su empresa, proporcionando una visión fresca con una perspectiva
                objetiva, multidisciplinaria y profesional.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                A partir de una visión integral de negocio, trabajamos en equipo
                con nuestros clientes para desarrollar e implementar soluciones
                de negocios con resultados medibles
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="bg-gray-50 dark:bg-gray-900 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20 font-montserrat"
      >
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-6xl md:mb-12">
          <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
            Metodología de servicio
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-400 md:text-lg">
            En GARC creemos en una consultoría realista, a la medida de las
            necesidades de nuestros clientes, nuestro modelo de gestión
            empresarial es un modelo de inmersión con los clientes. Un modelo de
            consultoría, que va desde el diagnóstico de necesidades hasta la
            implementación real dentro de la empresa, asegurando así que se
            consiguen resultados y valor real para la empresa.
          </p>
        </div>
        <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
          <ItemListService text="Análisis" />
          <ItemListService text="Planificación" />
          <ItemListService text="Implementación" />
          <ItemListService text="Seguimiento" />
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="bg-gray-50 dark:bg-gray-800 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20 font-montserrat"
      >
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-6xl md:mb-12">
          <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
            Nuestros servicios
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-400 md:text-lg">
            Contamos con un amplio portafolio de estrategias y soluciones a
            través de nuestros especialistas en el Sector Financiero:
          </p>
        </div>
        <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x ">
          <div className="space-y-6 sm:px-16">
            <ItemListOurServices text="Gestión financiera" />
            <ItemListOurServices text="Valuación de empresas" />
            <ItemListOurServices text="Riesgos" />
            <ItemListOurServices text="Auditorías" />
            <ItemListOurServices text="Optimización de procesos" />
            <ItemListOurServices text="Gestoría empresarial" />
            <ItemListOurServices text="Administración de cartera" />
          </div>
          <div className="space-y-6 sm:px-16">
            <ItemListOurServices text="Marketing digital" />
            <ItemListOurServices text="Publicidad y promocionales" />
            <ItemListOurServices text="Mensajería" />
            <ItemListOurServices text="Digitalización en el otorgamiento de créditos" />
            <ItemListOurServices text="Automatización del proceso de administración de créditos" />
            <ItemListOurServices text="Callcenter omnicanal" />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="bg-gray-50 dark:bg-gray-900 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-16 lg:py-20 font-montserrat"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none">
              <span className="inline-block text-deep-purple-accent-400">
                Estrategia de cobranza
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700 dark:text-gray-400">
              Nos preocupamos en poder ayudar a nuestros clientes a implementar
              un verdadero proceso de cobranza integral. Todo a través de
              plataformas y modelos desarrollados a la medida para el monitoreo
              del comportamiento de la cartera y la segmentación de la misma,
              logrando la implementación de estrategias de cobro preventivo,
              contamos con un sistema de clasificación, dictaminación y reporteo
              de sus carteras y le ayudamos en la definición y priorización de
              las estrategias de cobranza
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20 font-montserrat">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              <span className="inline-block text-gray-900 dark:text-white">
                Cobranza alterna
              </span>
            </h5>
            <p className="mb-6 text-gray-900 dark:text-white">
              En GARC sabemos que no toda la cartera vencida es igual, y no
              todos tus clientes morosos tienen las mismas características.
              Brindamos servicios hechos a la medida, cliente por cliente
            </p>
            <p className="mb-6 text-gray-900 dark:text-white">
              Analizamos tu cartera y desarrollamos la mejor estrategia de
              comunicación, anticipamos comportamientos de tus clientes para
              contactar en el momento y medios de cobranza más efectivos, para
              esto tenemos diferentes medios de cobro
            </p>
          </div>
          <div className="hidden md:block">
            <img
              className="object-cover  h-56 rounded sm:h-96"
              src="https://res.cloudinary.com/gusironhack/image/upload/v1731022329/cobranzaanimatedgi.gif"
              alt="cobranza"
            />
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 mt-16">
          <div className="lg:pr-10 align-middle pt-48">
            <p className="text-gray-900 dark:text-white">
              Para asegurar la efectividad de la cobranza contamos con distintos
              canales de cobro y convenios con instituciones bancarias
            </p>
          </div>
          <div className="hidden md:block">
            <img
              className="object-cover rounded"
              src="https://res.cloudinary.com/gusironhack/image/upload/v1731022634/mediosdepago.gif"
              alt="canales"
            />
          </div>
        </div>

        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 class="max-w-lg mb-6 font-montserrat text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span class="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                    width="52"
                    height="24"
                  ></rect>
                </svg>
                <span class="relative">Alianzas y bancos</span>
              </span>
            </h2>
          </div>
          <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <CompanyItems url='https://res.cloudinary.com/gusironhack/image/upload/v1741222515/argis-removebg-preview_biujaa.png' title='ARGIS' subtitle='Servicios de consultoría y administración'/>
            <CompanyItems url='https://res.cloudinary.com/gusironhack/image/upload/v1741223012/multiplica_qtrk1i.png' title='Multiplica tu nómina' subtitle=''/>
            <CompanyItems url='https://res.cloudinary.com/gusironhack/image/upload/v1741223070/abono_hanyzj.png' title='Tu abono cuenta' subtitle='by Financiera SAM'/>
            <CompanyItems url='https://res.cloudinary.com/gusironhack/image/upload/v1741229771/Cliente-Logo-Banco-Azteca_scpsmo.png' title='Banco Azteca' subtitle=''/>
            <CompanyItems url='https://res.cloudinary.com/gusironhack/image/upload/v1741309933/santanderlogo-removebg-preview_uuz6cu.png' title='Santander' subtitle=''/>
            <CompanyItems url='https://res.cloudinary.com/gusironhack/image/upload/v1741310140/inbursa-removebg-preview_su5yt4.png' title='Inbursa' subtitle=''/>
            <CompanyItems url='https://res.cloudinary.com/gusironhack/image/upload/v1741310205/citi-removebg-preview_snnamc.png' title='CitiBanamex' subtitle=''/>
            <CompanyItems url='https://res.cloudinary.com/gusironhack/image/upload/v1741310286/bbvalogo_bzxazu.png' title='BBVA' subtitle=''/>
            <CompanyItems url='https://res.cloudinary.com/gusironhack/image/upload/v1741310366/stp_iincet.png' title='STP' subtitle=''/>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mt-10">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none">
              <span className="inline-block text-deep-purple-accent-400">
                Sistema de administración de cartera (ERP)
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700 dark:text-gray-400">
              En GARC sabemos de la importancia de la tecnología en todos los
              procesos de la empresa, es por ello que ofrecemos tecnología vital
              para los negocios. Ofrecemos una alternativa de primer nivel para
              la administración de créditos otorgados y para la correcta
              administración de la cartera. En esta plataforma podremos:
              dictaminar, controlar y conciliar tu cartera, adicional puedes
              contar con acceso en tiempo real y nos adecuamos a todos los
              reportes necesarios para la mejor toma de decisiones de tu
              negocio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consulting;
