import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse
    gap-10 max-container ">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          <span className='text-coral-red'>Speciale </span>Aanbieding
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Ga op een winkelreis die uw ervaring opnieuw definieert met
        onverslaanbare deals. Van eersteklas selecties tot ongelooflijke besparingen, wij
        bieden ongeëvenaarde waarde waarmee wij ons onderscheiden.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Navigeer door een rijk van mogelijkheden die zijn ontworpen om uw unieke
        wensen te vervullen en de hoogste verwachtingen te overtreffen. Uw reis met ons is
        niets minder dan uitzonderlijk.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Bekijk details' iconURL={arrowRight} />
          <Button 
            label='Lees meer' 
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray" 
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer;
