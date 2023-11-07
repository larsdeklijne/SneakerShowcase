import { shoe8 } from "../assets/images";
import { Button } from "../components";

import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Wij leveren jou
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Kwaliteit </span> Schoenen
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Onze zorgvuldig vervaardigde schoenen garanderen premium comfort en stijl en
        zijn ontworpen om uw ervaring naar een hoger niveau te tillen en u ongeëvenaarde
        kwaliteit, innovatie en een vleugje elegantie te bieden.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Onze toewijding aan detail en uitmuntendheid garandeert uw tevredenheid
        </p>
        <div className='mt-11'>
          <Button label='Bekijk schoen'  iconURL={arrowRight}/>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
