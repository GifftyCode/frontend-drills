
function ProfileCard ({name, city, aspiration}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{city}</p>
      <p>{aspiration}</p>
    </div>
  )
}




function App () {
  return (
    <div>
      <ProfileCard name="Gift" city="Abuja" aspiration="Billioniar in Dollars and Bitcoin"/>
<ProfileCard name="Sam" city="LA" aspiration="Most Famous embryologyst"/>
<ProfileCard name="Chiamak" city="Lagos" aspiration="Wealthiest woman in the world"/>
    </div>
  )
}

export default App;