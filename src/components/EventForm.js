import React from 'react';
import {
  Input, Field, Control, Button,
} from 'reactbulma';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const eventStates = ['Solo', 'Team', 'Company'];

const EventForm = ({
  values, touched, errors, handleChange, handleBlur, handleSubmit,
}) => (
  <form style={{ flex: 1 }} onSubmit={handleSubmit}>
    <Field>
      <label className="label" htmlFor="name">Event name</label>
      <Control>
        <Input
          autoComplete="off"
          maxLength="20"
          className={`${errors.name && touched.name ? 'is-danger' : ''}`}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
      </Control>
      {errors.name && touched.name && <p className="help is-danger">{errors.name}</p>}
    </Field>

    <Field>
      <label className="label" htmlFor="date">Date</label>
      <Control>
        <Input
          className={`${errors.date && touched.date ? 'is-danger' : ''}`}
          name="date"
          type="datetime-local"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.date}
        />
      </Control>
      {/* USE DATEPICKER */}
      {errors.date && touched.date && <p className="help is-danger">{errors.date}</p>}
    </Field>

    <Field>
      <label className="label" htmlFor="state">State</label>
      <Control>
        <div className={`select ${errors.state && touched.state ? 'is-danger' : ''}`}>
          <select
            className="select"
            name="state"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.state}
          >
            {eventStates.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
      </Control>
      {errors.state && touched.state && <p className="help is-danger">{errors.state}</p>}
    </Field>

    <Button className="is-pulled-right" info type="submit">Save</Button>
  </form>
);

const eventSchema = Yup.object().shape({
  name: Yup.string()
    .max(20)
    .required('Event name is required'),
  date: Yup.date().typeError('Please enter a date').required('Date is required!'),
  state: Yup.string().oneOf(['Solo', 'Team', 'Company']),
});

const EnhancedForm = withFormik({
  mapPropsToValues: ({ event = {} }) => eventSchema.cast(event),
  validationSchema: eventSchema,

})(EventForm);

export default EnhancedForm;
