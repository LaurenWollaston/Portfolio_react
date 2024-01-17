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
  
      // Clear the warning after 2 seconds
      setTimeout(() => {
        setShowWarning((prevWarning) => ({
          ...prevWarning,
          [name]: false
        }));
      }, 2000);
    } else {
      // If the field is not empty, immediately clear the warning
      setShowWarning((prevWarning) => ({
        ...prevWarning,
        [name]: false
      }));
    }
  };
  
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setHoverOff((prevHover) => ({
      ...prevHover,
      [name]: true
    }));
  
    if (value === '' && (formData[name] !== '' || !showWarning[name])) {
      setShowWarning((prevWarning) => ({
        ...prevWarning,
        [name]: true
      }));
    } else if (value !== '') {
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
  
    // Check if any of the fields are empty
    if (name === '' || email === '' || message === '') {
      // Show the error messages for empty fields (if not already shown)
      setShowWarning((prevWarning) => ({
        name: name === '' ? true : prevWarning.name,
        email: email === '' ? true : prevWarning.email,
        message: message === '' ? true : prevWarning.message,
      }));
  
      // Do not proceed with submission
      return;
    }
  
    // All fields are filled, proceed with submission
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
          onBlur={handleBlur} 
        />
        {showWarning.name && (
          <span style={{ color: '#d96f6f',position:'absolute',left:'47%', marginTop:'5px' }}>{`Name is required!`}</span>
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
          onBlur={handleBlur} 
        />
        {showWarning.email && (
          <span style={{ color: '#d96f6f',position:'absolute',left:'47%',  marginTop:'5px' }}>{`Email is required!`}</span>
        )}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur} 
        />
        {showWarning.message && (
          <span style={{ color: '#d96f6f',position:'absolute', left:'47%', marginTop: '5px' }}>{`Message is required!`}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Message;
