import './App.css';
import ThreeCubeMain from "./components/ThreeCubes";
import Header from "./components/Header";

function App() {
    const transition = {
        duration: .75,
        ease: 'easeInOut'
    }
    const variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    }

    return (
        <>
            <Header />
            <ThreeCubeMain position={[-4, 2, 10]} fov={60}/>
        </>
    );
}

export default App;
