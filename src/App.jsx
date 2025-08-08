import { getApps } from "./utils/helper";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const App = () => {
  const CurrentApp = getApps();
  return (
    <BrowserRouter>
      <CurrentApp />
    </BrowserRouter>
  );
};

export default App;
