import React from 'react';
import {
  Input, Field, Control, Button, Icon,
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
  values, touched, errors, handleChange, handleBlur, handleSubmit, setFieldValue, onDeleteEvent,
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
          dateFormat="dd/MM/yy HH:mm"
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

    <div className="is-flex" style={{ flexDirection: 'row-reverse' }}>
      <Button style={{ flex: '0 25%' }} info type="submit">Save</Button>
      {onDeleteEvent && (
      <Button outlined danger style={{ marginRight: '1em' }} onClick={onDeleteEvent} type="button">
        <Icon small>
          <i className="fa fa-trash-alt" />
        </Icon>
      </Button>
      )}
    </div>
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
