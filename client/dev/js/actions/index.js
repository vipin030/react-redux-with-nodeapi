import Axios from 'axios';

const apiUrl = "http://localhost:3000/";
export const selectStudent = (student) => {
    console.log("You clicked on student: ", student.name);
    return {
        type: 'STUDENT_SELECTED',
        payload: student
    }
};

export const listStudentSuccess = (student) => {
	console.log(JSON.stringify(student))
	return {
		type: 'STUDENT_LIST',
		payload: student
	}
}

export const listStudent = () => {
  return(dispatch)=>{
    return Axios.get(apiUrl+'Students/')
      .then(response => {
        console.log("data success", response.data)
        dispatch(listStudentSuccess(response.data));
      })
      .catch(error => {
        alert("data failed...");
        throw(error);
      });
  }
}

export const createStudentSuccess = (student) => {
  return {
    type: 'STUDENT_CREATE',
    payload: student
  }
}

export const createStudent = (student) => {
  return (dispatch) => {
    return Axios.post(apiUrl+'Students', student)
      .then(response => {
        console.log("response data:",response);
        dispatch(createStudentSuccess(response.data))
      })
      .catch(error => {
        aler(error)
        throw(error);
      });
  };
}

export const setFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    payload: filter
  }
}
