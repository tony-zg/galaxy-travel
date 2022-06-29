import Footer from '../components/footer/Footer';
import HeroImage from '../components/hero/HeroImage';
import Navbar from '../components/navbar/Navbar';
import PricingCart from '../components/pricing/PricingCard';

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
