import React from "react";
import s from './InputPage.module.css';
import {useNavigate} from "react-router-dom";


const InputPage = (props) => {

    const navigate = useNavigate();

    let rows = React.createRef()
    let cols = React.createRef()

    const createDesks = () => {
        props.store.state.rows = rows.current.value;
        props.store.state.cols = cols.current.value;
        navigate("/table")
    }

    return (
        <div className={s.InputPage}>
            <h3>Количество рядов</h3>
            <input className={s.input} type="number" ref={rows}></input>
            <h3>Количество парт в одном ряду</h3>
            <input type="number" ref={cols}></input>
            <button onClick={createDesks}>Готово</button>
        </div>
    )

}

export default InputPage;