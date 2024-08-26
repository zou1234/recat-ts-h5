import DynamicRouter from "./components/dynamic-routes";
import {BrowserRouter} from "react-router-dom";
import {Suspense} from "react";

const App = () => {
    return (
        <div className="App">
            <Suspense fallback={<div>加载中...</div>}>
                <BrowserRouter>
                    <DynamicRouter/>
                </BrowserRouter>
            </Suspense>
        </div>
    )
}
export default App
