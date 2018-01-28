import React, { Component } from 'react';
import rock from '../images/gallery/rock.jpg';

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
          comments: '',
          attendance: '',
        });
      })
      .catch(error => alert(error));

    e.preventDefault();
  };
  render() {
    const { name, email, comments, attendance } = this.state;
    return (
      <div className="container">
        <img src={rock} alt="Kim and Phil on a rock in Mexico City" width="100%" height="auto" />
        <p>
          We'll be sending out formal invitations as well. If you already know whether you can make it, it'd rock if you could RSVP here so we can get a rough headcount.
        </p>
        <p>
          Please RSVP once for each guest invited.
        </p>
        <form className="rsvp-form" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="rsvp" />
          <div className="row">
            <div className="twelve columns">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="u-full-width" value={name} onChange={this.handleChange} />
            </div>
            <div className="twelve columns">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email"  value={email} onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="six columns">
              <label htmlFor="attendance">Will you attend?</label>
              <select className="u-full-width" value={attendance} id="attendance" onChange={this.handleChange}>
                <option value="yes">Yes, with pleasure!</option>
                <option value="no">Regretfully, no</option>
              </select>
            </div>
          </div>
          <div classNam="row">
            <div className="twelve columns">
              <label htmlFor="comments">Anything you'd like us to know, or any questions you have?</label>
              <textarea className="u-full-width" name="comments" value={comments} onChange={this.handleChange}>
              </textarea>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RSVP;
