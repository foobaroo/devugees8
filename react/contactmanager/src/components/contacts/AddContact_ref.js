import React, { Component } from 'react';

class AddContact extends Component {
  //Add constructor
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  state = {
    name: '',
    email: '',
    phone: ''
  };

  static defaultProps = {
    name: 'Fred Smith',
    email: 'fred@gmail.com',
    phone: '111-1111-11111'
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('onSubmit...');

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone } = this.props;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter name..."
                defaultValue={name}
                ref={this.nameInput}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter email..."
                defaultValue={email}
                ref={this.emailInput}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter phone..."
                defaultValue={phone}
                ref={this.phoneInput}
                onChange={this.onChange}
              />
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-light btn-block"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
