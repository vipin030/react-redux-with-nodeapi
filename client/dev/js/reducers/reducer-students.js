export default function (state = [], action) {
    switch(action.type){
    	case 'STUDENT_CREATE':
            return [
            ...state,
            Object.assign({}, action.payload)
            ];
            break;
        case 'STUDENT_UPDATE':
            let index = state.findIndex(data=>data.id==action.payload.id);
            return [
                ...state.slice(0,index),state[index]=action.payload, ...state.slice(index+1)
            ];
        case 'STUDENT_LIST':
            return action.payload;
            break;
        default:
            return state;

    }
}
