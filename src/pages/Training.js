import Footer from '../components/footer/Footer';
import HeroImage from '../components/hero/HeroImage';
import Navbar from '../components/navbar/Navbar';
import TrainingContent from '../components/training/TrainingContent';

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="TRAINING" text="Pre-Flight & In-Flight Training" />
      <TrainingContent />
      <Footer />
    </div>
  );
};

export default Training;
