import About from "../About/About";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Service from "../Service/Service";

const Home = () => {
    return (
        <div className="bg-no-repeat  overflow-hidden" style={{
            background: 'rgba(0, 0, 0, 0.5) url("https://img.freepik.com/premium-vector/blockchain-concept-banner-with-abstract-geometric-polygonal-with-connecting-dots-lines-science-technology-background-vector-illustration_41981-2332.jpg?w=740")',
            backgroundSize: "cover"
        }}>
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
