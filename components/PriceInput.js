import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

const createPatchFromValue = (value) =>
  PatchEvent.from(value === '' ? unset() : set(Number(value)));

const formatMoney = Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'GBP',
}).format;

const PriceInput = ({ type, value, onChange, inputComponent }) => (
  <div>
    <h2>
      {type.title} - {value ? formatMoney(value / 100) : ''}
    </h2>
    <p>{type.description}</p>
    <input
      type={type.name}
      value={value}
      onChange={(event) => onChange(createPatchFromValue(event.target.value))}
      ref={inputComponent}
    />
  </div>
);

PriceInput.focus = () => {
  this._inputElement.focus();
};

export default PriceInput;
