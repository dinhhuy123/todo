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

function createNew(text) {
    let nextId = this.state.items.length + 1;
    let item = {
        id: nextId,
        text: text,
    };

    return item;
}

export { getAll, createNew, getItemById, updateStatus };
