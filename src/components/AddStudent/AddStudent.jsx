import React from 'react';
import s from "./AddStudent.module.css";

const AddStudent = (props) => {
    

    let name= React.createRef();
    let gender= React.createRef();
    let glasses= React.createRef();
    const addStudent = () => {
        props.store.addStudents(
            name.current.value,
            gender.current.value,
            glasses.current.value)
        

    }

    return (
        <div className={s.Page}>
            <h3>Добавить ученика</h3>
            <div>
                <input className='name' type="text" required="required" placeholder='name' ref={name}></input>
            </div>

            <div className={s.gender}>
                    <select name="gender" ref={gender}>
                        onChange={props.store.changeGenderColor}
                        <option value="">-- пол --</option>
                        <option value="man">мужской</option>
                        <option value="woman">женский</option>
                    </select>
            </div>

            <div className={s.glasses}>
                    <select name="glasses" ref={glasses}>
                        <option value="">-- очки --</option>
                        <option value="yes">да</option>
                        <option value="no">нет</option>
                    </select>
            </div>

            <div className={s.addStudents}>
                <button className={s.addStudents} type="submit" onClick={addStudent}>Добавить</button>
            </div>
        </div>
    );
}
export default AddStudent;