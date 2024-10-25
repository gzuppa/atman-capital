import React from 'react'
import { NavLink } from 'react-router-dom'

const People = () => {
  return (
    <>
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20 font-montserrat bg-gray-50 dark:bg-gray-800">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <span className="relative font-montserrat text-gray-900 dark:text-white">ATMAN Pay Personas</span>
        </span>
      </h2>
      <NavLink to={"/"}><button class="mt-4 text-sm w-40 text-white bg-principalAmber py-2 rounded-xl shadow-lg">Quiero la app</button></NavLink>
    </div>
    <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x text-gray-900 dark:text-white">
      <div className="space-y-6 sm:px-16">
        <div className="flex flex-col max-w-md sm:flex-row">
          <div className="mb-4 mr-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V12M3 9H21M18 21V15M21 18.0008L15 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
            La app que lo tiene todo.
            </h6>
            <p className="text-sm">
                Maneja tu dinero más fácil, rápido y desde un solo lugar.
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:flex-row">
          <div className="mb-4 mr-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V12M3 9H21M18 21V15M21 18.0008L15 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
                Cobra a distancia
            </h6>
            <p className="text-sm">
                Con ATMAN Pay haz cobros de forma fácil a quien tú quieras sin salir de casa.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-6 sm:px-16">
        <div className="flex flex-col max-w-md sm:flex-row">
          <div className="mb-4 mr-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V12M3 9H21M18 21V15M21 18.0008L15 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
                Agiliza tus movimientos
            </h6>
            <p className="text-sm">
                Con Acciones rápidas, ingresa dinero y paga a tus frecuentes de forma rápida y simple
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:flex-row">
          <div className="mb-4 mr-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V12M3 9H21M18 21V15M21 18.0008L15 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
                Controla tu dinero
            </h6>
            <p className="text-sm">
                Con Acciones rápidas, ingresa dinero y paga a tus frecuentes de forma rápida y simple.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default People