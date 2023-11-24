import './App.css';
import Navbar from './components/Navbar';
import TextareaPage from './components/TextareaPage'; 
import React, { useState, useEffect } from 'react';
import Comment from "./components/Comment";

function App() {

  const blueBackgroundStyles = {
    backgroundColor: 'blue',
    color: 'white', // You can add more styles as needed
    padding: '20px',
    height: '100vh',
  };


  const [stateObject, setStateObject] = useState(localStorage.getItem('myval')?JSON.parse(localStorage.getItem('myval')):{});
  const [posts, setPosts] = useState("" in stateObject?stateObject[""]:[]);
  const setChatData = (comment, replies) => {
    setStateObject((prev) => ({
      ...prev, // Copy the existing state
      [comment]: replies, // Add the new key-value pair
    }));
    
  }

  useEffect(() => {
    // Load chat history from local storage on component mount
    localStorage.setItem('myval',JSON.stringify(stateObject));
    
  }, [stateObject]);

  useEffect(() => {
    // Load chat history from local storage on component mount
    setStateObject((prev) => ({...prev,"": posts}));
    
  }, [posts]);
  
  const setPostsVal = (text) => {
    setPosts([...posts,text]);
  }
  
  return (
    <div className="App" style={blueBackgroundStyles}>
      <Navbar/>
      <TextareaPage setPostsVal={setPostsVal} />
      <div>
        {posts.length > 0 && posts.map((post) => (
          <div  style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', color:'black', backgroundColor: 'white' }}>
            <Comment comment={post} setChatData={setChatData} myReplies={post in stateObject?stateObject[post]:[]} stateObject={stateObject}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
