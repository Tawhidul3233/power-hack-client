import logo from './logo.svg';
import './App.css';
import Navbar from './Page/Components/Navbar/Navbar';
import Header from './Page/Components/Header/Header';
import BillingTable from './Page/Components/BillingTable/BillingTable';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <BillingTable></BillingTable>
    </div>
  );
}

export default App;
