import { stringIncludes } from '~/util/common';

const FILTER_ALL = 'all';
const FILTER_ACTIVE = 'active';
const FILTER_COMPLETED = 'completed';

function applyFilter(list, filter) {
    switch (filter) {
        case FILTER_COMPLETED:
            return list.filter((item) => item.completed === true);

        case FILTER_ACTIVE:
            return list.filter((item) => item.completed !== true);

        default:
            return list;
    }
}

function search(list, query) {
    let q = query.trim().toLowerCase();

    return list.filter(({ text }) => stringIncludes(text.toLowerCase(), q));
}

function getOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed',
    };
}

export { applyFilter, search, getOptions, FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED };
