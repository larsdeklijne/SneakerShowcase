import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Wat Zeggen
        <span className="text-coral-red"> Onze </span>
        Klanten?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Luister naar authentieke verhalen van onze tevreden klanten over hun
          uitzonderlijke ervaringen met ons.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard 
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews;