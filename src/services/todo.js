import update from 'immutability-helper';

function getAll() {
    return [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false,
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false,
        },
        {
            id: 3,
            text: 'Build a React App',
            completed: false,
        },
    ];
}

function getItemById(itemId) {
    return getAll().find((item) => item.id === itemId);
}

function updateStatus(items, itemId, completed) {
    let index = items.findIndex((item) => item.id === itemId);

    const newIndex = update(items, {
        [index]: {
            completed: { $set: completed },
        },
    });
    return newIndex;
}

/**
 * A counter to generate a unique iod for a todo item
 * Can remove this logic then the todo is created using backend/database logic
 * @type {number}
 */
let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable)
 *
 * @param {Array} list
 * @param {Object} data
 * @param {Array}
 */

function addToList(list, data) {
    let item = Object.assign(
        {
            id: getNextId(),
        },
        data,
    );

    return list.concat([item]);
}

export { getAll, addToList, getItemById, updateStatus };
