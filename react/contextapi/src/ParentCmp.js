import React from 'react';
import { LocaleContext } from './Context';

//Now let create parent/top component

class ParentCmp extends React.Component {
  //constructor
  constructor(props) {
    super(props);

    this.changeLang = () => {
      console.log('changeLocale from parent...');

      this.setState({
        locale: this.state.locale === 'en' ? 'de' : 'en'
      });
    };

    this.state = {
      locale: 'en',
      x: 'Hamid',
      changeLocale: this.changeLang
    };
  }

  render() {
    return (
      <LocaleContext.Provider value={this.state}>
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}

export default ParentCmp;
