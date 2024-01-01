import About from "../About/About";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Service from "../Service/Service";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Main></Main>
            <About></About>
            <Service></Service>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;