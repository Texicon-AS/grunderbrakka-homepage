import type { CollectionConfig } from 'payload'

export const Location: CollectionConfig = {
  slug: 'location',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'address',
      type: 'textarea',
      required: true,
    },
    {
      name: 'city',
      type: 'text',
      required: true,
    },
    {
      name: 'postalCode',
      type: 'text',
      label: 'Postal Code',
    },
    {
      name: 'country',
      type: 'text',
      required: true,
    },
    {
      name: 'latitude',
      type: 'number',
    },
    {
      name: 'longitude',
      type: 'number',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'openingHours',
      type: 'textarea',
      label: 'Opening Hours',
    },
  ],
}
