import logo from './logo.svg';
import './App.css';
import Main from './Main';

function App() {
  return (
    <div className="App">
          <Main color={"black"} code={"#000000"} name={"Black"}/>

          <Main color={"red"} code={"#D0312D"} name={"Red"}/>

          <Main color={"BurlyWood "} code={"#DEB887"} name={"Burly Wood"}/>

          <Main color={"Cyan "} code={"	#00FFFF"} name={"Cyan "} />

          <Main color={"darkMagenta"} code={"#8B008B"} name={"Dark Magenta"}/>

          <Main color={"Pink"} code={"#FF1493e"}
          name={"Pink"} />

          <Main color={"blue"} code={"#00BFFF"} name={"Blue"}/>

         <Main color={"DimGray"} code={"#696969"} name={"Dim Gary"}/>

         <Main color={"Indigo"} code={"#4B0082"} name={"Indigo"}/>

         <Main color={"GreenYellow"} code={"#ADFF2F"} name={"Green Yellow"}/>
         

    </div>
  );
}

export default App;
