let num = 22;


const App = () => {
  return (
    <div>
      <div>
        {num % 2 === 0 && <div>{num} je paran broj!</div>}
        {num % 2 !== 0 && <div>{num} je neparan broj!</div>} 
      </div>
    </div>
  );
}

export default App;
