import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {ByMe} from "./components/ByMe/ByMe";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Contacts} from "./components/contacts/Сontacts";
import {Footer} from "./components/footer/Footer";
import {Stars} from "./components/Stars/Stars";


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <ByMe/>
            {/*<Stars/>*/}
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>

    )
}
export default App;
