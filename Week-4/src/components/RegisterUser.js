import React, { useState, useCallback } from 'react';

function RegisterUser() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: ''
  });

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }, []);

  return (
    <form>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Phone number:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </label>
      <label>
        DOB :
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit Now</button>
    </form>
  );
}

export default RegisterUser;
