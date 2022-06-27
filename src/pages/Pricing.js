import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import PricingCart from '../components/PricingCard';

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Pricing" text="Choose your trip" />
      <PricingCart />
      <Footer />
    </div>
  );
};

export default Pricing;
