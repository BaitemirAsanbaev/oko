import React from 'react';
import classes from './Contacts.module.scss';
import phone from '../../assets/phone.svg';
import adress from '../../assets/adress.svg';
import navigate from '../../assets/navigate.svg';
export default function Contacts() {
  return (
    <div className={classes.Contacts}>
      <div>
        <h2>Контакты</h2>
        <ul>
          <li>
            <div>
              <img src={phone} alt="phone" />
            </div>
            <div>
              <div>+1 123 4567890 </div>
              <div>hello@loftpineapple.com</div>
            </div>
          </li>
          <li>
            <img src={adress} alt="adress" />
            <div>Loft Pineapple, 22 New Green Street, New York </div>
          </li>
          <li>
            <img src={navigate} alt="navigate" />
            <div>
              We are located in the northern part of the city. The nearest subway is the North Road.
            </div>
          </li>
        </ul>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.857370945155!2d74.61722197660552!3d42.87585450235871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7b926cc8659%3A0xf0585c43284a9a32!2zMjgsIDE0Ny8xINC_0YDQvtGB0L8uINCn0YPQuSwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1701600464873!5m2!1sru!2skg"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
