let num = 22;


const App = () => {
  return (
    <div>
      <div>
        {num % 2 === 0 && <p>{num} je paran broj!</p>}
        {num % 2 !== 0 && <p>{num} je neparan broj!</p>} 
      </div>
    </div>
  );
}

export default App;
