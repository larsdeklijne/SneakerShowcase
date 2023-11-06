import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Schoenenaanbieding'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Speciale </span>
          Aanbieding
        </h2>
        <p className='mt-4 info-text'>
          Ga op een winkelreis die jouw ervaring herdefinieert met onverslaanbare aanbiedingen. Van eersteklas selecties tot ongelooflijke besparingen bieden wij ongeëvenaarde waarde die ons onderscheidt.
        </p>
        <p className='mt-6 info-text'>
          Navigeer door een wereld van mogelijkheden die zijn ontworpen om aan jouw unieke verlangens te voldoen en de hoogste verwachtingen te overtreffen. Jouw reis met ons is niets minder dan uitzonderlijk.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Nu winkelen' iconURL={arrowRight} />
          <Button
            label='Lees meer'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
