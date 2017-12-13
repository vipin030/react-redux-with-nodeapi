export default function (state = [], action) {
    switch(action.type){
    	case 'STUDENT_CREATE':
            return [
            ...state,
            Object.assign({}, action.payload)
            ];
            break;
        case 'STUDENT_LIST':
            return action.payload;
            break;
        default:
            return state;

    }
}
