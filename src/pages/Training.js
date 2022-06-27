import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import TrainingContent from '../components/TrainingContent';

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
