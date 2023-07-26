import React, { useState, useEffect } from 'react';

const Message = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showWarning, setShowWarning] = useState({
    name: false,
    email: false,
    message: false
  });

  const [hoverOff, setHoverOff] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleMouseEnter = (e) => {
    const { name, value } = e.target;
    setHoverOff((prevHover) => ({
      ...prevHover,
      [name]: false
    }));
  
  };

  const handleMouseLeave = (e) => {
    const { name, value } = e.target;
    setHoverOff((prevHover) => ({
      ...prevHover,
      [name]: true
    }));
    if (value === '') {
        setShowWarning((prevWarning) => ({
          ...prevWarning,
          [name]: true
        }));
      }

    if (formData[name] !== '') {
      setShowWarning((prevWarning) => ({
        ...prevWarning,
        [name]: false
      }));
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWarning((prevWarning) => ({
        name: hoverOff.name && formData.name === '' ? false : prevWarning.name,
        email: hoverOff.email && formData.email === '' ? false : prevWarning.email,
        message: hoverOff.message && formData.message === '' ? false : prevWarning.message
      }));
    }, 2000);

    return () => clearTimeout(timeout);
  }, [hoverOff, formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const emailBody = `Message from: ${name}\n\n${message}`;
    const mailtoLink = `mailto:email@email.com?subject=Message from ${name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} style={{backgroundColor: "#2f3d43d1",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "5%",
        margin: "auto",
        marginTop:"3%",
        padding: "2%"}}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {showWarning.name && (
          <span style={{ color: 'red',position:'absolute',left:'47%' }}>{`Name is required!`}</span>
        )}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {showWarning.email && (
          <span style={{ color: 'red',position:'absolute',left:'47%' }}>{`Email is required!`}</span>
        )}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {showWarning.message && (
          <span style={{ color: 'red',position:'absolute', left:'47%' }}>{`Message is required!`}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Message;
