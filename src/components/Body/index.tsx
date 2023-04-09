import React, { CSSProperties } from 'react';

interface MatizeBodyProps {
  children: React.ReactNode;
}

export function MatizeBody({ children }: MatizeBodyProps) {
  const mainPanelSyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  };

  return (
    <body>
      <div style={mainPanelSyle}>
        {children}
      </div>
    </body>
  );
}
