import React from 'react';
import Draggable from 'react-draggable';
import s from './Students.module.css';
import imgGlasses from './glasses.png';

const Students = (props) => {
    let listOfStudents = props.store.state.students.map (st => {

        let color;
        if (st.gender === 'man') {
            color = '#93c7fc';
        }
        if (st.gender === 'woman') {
            color = '#eaaacf';
        }
        const buttonStyle = {
            background: color,
        }

        const glasses = [];
        if (st.glasses === 'yes') {
            glasses.push(<img className={s.imgGlasses} src={imgGlasses} alt='glasses'/>)
        }

            return (
                <div>
                    <Draggable>
                        <div className={s.border} style={buttonStyle}>
                            <div className={s.student}>
                                <div className={s.studentName}>{st.name}</div>
                                {glasses}
                            </div>
                        </div>
                    </Draggable>
                </div>
            )
    });

    return (
        <div className={s.listOfStudents}>
            <h3>Ученики</h3>
            {listOfStudents}
        </div>
    )
}

export default Students;
