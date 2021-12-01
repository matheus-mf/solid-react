import React from 'react';
import {templateComponents} from "src/components/Dashboard/dashboard.config";

export interface WidgetProps {
  content: any;
  className?: string;
}

export const Widget:React.FC<WidgetProps> = ({content, className}) => {
  const WidgetComponent = templateComponents[content.config.template];
  const customClass = className && `${className} `
  const position = content.config.position.toLowerCase()

  return (
    <div className={`${customClass}widget widget--${position}`}>
      <WidgetComponent content={content} />
    </div>
  );
};
