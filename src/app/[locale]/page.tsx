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
            <div className='absolute w-full h-full bg-black/50'></div>
          </div>

          <div className='absolute w-full h-full flex justify-between items-center flex-col'>
            <div></div>
            <div className='w-[300px] h-[30%] bg-illumer bg-center bg-contain bg-no-repeat md:w-[450px] lg:w-[530px]'></div>
            <p className='text-[14px] font-renogare text-white w-[90%] text-center pb-[30px] md:w-[50%] md:text-[20px]'>
              {t('image-p')}
            </p>
          </div>
        </div>

      </section>

      <div className='w-screen h-full flex justify-center mb-6 md:h-[230px] lg:h-[250px] xl:h-[300px]' id='brand'>
        <div className='w-full h-full flex flex-col justify-center items-center md:bg-center md:w-[80%] xl:w-[60%]'>
          <h2 className='w-full text-center font-renogare text-[27px] mb-6 mt-2 text-redclear font-bold md:mb-0 md:mt-12 lg:mb-6 lg:mt-0'>
            {t('brands')}
          </h2>
          <div className='w-full h-full flex flex-col justify-center items-center md:flex-row lg:h-[90%]'>

            <div className='w-full h-full flex items-center justify-center mb-6 md:mb-0 md:w-[30%]'>
              <div className='w-full h-[110px] bg-logo-7 bg-contain bg-center bg-no-repeat md:h-full md:w-[80%] lg:w-[80%] 2xl:w-[55%]' title='A & I || ANK & ILUMER'></div>
            </div>

            <div className='w-full h-full flex justify-end
                  md:w-[70%] md:h-[330px] md:items-center lg:items-start lg:h-[150px] xl:h-[190px]'>
              <div className='w-full h-full flex justify-between items-center flex-col space-y-4 md:h-[50%] lg:h-full md:flex-row md:space-y-0
                    lg:space-x-4 xl:space-x-12'>

                <div className='w-[300px] h-full flex justify-between items-center space-x-4 md:flex-col md:space-x-0'>

                  <div className='w-full h-[50px] bg-logo-1 bg-contain bg-center bg-no-repeat md:w-[90%] md:h-[45%] md:mt-2 xl:mt-4' title='ADULTSEC'></div>
                  <div className='w-full h-[50px] bg-logo-2 bg-contain bg-center bg-no-repeat md:w-[90%] md:h-[45%]' title='LIMPDENT'></div>

                </div>

                <div className='w-[300px] h-full flex justify-between items-center space-x-4 md:flex-col md:space-x-0'>

                  <div className='w-full h-[100px] bg-logo-3 bg-contain bg-center bg-no-repeat md:w-[90%] md:h-[45%]' title='LADYSEC'></div>
                  <div className='w-full h-[80px] bg-logo-4 bg-contain bg-center bg-no-repeat md:w-[90%] md:h-[45%]' title='PETSEC'></div>

                </div>

                <div className='w-[300px] h-full flex justify-between items-center space-x-4 md:space-x-0 md:flex-col md:items-end'>

                  <div className='w-full h-[130px] bg-logo-5 bg-contain bg-center bg-no-repeat md:w-full md:h-[50%]' title='BABYFRAL'></div>
                  <div className='w-full h-[100px] bg-logo-6 bg-contain bg-center bg-no-repeat md:w-[90%] md:h-[45%]' title='ECO VIDA'></div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>



      <div className='w-screen h-[400px] bg-[#F0F0F0] mt-16 relative flex justify-center items-center uppercase
              md:bg-center md:h-[400px] lg:h-[450px]' title={t('products-legend')}>
        <video src="/images/products-bg-mobile.mp4"
          className='w-full h-full object-contain absolute pt-20 md:hidden'
          autoPlay
          loop
          muted
          playsInline
        >
        </video>

        <video src="/images/products-bg.mp4"
          className='w-full h-full object-fill hidden absolute md:block md:pt-24'
          autoPlay
          loop
          muted
          playsInline
        >
        </video>

        <div className='hidden w-[20%] h-[15%] bg-logo-cert bg-center bg-contain bg-no-repeat absolute 
                top-[4%] right-[2%] md:block lg:top-[8%] lg:right-[3%] lg:w-[15%] 2xl:right-[9.5%]'></div>
        <div className='w-full h-full flex justify-start items-center flex-col md:justify-center pt-4 md:pt-6
              md:items-start md:flex-row lg:pt-12'>
          <h2 className='text-[27px] font-bold font-renogare text-redclear relative' id='products'>
            {t('products')}
          </h2>
          <a className='bg-browndark text-[16px] relative font-renogare px-3 py-1 rounded-3xl text-white mt-1
              ml-4' href='https://ank-ilumer.com/' target='_blank' title={t('more-legend')}>
            {t('more')}
          </a>
        </div>

      </div>

      <section className='w-screen h-full font-renogare flex justify-center items-center flex-col mb-12 md:mb-0 md:h-[380px]'>
        <h2 className='text-[27px] font-bold text-redclear mb-11 mt-6 md:mt-0'>
          {t('services')}</h2>

        <div className='w-[90%] h-full flex justify-center items-center flex-col md:flex-row md:h-[210px]' id='services'>
          <div className='w-full h-[130px] bg-browndark flex justify-center items-center space-x-5 md:h-[70%] xl:h-full'>
            <div className='w-[20%] h-full bg-icon-1 bg-contain bg-center bg-no-repeat'></div>
            <h6 className='w-[40%] h-full flex justify-center items-center text-[20px] font-medium text-white 
                md:w-[40%] md:text-[16px] xl:text-[27px] xl:w-[38%]'>
              {t('serv-1')}</h6>
          </div>
          <div className='w-full h-[130px] bg-redclear flex justify-center items-center space-x-5 md:h-[70%] xl:h-full'>
            <div className='w-[20%] h-full bg-icon-2 bg-contain bg-center bg-no-repeat'></div>
            <h6 className='w-[40%] h-full flex justify-center items-center text-[20px] font-medium text-white 
                md:w-[50%] md:text-[16px] xl:text-[27px] xl:w-[40%]'>
              {t('serv-2')}</h6>
          </div>
          <div className='w-full h-[130px] bg-browndark flex justify-center items-center space-x-5 md:h-[70%] xl:h-full'>
            <div className='w-[20%] h-full bg-icon-3 bg-contain bg-center bg-no-repeat'></div>
            <h6 className='w-[40%] h-full flex justify-center items-center text-[20px] font-medium text-white 
                  md:w-[50%] md:text-[16px] xl:text-[27px] xl:w-[48%] 2xl:w-[44%]'>
              {t('serv-3')}</h6>
          </div>
        </div>
      </section>

      <EmailContact />

    </>
  );
}