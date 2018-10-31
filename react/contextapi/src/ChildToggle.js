import React from 'react';

import { LocaleContext } from './Context';

export default () => {
  return (
    <LocaleContext.Consumer>
      {paramValue => (
        <button onClick={paramValue.changeLocale}>Change Language</button>
      )}
    </LocaleContext.Consumer>
  );
};
