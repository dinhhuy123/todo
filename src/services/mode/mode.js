import { KEY_C, KEY_S, KEY_ESCAPE } from 'keycode-js';

const MODE_NONE = 'none';
const MODE_SEARCH = 'search';
const MODE_CREATE = 'create';

function getNextModeByKey(current, keyPressed) {
    switch (current) {
        case MODE_NONE:
            if (keyPressed === KEY_S) return MODE_SEARCH;
            if (keyPressed === KEY_C) return MODE_CREATE;

            break;
        default:
            if (keyPressed === KEY_ESCAPE) return MODE_NONE;
    }

    return current;
}

export { MODE_NONE, MODE_SEARCH, MODE_CREATE, getNextModeByKey };
