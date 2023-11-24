import React, { useState, useEffect } from 'react';

const Comment = ({ comment, setChatData, myReplies, stateObject}) => {
  const [replyText, setReplyText] = useState('');
  const [replies, setReplies] = useState(myReplies);

  const handleReply = () => {
    if (replyText.trim() !== '') {
      setReplies([...replies,replyText ]);
      setReplyText('');
    }
  };

  useEffect(() => {
    // Load chat history from local storage on component mount
      setChatData(comment, replies);
    
  }, [replies]);

  return (
    <>
    <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
      <p>{comment}</p>
      <div>
        <input
          type="text"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Reply..."
        />
        <button onClick={handleReply}>Reply</button>
      </div>
      {replies.map((reply, index) => (
        <Comment key={index} comment={reply} setChatData={setChatData} myReplies={reply in stateObject?stateObject[reply]:[]} stateObject={stateObject}/>
      ))}
    </div>
    </>
  );
};

export default Comment;
