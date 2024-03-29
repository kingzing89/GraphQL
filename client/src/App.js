import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Routes, Route } from "react-router-dom"
import './App.css';
import spaceXlogo from "./Assets/spaceX.jpg"
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
})
 
    function App() {
      return (
        <div className='mx-4'>
          < img src = { spaceXlogo } style = {{ width: "300px", marginTop: "-100px" }} alt = "SpaceX Logo" />
          <ApolloProvider client={client}>
            <Routes>
              <Route exact path="/" element={<Launches/>} />
              <Route exact path="/launch/:flight_number" element={<Launch/>} />
              {/* Define other routes here */}
            </Routes>
          </ApolloProvider>
        </div>

      );
    }

export default App;
