import { useTranslations } from 'next-intl';
import { EmailContact } from './components/EmailContact';


export default function HomePage() {
  const t = useTranslations('HomePage');
  const h = useTranslations('header');

  return (
    <>
      <section>
        <div className='w-screen h-[90vh] flex justify-center mb-4 relative'>
          <div className='w-full h-full flex justify-center mb-4 bg-containers bg-cover bg-center bg-no-repeat relative'>
            <div className='absolute w-full h-full bg-black/80'></div>
          </div>

          <div className='absolute w-full h-full flex justify-between items-center flex-col'>
            <div></div>
            <div className='w-[300px] h-[30%] bg-illumer bg-center bg-contain bg-no-repeat md:w-[450px] lg:w-[530px]'></div>
            <p className='text-[14px] text-white w-[90%] text-center pb-[30px] md:w-[50%] md:text-[20px]'>DESDE 1986, CONSTRUYENDO RELACIONES DURADERAS, BASADAS EN LA CONFIANZA; CON EFICIENCIA Y TRANSPARENCIA.</p>
          </div>
        </div>

      </section>

      <div className='w-screen h-full flex justify-center mb-6 md:h-[330px] lg:h-[450px]' id='brand'>
        <div className='w-full h-full flex flex-col justify-center items-center md:bg-center md:w-[80%]'>
          <h2 className='w-full text-center text-[27px] mb-6 mt-2 text-redclear font-bold md:mt-20 lg:mt-0'>NUESTRAS MARCAS:</h2>
          <div className='w-full h-full flex flex-col justify-center items-center md:flex-row'>

            <div className='w-full h-full flex items-center justify-center mb-6 md:mb-0 md:w-[30%]'>
              <div className='w-full h-[190px] bg-logo-7 bg-contain bg-center bg-no-repeat md:h-full xl:w-[80%] 2xl:w-[60%]'></div>
            </div>

            <div className='w-full h-full flex justify-end
                  md:w-[70%] md:h-[330px] md:items-center lg:items-start '>
              <div className='w-[95%] h-full flex justify-between items-center flex-col space-y-4 md:h-[50%] lg:h-full md:flex-row md:space-y-0'>

                <div className='w-[300px] h-full flex justify-between items-center flex-col space-y-8 md:space-y-0'>

                  <div className='w-full h-[50px] bg-logo-1 bg-contain bg-center bg-no-repeat md:w-[90%] md:h-[45%] md:mt-2 xl:mt-4'></div>
                  <div className='w-full h-[50px] bg-logo-2 bg-contain bg-center bg-no-repeat md:w-[90%] md:h-[45%]'></div>

                </div>

                <div className='w-[300px] h-full flex justify-between items-center flex-col space-y-6 md:space-y-0'>

                  <div className='w-[70%] h-[100px] bg-logo-3 bg-contain bg-center bg-no-repeat md:w-[90%] md:h-[45%]'></div>
                  <div className='w-full h-[80px] bg-logo-4 bg-contain bg-center bg-no-repeat md:w-[90%] md:h-[45%]'></div>

                </div>

                <div className='w-[300px] h-full flex justify-between items-center flex-col md:items-end'>

                  <div className='w-full h-[130px] bg-logo-5 bg-contain bg-center bg-no-repeat md:w-[90%] md:h-[45%]'></div>
                  <div className='w-[220px] h-[100px] bg-logo-6 bg-contain bg-center bg-no-repeat md:w-[90%] md:h-[45%]'></div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>



      <div className='w-screen h-[350px] bg-products-mobile bg-[#F0F0F0] mt-16 bg-contain bg-no-repeat bg-bottom uppercase
              md:bg-center md:h-[350px] lg:h-[450px] md:bg-products'>
        <div className='w-full h-full flex justify-start items-center flex-col md:justify-center pt-4 md:pt-6
              md:items-start md:flex-row lg:pt-12'>
          <h2 className='text-[27px] font-bold text-redclear' id='products'>NUESTROS PRODUCTOS:</h2>
          <a className='bg-browndark text-[18px] px-3 py-1 rounded-3xl text-white mt-1 font-bold
              ml-4' href=''>Ver más</a>
        </div>

      </div>

      <section className='w-screen h-full flex justify-center items-center flex-col mb-12 md:mb-0 md:h-[380px]'>
        <h2 className='text-[27px] font-bold text-redclear mb-11 mt-6 md:mt-0'>NUESTROS SERVICIOS: </h2>

        <div className='w-[90%] h-full flex justify-center items-center flex-col md:flex-row md:h-[210px]' id='services'>
          <div className='w-full h-[130px] bg-browndark flex justify-center items-center space-x-5 md:h-[70%] xl:h-full'>
            <div className='w-[20%] h-full bg-icon-1 bg-contain bg-center bg-no-repeat'></div>
            <h6 className='w-[40%] h-full flex justify-center items-center text-[20px] font-bold text-white 
                md:w-[40%] md:text-[20px] xl:text-[27px] xl:w-[30%]'>Planes de Negocios</h6>
          </div>
          <div className='w-full h-[130px] bg-redclear flex justify-center items-center space-x-5 md:h-[70%] xl:h-full'>
            <div className='w-[20%] h-full bg-icon-2 bg-contain bg-center bg-no-repeat'></div>
            <h6 className='w-[40%] h-full flex justify-center items-center text-[20px] font-bold text-white 
                md:w-[50%] md:text-[20px] xl:text-[27px] xl:w-[40%]'>Consultoria Internacional</h6>
          </div>
          <div className='w-full h-[130px] bg-browndark flex justify-center items-center space-x-5 md:h-[70%] xl:h-full'>
            <div className='w-[20%] h-full bg-icon-3 bg-contain bg-center bg-no-repeat'></div>
            <h6 className='w-[40%] h-full flex justify-center items-center text-[20px] font-bold text-white 
                  md:w-[50%] md:text-[20px] xl:text-[27px] xl:w-[40%]'>Representación Internacional</h6>
          </div>
        </div>
      </section>

      <EmailContact/>

    </>
  );
}