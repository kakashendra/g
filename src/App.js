import React from "react";
import InputPage from "./components/Input/InputPage";
import Students from "./components/Students/Students";
import Table from './components/Table/Table';
import StudentsList from "./components/students list/studentsList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import s from './App.module.css';
import AddStudent from "./components/AddStudent/AddStudent";

const App = (props) => {
    return (
        <BrowserRouter>
        <div className={s.Pages}>
            <Routes>
                <Route path="/" element={
                    <div className={s.AddStudent}>
                        <AddStudent store={props.store}/>
                        <StudentsList store={props.store}/>
                        <InputPage store={props.store}/>
                    </div>
                    }/>
                <Route path="/table" element={
                    <div className={s.secondPage}>
                        <div className={s.Table}><Table state={props.store.state}/></div>
                        <div>
                            {/* <div  className={s.AddStudent}><AddStudent store={props.store}/> </div> */}
                            <div className={s.Students}><Students store = {props.store}/></div>
                        </div>
                    </div>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}


export default App;
