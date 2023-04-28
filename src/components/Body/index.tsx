import React, { CSSProperties } from 'react';

interface IMatizeBody {
  children: React.ReactNode;
}

export function MatizeBody({ children }: IMatizeBody) {
  const mainPanelSyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  };

  return (
    <body>
      <div style={mainPanelSyle}>{children}</div>
    </body>
  );
}
