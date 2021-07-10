import React, { useState, useEffect } from 'react';
import './App.css';
import db from './firebase';

function App() {
  const [posts, setPosts] = useState(
    []
  );
  useEffect(() => {
    db.collection('variants').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc=>doc.data()))
    })

  }, [])
  return (
    <div className="App">
        <h1>products</h1>{
          posts.map((pro)=>(
            <div>
            <h4>{pro.variants}x</h4>
            <h4>{pro.inventory}x</h4>
            <h4>{pro.sku}x</h4>
        </div>
          ))
        }
        
    </div>
  );
}

export default App;