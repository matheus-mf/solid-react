import React, {useMemo} from "react";
import {WidgetComponentProps} from "src/components/Dashboard/dashboard.model";

export const BlockTemplate: React.FC<WidgetComponentProps> = ({content}) => {
  const title = content.data.title;
  const prev = content.data.prev
  const currentParam = content.data.current
  const value = content.data.value

  const handleInfo = useMemo(() => (prev ? `${prev} - ${currentParam}` : currentParam), [prev,currentParam]);
  
  return (
    <>
      <h2 className="widget_title">{title}</h2>
      <p className="widget__value">{value}</p>
      <p className="widget__info">{`${handleInfo}`}</p>
    </>
  )
}
