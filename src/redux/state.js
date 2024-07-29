import {rerenderEntireTree} from "../render";
let store = {
    state: {
        students: [
            {name:'Kate', gender: 'woman', glasses: 'no'},
            {name:'Maksim', gender: 'man', glasses: 'yes'}
        ],
        styleOfStudentButton: {

        },
    },
    addStudents: (name, gender,activity, glasses, height) => {
        let newStudent = {
            name: name,
            gender: gender,
            glasses: glasses
        }
        store.state.students.push(newStudent)
        rerenderEntireTree(store);
    },
    changeGenderColor: () => {
        if (store.state.students.gender === 'man') {
            store.state.styleOfStudentButton.gender = 'blue';
        } else {
            store.state.styleOfStudentButton.gender = 'pink';
        }
    }
}

export default store;
