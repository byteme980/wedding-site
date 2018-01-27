import React, { Component } from 'react';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class RSVP extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', partySize: '', comments:  ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "rsvp", ...this.state })
    })
      .then(() => {
        alert("Your response has been recorded!");
        this.setState({
          name: '',
          email: '',
          party: '',
          comments: '',
        });
      })
      .catch(error => alert(error));

    e.preventDefault();
  };
  render() {
    const { name, email, party, comments } = this.state;
    return (
      <div>
        <h1>RSVP</h1>
        <p>Please RSVP no later than August 20</p>
        <form onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="rsvp" />
          <label>
            Name
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
          <label>
            Email Address
            <input type="email" name="email"  value={email} onChange={this.handleChange} />
          </label>
          <label>
            Number in party
            <input type="number" name="party" value={party}  onChange={this.handleChange} />
          </label>
          <label>
            Anything you'd like us to know, or any questions you have?
            <textarea name="comments" value={comments} onChange={this.handleChange}>
            </textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RSVP;
