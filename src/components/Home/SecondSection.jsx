import "./index.css"; 

const SecondSection = () => {
  return (
    <section class="bg-gray-50 dark:bg-gray-800 font-montserrat" data-aos="fade-up">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="animate-fade-left mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Revolucionamos el mercado financiero digital en México</h2>
                    <p class="animate-fade-left mb-8 font-light lg:text-xl">Contamos con una plataforma tecnológica de punta, transaccional de fácil acceso y uso</p>
                </div>
                <div class='image-container'>
                    <img class="bottom w-64" src="https://res.cloudinary.com/gusironhack/image/upload/v1731436775/atphone.png"/>
                    <img class="top w-64" src="https://res.cloudinary.com/gusironhack/image/upload/v1731436776/atcard.png"/>
                </div>
                
            </div>
        </div>
      </section>
  );
};

export default SecondSection;
