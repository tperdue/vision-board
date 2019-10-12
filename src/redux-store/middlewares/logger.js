const logger = store => next => action => {
    console.log(`Dispatching: ${action}`);
    let result = next(action);
    console.log('next state', store.getState());
    return result;


}

export default logger;