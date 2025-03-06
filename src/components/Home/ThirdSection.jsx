const ThirdSection = () => {
  const CompanyImageItem = ({ url }) => {
    return (
      <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 grid content-center">
        <img src={url} alt="" className="w-64 cursor-pointer" />
      </div>
    );
  };

  const CompanyDescriptionItem = ({ text }) => {
    return (
      <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 grid content-center">
        <p className="text-sm text-gray-900">{text}</p>
      </div>
    );
  };

  return (
    <section
      class="bg-white dark:bg-gray-900 font-montserrat"
      data-aos="fade-up"
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto sm:text-center lg:max-w-7xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="dark:text-white max-w-lg mb-6 font-montserrat text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Estructura</span>
              </span>{" "}
              organizacional empresarial
            </h2>
          </div>
          <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
              <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-10 lg:grid-cols-5 sm:grid-cols-2">
                <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
                  <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
                </div>
                <CompanyImageItem url="https://res.cloudinary.com/gusironhack/image/upload/v1741222515/argis-removebg-preview_biujaa.png" />
                <CompanyImageItem url="https://res.cloudinary.com/gusironhack/image/upload/v1741223012/multiplica_qtrk1i.png" />
                <CompanyImageItem url="https://res.cloudinary.com/gusironhack/image/upload/v1741223070/abono_hanyzj.png" />
                <CompanyImageItem url="https://res.cloudinary.com/gusironhack/image/upload/v1741223119/sossa_ynpoq1.png" />
                <CompanyImageItem url="https://res.cloudinary.com/gusironhack/image/upload/v1741223176/limex_rdvswl.png" />
              </div>
            </div>
          </div>

          <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6 hidden lg:block">
            <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
              <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-10 lg:grid-cols-5 sm:grid-cols-2">
                <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
                  <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
                </div>
                <CompanyDescriptionItem text="Somos una empresa 100% mexicana enfocada en contribuir al desarrollo integral de nuestros clientes, ofreciendo soluciones empresariales para mejorar los procesos, planificar e implementar nuevas estrategias que permiten resolver los problemas de tu negocio y mejorar la rentabilidad de tu empresa. Nuestro equipo de especialistas y socios fundadores cuentan con  más  de 75 años de experiencia en el ramo financiero, ARGIS Consultores cuenta con un equipo de expertos y especialistas para cada proyecto." />
                <CompanyDescriptionItem text="Empresa 100% mexicana fundada en el año 2008, que nace para atender a un creciente número de empleados de dependencias del sector público y empresas privadas, que requieren de préstamos en efectivo. Nuestra empresa tiene como objetivo dar soluciones innovadoras e integrales para el otorgamiento de préstamos en efectivo por descuento vía nómina, garantizando tasas competitivas, servicio de alta calidad, atención personalizada, seriedad y respuestas inmediatas a las necesidades del empleado." />
                <CompanyDescriptionItem text="Somos un equipo de emprendedores profesionales con mas de 15 años de experiencia que tenemos la convicción de revolucionar los servicios financieros en México, brindando soluciones financieras y estrategias tecnológicas de cobranza, creados para apoyar a nuestros clientes en sus principales necesidades económicas e impulsar a las empresas en su crecimiento y desarrollo." />
                <CompanyDescriptionItem text="Empresa 100% mexicana fundada en el año 1992. Grupo SOSSA se ha consolidado en la prestación de servicios de consultoría especializada en diversas áreas tanto en la Comercialización y Logística de Hidrocarburos, así como en la Asesoría de Servicios Financieros ESG, Fiscales y Contables. Logrando mejoras significativas en productividad, calidad y servicio hacia nuestros clientes." />
                <CompanyDescriptionItem text="Empresa 100% mexicana. Después de estar en el negocio del arrendamiento corporativo por mas de 25 años, los fundadores de Limex Lease nos dimos a la tarea de hacer el arrendamiento (lease) como algo mas fácil y accesible para contribuir a mejorar el mundo en el que vivimos. Somos la única arrendadora de equipo “ low cost” con una gran calidad en  el servicio y consciente de nuestro  entorno." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
