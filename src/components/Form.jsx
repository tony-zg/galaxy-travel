import { useState } from 'react';
import './styles/FormStyles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    !name || !email || !subject || !message
      ? toast.warn('Please provid value in each input field')
      : (async () => {
          try {
            const docRef = await addDoc(collection(db, 'users'), {
              name: name,
              email: email,
              subject: subject,
              message: message
            });
            // console.log('Document written with ID: ', docRef.id);
            toast.success(
              `Message id ${docRef.id} has been submitted successfully`
            );
          } catch (error) {
            // console.error('Error adding document: ', e);
            toast.error('Please provid value in each input field');
          }
        })();
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="form">
      <ToastContainer
        position="bottom-center"
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
          onChange={(e) => setName(e.target.value)}
        />
        <label name="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Please enter"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Subject</label>
        <input
          name="subject"
          type="text"
          placeholder="Please enter"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <label>Message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Leave a message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="btn" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
