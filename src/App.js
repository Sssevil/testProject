import './App.css'
import PostPage from "./pages/postPage/PostPage";
import ModalWindow from "./componentns/modal/ModalWindow";
import ModalProvider from "./context/ModalProvider";
import ModalPage from "./pages/modalPage/ModalPage";



function App() {

    return (
        <div className="App">
            <ModalProvider>
                <h1>Итоговое задание</h1>
                <PostPage/>
                <ModalPage/>
            </ModalProvider>
        </div>
    )
}

export default App;






