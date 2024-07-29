import React from "react";
import s from './Table.module.css';

const Table = (props) => {
    const fields = [];
    for (let i = 0; i < props.state.cols; i++) {
        for (let i = 0; i < props.state.rows; i++) {
            fields.push(<button></button>);
            fields.push(' ');
        }
        fields.push(<div></div>)
    }
    return (
        <div className={s.Table}>
            <h3>Схема класса</h3>
            {fields}
        </div>
    )
}
export default Table;