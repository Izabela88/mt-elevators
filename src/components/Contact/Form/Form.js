import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './Form.module.css';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.input}
        placeholder='First Name'
        {...register('firstName', {
          validate: (value) => value.length > 2 && value.length < 20,
          pattern: /^[A-Za-z]+$/i,
          required: true,
          isSubmitting: true,
        })}
      />
      {errors.firstName && <p>Incorrect name!</p>}

      <input
        className={styles.input}
        placeholder='Last Name'
        {...register('lastName', {
          validate: (value) => value.length > 2 && value.length < 40,
          pattern: /^[A-Za-z]+$/i,
          required: true,
        })}
      />
      {errors.lastName && <p>Incorrect last name!</p>}

      <input
        className={styles.input}
        placeholder='Email'
        type='email'
        {...register('email', {
          required: true,
        })}
      />
      {errors.message && <p>Required!</p>}

      <textarea
        placeholder='Your Message'
        className={styles.textarea}
        {...register('message', {
          required: true,
          validate: (value) => value.length > 2 && value.length < 500,
        })}
      />
      {errors.message && <p>Required!</p>}

      <input disabled={!isDirty} className={styles.btn} type='submit' />
    </form>
  );
}
