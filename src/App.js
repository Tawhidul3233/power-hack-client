import logo from './logo.svg';
import './App.css';
import Main from './Page/Layout/Main';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Routes/Router';
import toast, { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
       <Toaster/>
    </div>
  );
}

export default App;
