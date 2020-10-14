import React, { ChangeEvent } from 'react';
import { dateToIsoString } from '../../helpers/date-helpers';

type DateSelectorProps = {
  value: Date,
  onChange: (date: Date) => void
}

export const DateSelector = ({ value, onChange }: DateSelectorProps) => {

  const handler = (ev: ChangeEvent<HTMLInputElement>) => {
    const date = ev.target.valueAsDate;
    const isValid = ev.target.willValidate;
    if (isValid && date != null) {
      onChange(date);
    }
  }

  return (
    <div className="form-group">
      <label className="label">Fecha</label>
      <input type="date" min="2020-01-01" max="2099-12-31" value={dateToIsoString(value)} onChange={ (ev) => handler(ev) } />
    </div>
  );
}