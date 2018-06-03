export default function(state=null, action) {
    switch(action.type) {
        case "CONTACT_SELECTED":
            return action.payload;
            break;
        case "SEARCH":
            return action.payload;
            break;
        default:
            return state;
    }
};