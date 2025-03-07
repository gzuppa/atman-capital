const SecondSection = () => {
  const CompanyItems = ({ url, title, subtitle }) => {
    return (
      <div>
        <div class="bg-white dark:bg-gray-300 relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            class="object-contain w-full h-56 md:h-64 xl:h-80"
            src={url}
            alt="Person"
          />
          <div class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p class="mb-1 text-lg font-bold text-gray-100">{title}</p>
            <p class="mb-4 text-xs text-gray-100">{subtitle}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
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
                número de usuarios que requieren de servicios financieros ágiles
                y de un costo competitivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="bg-white dark:bg-gray-900 font-montserrat"
        data-aos="fade-down"
      >
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 class="max-w-lg mb-6 font-montserrat text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
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
                <span class="relative">Nuestros clientes y logros</span>
              </span>
            </h2>
            <span class="relative">
              Algunos de nuestros clientes y lo que hemos logrado juntos
            </span>
          </div>
          <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741223012/multiplica_qtrk1i.png"
              title="Multiplica tu nómina"
              subtitle="Incremento del 30% en la recuperación de la cartera vencida"
            />
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741310971/credifiellogo_rsygsq.png"
              title="CrediFiel"
              subtitle="Incremento del 15% en venta digital"
            />
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741311083/pensioneslogo_ikavr1.png"
              title="Oficina de pensiones del Estado de Oaxaca"
              subtitle=""
            />
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741311274/bayportlogo_lcq705.png"
              title="Bayport"
              subtitle="Nos convertimos en su Top despacho en cartera vigente"
            />
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741311385/creditofacil_h9ofra.png"
              title="Crédito fácil"
              subtitle="Incremento del 10% en venta telefónica"
            />
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741312001/LOGOTIPO_REFACIL-CBCOLOR-04_nk0hf2.png"
              title="Re fácil"
              subtitle="Incremento del 20% en la recuperación de cartera vencida"
            />
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741312113/oaxlogo_rxywpj.png"
              title="Gobierno del estado de Oaxaca"
              subtitle=""
            />
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741229771/Cliente-Logo-Banco-Azteca_scpsmo.png"
              title="Banco Azteca"
              subtitle="Nos convertimos en su Top despacho de recuperación legal"
            />
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741312516/masnominalogo_tzdza7.png"
              title="Más nómina"
              subtitle="Nos convertimos en su Top despacho en venta para el sector salud, educación y gobierno"
            />
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741312723/suenosmultiva_zjw2vq.png"
              title="Sueños Multiva"
              subtitle="Nos convertimos en su Top despacho en venta en instituciones de salud"
            />
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741312804/saludpuebla_qxfie5.png"
              title="Secretaría de Salud del estado de Puebla"
              subtitle=""
            />
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741312236/poder_njawer.png"
              title="Poder Judicial del Estado de Oaxaca"
              subtitle=""
            />
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741313054/b2blogo_pxu66o.png"
              title="B2B LATAM"
              subtitle="Incremento del 20% de contactación en atención al cliente para convocatoria a eventos"
            />
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741223070/abono_hanyzj.png"
              title="Tu abono en cuenta"
              subtitle="Optimizamos sus procesos de originación y administración de cartera"
            />
            <CompanyItems
              url="https://res.cloudinary.com/gusironhack/image/upload/v1741313196/snte37_zzlmgr.png"
              title="Sindicato Nacional de Trabajadores de la Educación"
              subtitle="Sección 37 Baja California"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
