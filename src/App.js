// Importing File/Components 
import "./App.scss";
import Button from "./components/common/Button/Button";


const App = () => {
  return (
    <>
      <Button 
        label="Custom Btn"
        handleClick={() => console.log("btn clicked")}
      />
    </>
  )
}

export default App;