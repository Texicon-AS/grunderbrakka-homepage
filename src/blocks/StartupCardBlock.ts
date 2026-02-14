import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields } from './shared-styling'

export const StartupCardBlock: Block = {
  slug: 'startupCard',
  labels: {
    singular: 'Startup Card Block',
    plural: 'Startup Card Blocks',
  },
  fields: [
    {
      name: 'startupTitle',
      type: 'text',
      label: 'Startup Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'contactUrl',
      type: 'text',
      label: 'Contact URL',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      defaultValue: 'Contact',
    },
    {
      type: 'collapsible',
      label: 'Styling',
      fields: [
        ...layoutFields,
        ...colorFields,
        {
          name: 'borderRadius',
          type: 'number',
          label: 'Border Radius (px)',
          defaultValue: 0,
        },
        {
          name: 'hoverEffect',
          type: 'select',
          label: 'Hover Effect',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Scale', value: 'scale' },
            { label: 'Shadow', value: 'shadow' },
            { label: 'Lift', value: 'lift' },
          ],
          defaultValue: 'none',
        },
        {
          type: 'group',
          name: 'spacing',
          label: 'Spacing',
          fields: [
            ...paddingFields,
            ...marginFields,
          ],
        },
      ],
    },
  ],
}