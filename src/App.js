import "./App.css";
import Video from "./Video";
import { useState, useEffect } from "react";
import db from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // get data from database firestore
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {posts.map((post) => (
          <Video
            url={post.url}
            channel={post.channel}
            description={post.description}
            song={post.song}
            likes={post.likes}
            messages={post.messages}
            shares={post.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
