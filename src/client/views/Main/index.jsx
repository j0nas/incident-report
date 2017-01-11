import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../../components/navigation/Sidebar';

const MainView = () =>
  <div>
    <Sidebar />
  </div>;

MainView.propTypes = {};

export default connect()(MainView);
