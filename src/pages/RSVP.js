import React, { Component } from 'react';
import rock from '../images/rock.jpg';
import withScrollToTop from '../components/withScrollToTop';
import Modal from '../components/Modal';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const setRSVP = (info) => {
  try {
    window.localStorage.setItem('rsvp', true);
  } catch(e) {
    // do nothing for now
  }
}

const getRSVP = () => {
  try {
    return window.localStorage.getItem('rsvp');
  } catch(e) {
    return false;
  }
}

class RSVP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      attendance: 'yes',
      comments:  '',
      hasRSVPd: getRSVP(),
      modalVisible: false,
      modalMessage: '',
    };

    this.onModalClose = this.onModalClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onModalClose() {
    this.setState({
      modalVisible: false
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    const { name, email, attendance, comments } = this.state;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "rsvp", name, email, comments, attendance })
    })
      .then(() => {
        setRSVP({name, email, attendance, comments});
        this.setModalMessage();
        this.setState({
          modalVisible: true,
          name: '',
          email: '',
          comments: '',
          attendance: 'yes',
        });

      })
      .catch(error => alert("There was an error submitting your response. Please try again later!"));

    e.preventDefault();
  }
  setModalMessage() {
    const defaultEnding = 'Please use this form again or email us if anything changes.';
    const modalMessage =  this.state.attendance === 'yes' ?
      `Looking forward to celebrating with you! ${defaultEnding}`
      : `We'll miss you! ${defaultEnding}`;
    this.setState({modalMessage});
  }
  render() {
    const { name, email, comments, attendance, hasRSVPd } = this.state;
    return (
      <div className="container">
        <h1>Celebrate with us!</h1>
        <div className="image-container" style={{backgroundImage: `url(${rock})`}} />
        <Modal onClose={this.onModalClose} isVisible={this.state.modalVisible}>
          <p>{this.state.modalMessage}</p>
        </Modal>
        <p>
          We will be sending out formal invitations when the date is a little closer. If you already know whether you'll be able to make it, it'd rock if you could RSVP here so we can get a rough headcount.
        </p>
        <p>
          Please RSVP for each guest invited.
        </p>
        { hasRSVPd && (
          <p className='rsvp-success'>Thank you for RSVPing. Please use this form again if you'd like to update your response.</p>
        )}
        <form className="rsvp-form" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="rsvp" />
          <div className="row">
            <div className="twelve columns">
              <label htmlFor="name">Name</label>
              <input required type="text" id="name" name="name" className="u-full-width" value={name} onChange={this.handleChange} />
            </div>
            <div className="twelve columns">
              <label htmlFor="email">Email Address</label>
              <input required type="email" id="email" name="email" className="u-full-width" value={email} onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="six columns">
              <label htmlFor="attendance">Will you attend?</label>
              <select name="attendance" className="u-full-width" value={attendance} id="attendance" onChange={this.handleChange}>
                <option value="yes" defaultValue>Yes, with pleasure!</option>
                <option value="no">Regretfully, no</option>
              </select>
            </div>
          </div>
          <div className="row">
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

export default withScrollToTop(RSVP);
