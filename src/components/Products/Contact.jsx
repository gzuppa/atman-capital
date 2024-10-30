import { useRef } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "atman_testing",
        "template_jtaw8pg",
        form.current,
        "eviTS58gEqDf_KsRM"
      )
      .then(
        (result) => {
          alert('Mensaje enviado correctamente');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

    return (
        <section class="body-font relative bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-montserrat">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2 py-5">
                <div className="flex flex-col justify-center px-6 lg:px-0">
                <div class="mb-12 flex w-full flex-col text-center">
                    <h1 class="title-font mb-4 text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl">Contacta a un asesor</h1>
                    <p class="mx-auto text-base leading-relaxed lg:w-2/3">Estaremos encantados de ayudarte</p>
                </div>
                <div class="mx-auto md:w-2/3">
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="-m-2 flex flex-wrap">
                            <div class="w-1/2 p-2">
                                <div class="relative">
                                    <input type="text" id="user_name" name="user_name" class="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-900 placeholder-transparent outline-none transition-colors duration-200 ease-in-out" placeholder="Name" />
                                    <label for="user_name" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-principalAmber transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-principalAmber">Nombre</label>
                                </div>
                            </div>
                            <div class="w-1/2 p-2">
                                <div class="relative">
                                    <input type="email" id="user_email" name="user_email" class="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-900 placeholder-transparent outline-none transition-colors duration-200 ease-in-out" placeholder="Email" />
                                    <label for="user_email" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-principalAmber transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-principalAmber">Email</label>
                                </div>
                            </div>
                            <div class="w-1/2 p-2">
                                <div class="relative mt-3">
                                    <input type="text" id="product" name="product" class="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-900 placeholder-transparent outline-none transition-colors duration-200 ease-in-out" placeholder="Producto de interés" />
                                    <label for="product" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-principalAmber transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-principalAmber">Producto de interés</label>
                                </div>
                            </div>
                            <div class="w-1/2 p-2 mt-3">
                                <div class="relative">
                                    <input type="phone" id="telefono" name="telefono" class="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-900 placeholder-transparent outline-none transition-colors duration-200 ease-in-out" placeholder="Telefono" />
                                    <label for="telefono" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-principalAmber transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-principalAmber">Teléfono</label>
                                </div>
                            </div>
                            <div class="mt-4 w-full p-2">
                                <div class="relative">
                                    <textarea id="message" name="message" class="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-900 placeholder-transparent outline-none transition-colors duration-200 ease-in-out" placeholder="Message"></textarea>
                                    <label for="message" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-principalAmber transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-principalAmber">Mensaje</label>
                                </div>
                            </div>
                            <div class="w-full p-2">
                                <button type='submit' value="Send" class="mx-auto flex rounded border-0 bg-principalAmber py-2 px-8 text-lg text-white hover:bg-principalAmber focus:outline-none">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
                <div>
                    <img class=" w-full mb-4 rounded-lg lg:mb-0 lg:flex animate-fade-up animate-once animate-duration-[3000ms] animate-ease-linear" src="https://res.cloudinary.com/gusironhack/image/upload/v1730299479/call.jpg" alt="call"/>
                </div>
            </div>
        </section>
  )
}

export default Contact