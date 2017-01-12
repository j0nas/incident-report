import { TOGGLE_CHECKBOX } from '../types/labeledCheckbox';

/*eslint-disable*/
export const toggleCheckbox = (index) =>
    ({
        type: TOGGLE_CHECKBOX,
        index: index,
    });
