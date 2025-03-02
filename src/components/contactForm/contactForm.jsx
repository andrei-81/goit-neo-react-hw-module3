import { useId } from 'react';
import css from './contactForm.module.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from "formik";

const ContactValidation = Yup.object().shape({
        username: Yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters')
        .max(50, 'Name must be less than 50 characters'),
        number: Yup.string().required('Number is required')
        .min(3, 'Number must be at least 3 characters')
        .max(12, 'Number must be less than 12 characters'),
    });

const initialValues = {
    username: "",
    number: ""
  };

const ContactForm = ({ onAdd }) => {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        console.log(values);
        onAdd({id: Date.now(),
            name: values.username,
            number: values.number
        });
		actions.resetForm();
      };

    return (
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactValidation}>
                <Form className={css.form}>
                    <div className={css.nameField}>
                        <label className={css.label} htmlFor={nameFieldId}>Name</label>
                        <Field className={css.input} id={nameFieldId} name="username" type="text" autoComplete="off" />
                        <ErrorMessage className={css.error} name="username" component="span" />
                    </div>
                    <div className={css.numberField}>
                        <label className={css.label} htmlFor={numberFieldId}>Number</label>
                        <Field className={css.input} id={numberFieldId} name="number" type="tel" autoComplete="off" />
                        <ErrorMessage className={css.error} name="number" component="span" />
                    </div>
                    <button className={css.button} type="submit">Add contact</button>
                </Form>
            </Formik>
    )
}

export default ContactForm