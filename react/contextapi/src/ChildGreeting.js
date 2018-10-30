import React from 'react';

import { LocaleContext } from './Context';

export default () => {
  return (
    <LocaleContext.Consumer>
      {param =>
        param.locale === 'en' ? (
          <h1>Welcome {param.x}</h1>
        ) : (
          <h1>Willkommen {param.x}</h1>
        )
      }
    </LocaleContext.Consumer>
  );
};
