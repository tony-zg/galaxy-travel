import { useState } from 'react';
import './form.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Form = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loader, setLoader] = useState(false);

  const { name, email, subject, message } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    !name || !email || !subject || !message
      ? toast.warn('Please provid value in each input field')
      : (async () => {
          try {
            const docRef = await addDoc(collection(db, 'contacts'), {
              inputs
            });

            toast.success(
              `Message id ${docRef.id} has been submitted successfully`
            );
          } catch (error) {
            toast.error('Please provid value in each input field');
          }
        })();
    setTimeout(() => {
      setInputs({ name: '', email: '', subject: '', message: '' });
      setLoader(false);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className="form">
      <ToastContainer
        position="bottom-center"
        autoClose="1000"
        hideProgressBar="true"
        toastStyle={{ backgroundColor: 'rgba(26, 26, 26, 1)' }}
        theme="theme"
      />
      ;
      <form onSubmit={handleSubmit}>
        <label>Your name</label>
        <input
          name="name"
          type="text"
          placeholder="Please enter"
          value={name}
          onChange={handleChange}
        />
        <label name="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Please enter"
          value={email}
          onChange={handleChange}
        />
        <label>Subject</label>
        <input
          name="subject"
          type="text"
          placeholder="Please enter"
          value={subject}
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Leave a message here"
          value={message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn"
          value="submit"
          style={{
            background: loader ? '#ccc' : '',
            cursor: loader ? 'not-allowed' : 'pointer'
          }}
          disabled={loader}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
