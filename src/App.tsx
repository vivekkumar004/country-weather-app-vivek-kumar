import CountrySearchInput from './components/CountrySearchInput';
import { BrowserRouter, Routes,useNavigate, Route, Link } from "react-router-dom";
import PrintCountryDetails from './pages/PrintCountryDetails';
import PrintCapitalDetails from './pages/PrintCapitalDetails';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountrySearchInput/>}/>
        <Route path="countryDetails" element={<PrintCountryDetails/>}/>
        <Route path="/countryDetails/capitalDetails" element={<PrintCapitalDetails/>}/>
      </Routes>
      </BrowserRouter>
  );
}


export default App;
