import React from 'react';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';

function App() {
  
  return (
    <div className="App">
      <div className="navbar">
        <h2 className="center ">Post It</h2>
        </div>
        <PostForm />
        <AllPost />
    </div>
    );
}

export default App;
