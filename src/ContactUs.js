import { useState } from 'react';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [comments, setComments] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handlePhoneTypeChange = (e) => {
        setPhoneType(e.target.value);
    };

    const handleCommentsChange = (e) => {
        setComments(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const contactUsInformation = {
            name,
            email,
            phone,
            phoneType,
            comments,
            submittedOn: new Date()
        };

        console.log(contactUsInformation);

        // Reset the form state.
        setName('');
        setEmail('');
        setPhone('');
        setPhoneType('');
        setComments('');
    };

    return (
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input 
              id='name' 
              type='text' 
              value={name} 
              onChange={handleNameChange} 
            />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input 
              id='email' 
              type='text' 
              value={email} 
              onChange={handleEmailChange} 
            />
          </div>
          <div>
            <label htmlFor='phone'>Phone:</label>
            <input
              id='phone'
              name='phone'
              type='text'
              onChange={handlePhoneChange}
              value={phone}
            />
          </div>
          <div>
            <label htmlFor='phoneType'>Phone Type:</label>
            <select
              id='phoneType'
              name='phoneType'
              onChange={handlePhoneTypeChange}
              value={phoneType}
            >
              <option value='' disabled>Select a phone type...</option>
              <option value='home'>Home</option>
              <option value='work'>Work</option>
              <option value='mobile'>Mobile</option>
            </select>
          </div>
          <div>
            <label htmlFor='comments'>Comments:</label>
            <textarea
              id='comments'
              name='comments'
              onChange={handleCommentsChange}
              value={comments}
            />
          </div>
          <button type="submit">Submit</button> {/* Changed to type="submit" */}
        </form>
      </div>
    );
}

export default ContactUs;
