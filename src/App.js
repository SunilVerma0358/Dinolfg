import HeroSection from "./components/HeroSection";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutSection from "./components/AboutSection";
import Tokenomics from "./components/Tokenomics";
import UtilityAndUsecase from "./components/UtilityAndUsecase";
import Roadmap from "./components/Roadmap";
import AccordionFaq from "./components/AccordionFaq";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";

function App() {
    const [Loader, setLorder] = useState(false);
    useEffect(() => {
        setLorder(true);
        setTimeout(() => {
            setLorder(false);
        }, 4000);
    }, []);
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);
    return ( <
        >
        <
        > {
            Loader ? ( <
                > { " " } <
                Preloader / > { " " } <
                />
            ) : ( <
                div className = "bg-[#09655A]" > { " " } <
                HeroSection / >
                <
                AboutSection / >
                <
                Tokenomics / >
                <
                UtilityAndUsecase / >
                <
                Roadmap / >
                <
                AccordionFaq / > < Footer / > < BackToTop / >
                <
                /div>
            )
        } { " " } <
        />{" "} <
        />
    );
}

export default App;