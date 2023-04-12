import React, { useState, useEffect, useCallback } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(prevCount => prevCount + 1);
  }, [name, email, phone, message]);

  const debounce = useCallback((fn, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    }
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMsgChange = (event) => {
    setMessage(event.target.value);
  };

  const handleNameChangeDebounce = debounce(handleNameChange, 500);
  const handleEmailChangeDebounce = debounce(handleEmailChange, 500);
  const handlePhoneChangeDebounce = debounce(handlePhoneChange, 500);
  const handleMsgChangeDebounce = debounce(handleMsgChange, 500);

  return (
    <div className='d41'>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChangeDebounce} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChangeDebounce} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={handlePhoneChangeDebounce} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={handleMsgChangeDebounce} />
      </label>
      <br />
      <p>Component has rendered {renderCount} times.</p>
    </div>
  );
}

export default Form;
