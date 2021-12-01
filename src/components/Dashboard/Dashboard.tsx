import React from 'react';
import {Widget} from 'src/components/Dashboard/Widget';
import {Widgets} from "src/components/Dashboard/dashboard.model";

import './styles/main.scss';

export interface IDashboardProps {
  widgets: Array<Widgets>;
  title: string;
}

export const Dashboard:React.FC<IDashboardProps> = ({widgets, title}) => {
  return (
    <div className="dashboard">
      <h1>{title}</h1>
      {widgets.map((widget:Widgets) => (
        <Widget content={widget} className="dashboard__widget" />
      ))}
    </div>
  );
};
