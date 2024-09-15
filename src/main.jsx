import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationStack from './Tasks/Navigation/NavigationStack.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <NavigationStack/>  */}
    <App/>
    
  </StrictMode>
)

