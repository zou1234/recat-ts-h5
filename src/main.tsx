import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./store";
import "@/assets/index.scss";
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
