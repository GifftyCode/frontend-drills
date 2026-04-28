import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);
  let [hasLiked, setHasLiked] = useState(false);

  return (
    <div>
      <h4>{likes}</h4>
      <button
        disabled={likes >= 1}
        onClick={() => {
          setLikes(likes + 1);
          setHasLiked(true);
        }}
      >
        Like
      </button>
      {hasLiked ? <p>You liked this</p> : ""}
    </div>
  );
}

export default App;
