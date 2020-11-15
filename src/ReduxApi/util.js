export const createAction = (type, ...args) => {
    return function (...argsvalues) {
        let action = { type }
        args.forEach(function (key, index) {
            action[args[index]] = argsvalues[index];
        })
        return action;
    }
}