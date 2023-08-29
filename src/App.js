
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route';
 
function App() {

  return (
    <div className='bg-gray-300 break-all'>
      
      <RouterProvider router={router}/>
       
    </div>
  );
}

export default App;
