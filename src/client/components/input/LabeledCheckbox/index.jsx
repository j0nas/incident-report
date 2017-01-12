import React from 'react';
import './style.scss';

const LabeledCheckbox = ({ labelText, checkItem, isChecked, clickCheck }) =>
  <div className="labeledCheckbox">
    <label htmlFor={checkItem}>{labelText}</label>
    <input
      className={`${checkItem} labelCheckbox`}
      type="checkbox"
      checked={isChecked}
      onChange={clickCheck}
    />
  </div>;

LabeledCheckbox.propTypes = {
  labelText: React.PropTypes.string,
  checkItem: React.PropTypes.string,
  isChecked: React.PropTypes.bool,
  clickCheck: React.PropTypes.func,
};

export default LabeledCheckbox;
