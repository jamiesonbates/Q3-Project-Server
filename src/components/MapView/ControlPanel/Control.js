import React from 'react';
import './Control.css';
import TrendingIcon from 'react-icons/lib/ti/chart-line-outline';
import ReportIcon from 'react-icons/lib/ti/warning-outline';
import ProfileIcon from 'react-icons/lib/ti/user-outline';

const Control = (props) => {
  return <div className="Control-Floated">
    <div className="Control-Panel">
      <div className="Control-Button">
        <TrendingIcon className="Control-Icon" />
      </div>
      <div className="Control-Button">
        <ReportIcon className="Control-Icon" />
      </div>
      <div className="Control-Button">
        <ProfileIcon className="Control-Icon" />
      </div>
    </div>
  </div>
}

module.exports = Control;
