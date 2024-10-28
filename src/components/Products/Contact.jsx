import { useState } from "react"

const Contact = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [stateMessage, setStateMessage] = useState(null)

    const sendEmail = (e) => {
        e.persist();
        e.preventDefault()
        setIsSubmitting(true)
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setStateMessage('Message sent!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                    setStateMessage(null);
                }, 5000)
            },
            (error) => {
                    setStateMessage('Something went wrong, please try again later');
                    setIsSubmitting(false);
                    setTimeout(() => {
                    setStateMessage(null);
                }, 5000)
            }
            );
        e.target.reset();
    }

    return (
        <section class="body-font relative bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-montserrat">
            <div class="container mx-auto px-5 py-24">
                <div class="mb-12 flex w-full flex-col text-center">
                    <h1 class="title-font mb-4 text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl">Contacta a un asesor</h1>
                    <p class="mx-auto text-base leading-relaxed lg:w-2/3">Estaremos encantados de ayudarte</p>
                </div>
                <div class="mx-auto md:w-2/3 lg:w-1/2">
                    <form onSubmit={sendEmail}>
                        <div class="-m-2 flex flex-wrap">
                            <div class="w-1/2 p-2">
                                <div class="relative">
                                    <input type="text" id="name" name="name" class="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-900 dark:text-white placeholder-transparent outline-none transition-colors duration-200 ease-in-out" placeholder="Name" />
                                    <label for="name" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-principalAmber transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-principalAmber">nombre</label>
                                </div>
                            </div>
                            <div class="w-1/2 p-2">
                                <div class="relative">
                                    <input type="email" id="email" name="email" class="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-900 dark:text-white placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-principalAmber" placeholder="Email" />
                                    <label for="email" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-principalAmber transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-principalAmber">Email</label>
                                </div>
                            </div>
                            <div class="mt-4 w-full p-2">
                                <div class="relative">
                                    <textarea id="message" name="message" class="peer h-32 w-full resize-none rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-900 dark:text-white placeholder-transparent outline-none transition-colors duration-200 ease-in-out" placeholder="Message"></textarea>
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
        </section>
  )
}

export default Contact