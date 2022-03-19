import './App.css';
import ThreeCubeMain from "./components/ThreeCubes";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <ThreeCubeMain position={[-4, 2, 10]} fov={60}/>
        </>
    );
}

export default App;
