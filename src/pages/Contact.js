import Footer from '../components/footer/Footer';
import Form from '../components/form/Form';
import HeroImage from '../components/hero/HeroImage';
import Navbar from '../components/navbar/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Contact" text="Contact GLX Travel" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
