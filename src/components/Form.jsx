import './styles/FormStyles.css';

const Form = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
      <form>
        <label htmlFor="name">Your name</label>
        <input type="text" />
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="subject">Subject</label>
        <input type="text" />
        <label htmlFor="details">Details</label>
        <textarea rows="6" placeholder="Type a short message here" />
        <button className="btn" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
