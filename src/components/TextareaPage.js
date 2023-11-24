import React, { useState } from 'react';

const TextareaPage = ({setPostsVal}) => {
  const [textValue, setTextValue] = useState("");

  const handleTextAreaChange = (event) => {
    setTextValue(event.target.value);  
  };

  const handleButtonClick = () => {
    setTextValue("");
    setPostsVal(textValue);
  };

  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">Basic textarea</label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
        onChange={handleTextAreaChange}
        value={textValue}
      />
      <button onClick={()=>{handleButtonClick()}}>POST</button>
    </div>
  );
};

export default TextareaPage;