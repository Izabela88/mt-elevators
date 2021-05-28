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
      {errors.firstName && (
        <div className={styles.err}>
          <p>Wrong Name!</p>
        </div>
      )}

      <input
        className={styles.input}
        placeholder='Last Name'
        {...register('lastName', {
          validate: (value) => value.length > 2 && value.length < 40,
          pattern: /^[A-Za-z]+$/i,
          required: true,
        })}
      />
      {errors.lastName && (
        <div className={styles.err}>
          <p>Wrong Name!</p>
        </div>
      )}

      <input
        className={styles.input}
        placeholder='Email'
        type='email'
        {...register('email', {
          required: true,
        })}
      />
      {errors.message && (
        <div className={styles.err}>
          <p>Required!</p>
        </div>
      )}

      <textarea
        placeholder='Your Message'
        className={styles.textarea}
        {...register('message', {
          required: true,
          validate: (value) => value.length > 2 && value.length < 500,
        })}
      />
      {errors.message && (
        <div className={styles.err}>
          <p>Required!</p>
        </div>
      )}

      <button disabled={!isDirty} className={styles.btn} type='submit'>
        Send
      </button>
    </form>
  );
}
