import React, { Component } from 'react';
import A from '../A';
import './styles.css';

class Contact extends Component {
  render() {
    return (
      <div className="c-contact">
        <ul className="c-contact__list  o-list-bare">
          <li className="c-contact__item">
            <A href="tel:+44-0-207-667-6813">+44 &#40;0&#41; 207 667 6813</A>
          </li>
          <li className="c-contact__item">
            <A href="tel:+44-0-774-778-0484">+44 &#40;0&#41; 774 778 0484</A>
          </li>
          <li className="c-contact__item">
            <A href="mailto:info@kushnerproperty.com">info@kushnerproperty.com</A>
          </li>
        </ul>
      </div>
    );
  }
}

export default Contact;
