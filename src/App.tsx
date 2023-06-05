import VendorsListPage from "./modules/vendors-list/view";
import { Provider } from "react-redux";
import { store } from "./shared/services/store";

function App() {
  return (
    <Provider store={store}>
      <VendorsListPage />
    </Provider>
  );
}

export default App;
