import React from 'react';
import {
  Input, Field, Control, Button,
} from 'reactbulma';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import DatePicker from './Datepicker';

const eventStates = ['Solo', 'Team', 'Company'];
const eventSchema = Yup.object().shape({
  name: Yup.string()
    .required('Event name is required')
    .default('')
    .max(20),
  date: Yup.date().required('Date is required!').typeError('Please enter a date').default(null),
  state: Yup.string().oneOf(['Solo', 'Team', 'Company']).default('Solo'),
});

const EventForm = ({
  values, touched, errors, handleChange, handleBlur, handleSubmit, setFieldValue,
}) => (
  <form style={{ flex: 1 }} onSubmit={handleSubmit}>
    <Field>
      <label className="label" htmlFor="name">Event Name</label>
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
        <DatePicker
          className={`input ${errors.date && touched.date ? 'is-danger' : ''}`}
          selected={values.date}
          onChange={(date) => { setFieldValue('date', date); }}
          showTimeSelect
          timeIntervals={15}
          dateFormat="DD/MM/YY HH:mm"
          timeFormat="HH:mm"
          name="date"
          onBlur={handleBlur}
          autoComplete="off"
        />
      </Control>
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


const EnhancedForm = withFormik({
  mapPropsToValues: ({ event = {} }) => eventSchema.cast(event),
  validationSchema: eventSchema,
  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  },


})(EventForm);

export default EnhancedForm;
