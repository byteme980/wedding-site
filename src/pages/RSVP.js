import React, { Component } from 'react';

class RSVP extends Component {
  render() {
    return (
      <div>
        <h1>RSVP</h1>
        <p>Please RSVP no later than August 20</p>
        <form method="POST">
          <input type="hidden" name="form-name" value="rsvp" />
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Email Address
            <input type="email" name="email" />
          </label>
          <label>
            Number in party
            <input type="number" name="party-size" />
          </label>
          <label>
            Anything you'd like us to know, or any questions you have?
            <textarea name="additional-comments">
            </textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RSVP;
