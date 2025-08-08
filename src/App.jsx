import { getApps } from "./utils/helper";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const CurrentApp = getApps();
  return (
    <BrowserRouter>
      <CurrentApp/>
    </BrowserRouter>
  );
};

export default App;
