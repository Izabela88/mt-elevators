import React from 'react';
import styles from './Contact.module.css';
import Form from './Form/Form';

export default function Contact() {
  return (
    <div id='contact' className={styles.contact}>
      <div>
        <Form />
      </div>
    </div>
  );
}
