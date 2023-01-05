 
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route';

function App() {
  return (
    <div className='bg-gray-200'>
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
