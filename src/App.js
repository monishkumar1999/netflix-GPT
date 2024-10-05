import { Provider } from "react-redux";
import { Body } from "./Component/Body";
import appStore from "./Component/Utils/AppStore";



function App() {
  return (
    <div >

      <Provider store={appStore}>
      <Body></Body>
      </Provider>

    </div>
  );
}

export default App;
