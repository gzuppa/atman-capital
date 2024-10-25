import React from 'react'

const SecondSection = () => {
  return (
    <section class="bg-gray-50 dark:bg-gray-800 font-montserrat" data-aos="fade-down">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="../src/assets/website/atman.png" alt="feature image 2" />
                <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Fortalece el alma de tu desarrollo</h2>
                    <p class="mb-8 font-light lg:text-xl">Nuestra sociedad, fundada en 2022, tiene como objetivo brindar servicios financieros / cuentas / liquidaciones a un creciente número de usuarios que requieren de servicios financieros ágiles y de un costo competitivo.</p>
                    <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li class="flex space-x-3">
                            <span class="text-base font-light leading-tight text-gray-900 dark:text-white">La palabra ATMAN proviene del lenguaje sagrado del sánscrito, la cual tiene la traducción literal a "ALMA”. </span>
                        </li>
                        <li class="flex space-x-3">
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Nuestra identidad se fundamenta en la unión de dos fuerzas (clientela y compañía bajo una misma ALMA), para llevar a cabo el crecimiento y progreso conjunto de la sociedad.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
  )
}

export default SecondSection