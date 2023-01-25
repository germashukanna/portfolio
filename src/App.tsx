import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {ByMe} from "./components/byMe/ByMe";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Footer} from "./components/footer/Footer";
import {Contacts} from "./components/contacts/Сontacts";


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
