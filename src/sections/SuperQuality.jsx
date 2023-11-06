import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Wij Bieden Je
          <span className='text-coral-red'> Superieure </span>
          <span className='text-coral-red'>Kwaliteit </span> Schoenen
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Met premium comfort en stijl zorgen wij ervoor dat onze zorgvuldig vervaardigde schoenen zijn ontworpen om jouw ervaring te verbeteren, en bieden ze ongeëvenaarde kwaliteit, innovatie en een vleugje elegantie.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Onze toewijding aan details en uitmuntendheid garandeert jouw tevredenheid.
        </p>
        <div className='mt-11'>
          <Button label='Bekijk details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='productdetail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
