import "./index.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Dashboard } from "./component/Dashboard";
import { Signin } from "./component/Signin";

function App(){
    return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}>      {/* Parent Route */}
        </Route>        
        <Route path="/signin" element={<Signin/>}/>  {/* Child Routes */}
      </Routes>
    </BrowserRouter>
}

export default App;

// "https://www.youtube.com/embed/FxgM9k1rg0Q?si=_fFWNyoaGbMDeZVN"
// "https://www.youtube.com/emded/FxgM9k1rg0Q"