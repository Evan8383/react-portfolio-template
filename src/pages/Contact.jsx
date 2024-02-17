import React, { useState } from 'react';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}`);
    setSubmitted('Thank you for your submission!');
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="p-6 h-screen m-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col">
          <span className="mb-1">First Name:</span>
          <input type="text" className="border p-2" value={firstName} onChange={e => setFirstName(e.target.value)} required />
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Last Name:</span>
          <input type="text" className="border p-2" value={lastName} onChange={e => setLastName(e.target.value)} required />
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Email:</span>
          <input type="email" className="border p-2" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Message:</span>
          <textarea className="border p-2" value={message} onChange={e => setMessage(e.target.value)} required />
        </label>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" type="submit">Submit</button>
      </form>
      {submitted && <p className="mt-4 text-green-500">{submitted}</p>}
    </div>

  );
}

export default Contact;