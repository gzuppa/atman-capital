import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Stack } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Leasing = () => {
  const Polygon = () => {
    return (
      <svg
        className="w-10 h-10 text-deep-purple-accent-400"
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
    );
  };

  const StepItem = ({ text, url }) => {
    return (
      <a href="/" aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={url}
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="text-lg tracking-wide text-gray-300">{text}</p>
          </div>
        </div>
      </a>
    );
  };

  const HowWorks = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Dialog
          maxWidth={"lg"}
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <div className="font-montserrat px-4 pb-16 pt-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
              <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                <h2 className="max-w-lg mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                  <span className="inline-block mb-1 sm:mb-4">
                    Funcionamiento del leasing
                  </span>
                  <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                </h2>
              </div>
              <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
                <StepItem
                  url="https://res.cloudinary.com/gusironhack/image/upload/v1741920033/leasing1_trpsvl.jpg"
                  text="Busca tu auto preferido en cualquier distribuidor y dile al vendedor que tu arrendadora pagará el auto de contado para obtener el mejor precio."
                />
                <StepItem
                  url="https://res.cloudinary.com/gusironhack/image/upload/v1741920583/leasing2_s8uvtg.webp"
                  text="Cotiza tu arrendamiento con limalease para que lo ajustes a la renta que puedas pagar cada mes."
                />
                <StepItem
                  url="https://res.cloudinary.com/gusironhack/image/upload/v1741920722/leasing3_u2j4zz.jpg"
                  text="Descarga tu solicitud de arrendamiento, llénala y manda tu información para autorizar tu arrendamiento."
                />
              </div>
              <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-2 sm:row-gap-6 sm:grid-cols-2">
                <StepItem
                  url="https://res.cloudinary.com/gusironhack/image/upload/v1741920798/leasing4_nucq4a.jpg"
                  text="Firma tu contrato de renta de acuerdo al plazo que pediste: 24 36 o 48 meses. ¡La renta siempre será la misma! "
                />
                <StepItem
                  url="https://res.cloudinary.com/gusironhack/image/upload/v1741920866/leasing5_ubh5of.webp"
                  text="El mismo día que firmas tu contrato y haces los pagos iniciales puedes recibir tu auto nuevo. ¡Felicidades!"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <button
          type="button"
          onClick={handleClickOpen}
          class="dark:brightness-100 group hover:shadow-lg hover:shadow-gray-700/60 transition ease-in-out hover:scale-105 rounded-xl bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-600"
        >
          <div class="px-6 py-2 backdrop-blur-xl bg-black/80 rounded-xl font-medium font-montserrat">
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
        </button>
      </>
    );
  };

  const PhysicSalaryPerson = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const ListItem = ({text}) => {
      return (
        <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group">
          <div className="mr-2">
            <svg
              className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 sm:w-8 sm:h-8"
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
          <span className="text-gray-800 transition-colors duration-200">
            {text}
          </span>
        </div>
      )
    }

    return (
      <>
        <button
          type="button"
          onClick={handleClickOpen}
          class="inline-flex items-center transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 pb-2 dark:text-gray-300"
        >
          Persona física asalariada
          <svg
            class="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
          </svg>
        </button>
        <Dialog
          maxWidth={"lg"}
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <div className="font-montserrat px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <span className="relative">Persona física asalariada</span>
                  </span>
                </h2>
              </div>
              <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
                <ListItem text='Solicitud de servicios llena y firmada' />
                <ListItem text='Copia de los últimos 3 meses de recibos de nómina ( 6 quincenas)' />
                <ListItem text='Carta de autorización para consulta de buró de crédito original y firmada' />
                <ListItem text='Copia de INE o Pasaporte vigente' />
                <ListItem text='Comprobante de domicilio con antigüedad menor a 3 meses. (Luz, teléfono, TV de paga)' />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  };

  const PhysicProfessionalPerson = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const ListItem = ({text}) => {
      return (
        <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group">
          <div className="mr-2">
            <svg
              className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 sm:w-8 sm:h-8"
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
          <span className="text-gray-800 transition-colors duration-200">
            {text}
          </span>
        </div>
      )
    }

    return (
      <>
        <button
          type="button"
          onClick={handleClickOpen}
          class="inline-flex items-center transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 pb-2 dark:text-gray-300"
        >
          Persona física / Profesionista
          <svg
            class="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
          </svg>
        </button>
        <Dialog
          maxWidth={"lg"}
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <div className="font-montserrat px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="9012817d-af60-45bb-9786-89646bc1c945"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#9012817d-af60-45bb-9786-89646bc1c945)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">Persona física / Profesionista independiente</span>
                  </span>
                </h2>
              </div>
              <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
                <ListItem text='Solicitud de servicios llena y firmada' />
                <ListItem text='Copia de los últimos 3 meses de estados de cuenta bancarios de su cuenta principal de ingresos' />
                <ListItem text='Carta de autorización para consulta de buró de crédito' />
                <ListItem text='Copia de INE o Pasaporte vigente' />
                <ListItem text='Copia de cédula de RFC' />
                <ListItem text='Comprobante de domicilio con antigüedad menor a 3 meses. (Luz, teléfono, TV de paga)' />
                <ListItem text='Constancia de cumplimiento de obligaciones fiscales de SAT' />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  };

  const MoralPerson = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const ListItem = ({text}) => {
      return (
        <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group">
          <div className="mr-2">
            <svg
              className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 sm:w-8 sm:h-8"
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
          <span className="text-gray-800 transition-colors duration-200">
            {text}
          </span>
        </div>
      )
    }

    return (
      <>
        <button
          type="button"
          onClick={handleClickOpen}
          class="inline-flex items-center transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 pb-2 dark:text-gray-300"
        >
          Persona Moral / Empresa
          <svg
            class="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
          </svg>
        </button>
        <Dialog
          maxWidth={"lg"}
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <div className="font-montserrat px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="9012817d-af60-45bb-9786-89646bc1c945"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#9012817d-af60-45bb-9786-89646bc1c945)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">Persona Moral / Empresa</span>
                  </span>
                </h2>
              </div>
              <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
                <ListItem text='Solicitud de servicios llena y firmada' />
                <ListItem text='Presentación o currículum de la empresa' />
                <ListItem text='Últimos 3 estados financieros anuales (2017, 2018 y 2019)' />
                <ListItem text='Estados financieros parciales 2020 sin exceder 3 meses de antigüedad' />
                <ListItem text='Relación patrimonial del aval' />
                <ListItem text='Carta de autorización para consulta de buró de crédito ( Empresa y Aval)' />
                <ListItem text='Acta constitutiva con datos de inscripción al RPPC' />
                <ListItem text='Poderes para actos de administración con datos de inscripción al RPPC' />
                <ListItem text='Copia de cédula de RFC ( Empresa y Aval)' />
                <ListItem text='Comprobante de domicilio con antigüedad menor a 3 meses' />
                <ListItem text='Constancia de cumplimiento de obligaciones fiscales de SAT' />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  };


  return (
    <div className="px-4 font-montserrat py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800">
      <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none">
              ¿Qué es el lease?
              <br className="hidden md:block" />
              <span className="inline-block text-deep-purple-accent-400 text-2xl">
                (Arrendamiento)
              </span>
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
              Es el significado en inglés del término “arrendamiento” que
              simplemente consiste en pagar una renta cada mes por usar algo. Si
              después de rentarlo un tiempo (24, 36 o 48 Meses) decides
              quedártelo, puedes comprarlo a un precio bajo con respecto a su
              valor original.
            </p>
          </div>
          <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <Polygon />
              </div>
              <h6 className="mb-2 font-semibold leading-5 dark:text-white">
                ¿Y como funciona?
              </h6>
              <div className="pt-4">
                <HowWorks />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <Polygon />
              </div>
              <h6 className="mb-2 font-semibold leading-5 dark:text-white">
                ¿Qué necesito para contratar el arrendamiento?
              </h6>
              <Stack direction={"column"}>
                <PhysicSalaryPerson />
                <PhysicProfessionalPerson />
                <MoralPerson />
              </Stack>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://res.cloudinary.com/gusironhack/image/upload/v1741918163/carleasingimage_tflhxo.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Leasing;
