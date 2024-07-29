import React from 'react';
import s from './studentsList.module.css';
import imgGlasses from '../Students/glasses.png';

// function Bar() {
//     return null;
// }

const StudentsList = (props) => {
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
            glasses.push(<img className={s.imgGlasses} src={imgGlasses} alt='bjh'/>)
        }

            return (
                        <div className={s.border} style={buttonStyle}>
                            <div className={s.student}>
                                <div>{st.name}</div>
                                {glasses}
                            </div>
                        </div>
            )
    });

    return (
        <div>
            {listOfStudents}
        </div>
    )
}

export default StudentsList;
