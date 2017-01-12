import React from 'react';
import { connect } from 'react-redux';
import LabeledCheckbox from '../../components/input/LabeledCheckbox';
import { toggleCheckbox } from '../../actions/checkboxAction';
import { TOGGLE_LIFTING, TOGGLE_TRANSPORT } from '../../reducers/toggleCheckboxReducer';
import './style.scss';

const ReportView = ({ liftingIsChecked, transportIsChecked, onCheckClicked }) =>
  <div className="reportViewWrapper">
    <h1>Beskrivelse</h1>
    <LabeledCheckbox
      labelText="Løfting/bæring"
      checkItem="lifting"
      isChecked={liftingIsChecked}
      clickCheck={() => onCheckClicked(TOGGLE_LIFTING)}
    />
    <LabeledCheckbox
      labelText="Transport/forflytning"
      checkItem="transport"
      isChecked={transportIsChecked}
      clickCheck={() => onCheckClicked(TOGGLE_TRANSPORT)}
    />
  </div>;

ReportView.propTypes = {
  liftingIsChecked: React.PropTypes.bool,
  transportIsChecked: React.PropTypes.bool,
  onCheckClicked: React.PropTypes.func,
};

export default connect(
    state => ({
      liftingIsChecked: state.toggleCheckboxReducer.liftingIsChecked,
      transportIsChecked: state.toggleCheckboxReducer.transportIsChecked,
    }),
    dispatch => ({
      onCheckClicked: index => dispatch(toggleCheckbox(index)),
    }),
)(ReportView);
