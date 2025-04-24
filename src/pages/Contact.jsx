import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'Name is required.';
    if (!form.email) errs.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Email is invalid.';
    if (!form.message) errs.message = 'Message is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBlur = e => {
    validate();
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <h1>Contact Me</h1>
      <input name="name" placeholder="Name" onBlur={handleBlur} onChange={handleChange} />
      {errors.name && <p>{errors.name}</p>}

      <input name="email" placeholder="Email" onBlur={handleBlur} onChange={handleChange} />
      {errors.email && <p>{errors.email}</p>}

      <textarea name="message" placeholder="Message" onBlur={handleBlur} onChange={handleChange} />
      {errors.message && <p>{errors.message}</p>}

      <button type="submit" onClick={e => { e.preventDefault(); if (validate()) alert("Submitted!") }}>Send</button>
    </form>
  );
}
