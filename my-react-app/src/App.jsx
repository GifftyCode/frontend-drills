const isLoggedIn = true;
const isPremiumUser = true;
const name = "Gift";

function App() {
  if (!isLoggedIn) {
    return <h1>Access Denied... Please log in</h1>;
  }

  return (
    <div>
      <h1>Welcome back {name}!</h1>
      {isPremiumUser && <p>Premium Member...</p>}
      {isPremiumUser ? <p>You have full access</p> : <p>Upgrade to premium</p>}
    </div>
  );
}

export default App;
