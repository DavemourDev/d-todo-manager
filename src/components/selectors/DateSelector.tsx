import React, { ChangeEvent } from 'react';
import { dateToIsoString } from '../../helpers/date-helpers';

type DateSelectorProps = {
  value?: Date,
  label: string,
  onChange: (date: Date) => void
}

export const DateSelector = ({ value, label, onChange }: DateSelectorProps) => {

  const handler = (ev: ChangeEvent<HTMLInputElement>) => {
    const date = ev.target.valueAsDate;
    const isValid = ev.target.willValidate;
    if (isValid && date != null) {
      onChange(date);
    }
  }

  return (
    <div className="form-group">
      <label className="label">{ label }</label>
      <input type="date" name="date" value={ dateToIsoString(value) } min="2020-01-01" max="2099-12-31" onChange={ (ev) => handler(ev) } />
    </div>
  );
}