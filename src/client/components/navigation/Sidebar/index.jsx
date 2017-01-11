import React from 'react';
import SidebarComponent from 'react-sidebar';

const Sidebar = ({ sidebarContent, sidebarOpen, onSetSidebarOpen }) =>
  <SidebarComponent
    sidebar={sidebarContent}
    open={sidebarOpen}
    onSetOpen={onSetSidebarOpen}
  >
    <b>Main content</b>
  </SidebarComponent>;

Sidebar.propTypes = {
  sidebarContent: React.PropTypes.node,
  sidebarOpen: React.PropTypes.bool,
  onSetSidebarOpen: React.PropTypes.func,
};

export default Sidebar;
