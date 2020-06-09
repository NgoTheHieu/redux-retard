const initialState = {
    count: 0,
    currentUser: {
        firstName: 'meow',
        lastName: 'lah'
    },
    color:"blue",
};


const Testreducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                count: state.count - 1,
            };
        case 'RESET':
            return {
                count: 0,
            };
        default:
            return state;
    }
}

export default Testreducer;