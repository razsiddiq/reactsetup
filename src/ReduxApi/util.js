export const createAction = (type, ...args) => {
    return function (...argsvalues) {
        const action = { type };
        args.forEach(function (key, index) {
            action[args[index]] = argsvalues[index];
        });
        return action;
    };
};

// "precommit": "NODE_ENV=production lint-staged"