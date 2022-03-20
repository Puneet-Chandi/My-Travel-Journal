import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Place from './components/Place'
import data from './data'

function App() {
  return (
    <div className="App">
      <Navbar/>
      {dataFeed}
    </div>
  );
}

const dataFeed = data.map(dataObj=>{return( 
                                      <div>
                                        <Place 
                                        placeInfo={dataObj}
                                        />
                                      </div>
                                    )
                                  }
                           );
export default App;
