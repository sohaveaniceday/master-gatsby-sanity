import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'This is the topping name',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Whether the topping is vegetarian',
      options: { layout: 'checkbox' },
    },
  ],
  preview: {
    select: { name: 'name', vegetarian: 'vegetarian' },
    prepare: (fields) => ({
      title: `${fields.name} ${fields.vegetarian ? '🌱' : ''}`,
    }),
  },
};
