import { TOGGLE_CHECKBOX } from '../types/labeledCheckbox';

const initialState = {
  liftingIsChecked: false,
  transportIsChecked: false,
  drillingIsChecked: false,
  turningIsChecked: false,
  officeWorkIsChecked: false,
};

export const TOGGLE_LIFTING = 'liftingIsChecked';

export const TOGGLE_TRANSPORT = 'transportIsChecked';

export default (state = initialState, action) => {
  const { type, index } = action;

  switch (type) {
    case TOGGLE_CHECKBOX:
      return Object.assign({}, state, { [index]: !state[index] });

    default:
      return state;
  }
};
