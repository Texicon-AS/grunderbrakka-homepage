import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields } from './shared-styling'

export const StartupGridBlock: Block = {
  slug: 'startupGrid',
  labels: {
    singular: 'Startup Grid Block',
    plural: 'Startup Grid Blocks',
  },
  fields: [
    {
      name: 'startups',
      type: 'array',
      label: 'Startups',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Startup Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Learn More',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Styling',
      fields: [
        ...layoutFields,
        ...colorFields,
        {
          name: 'columnCount',
          type: 'select',
          label: 'Column Count',
          options: [
            { label: '1 Column', value: '1' },
            { label: '2 Columns', value: '2' },
            { label: '3 Columns', value: '3' },
            { label: '4 Columns', value: '4' },
          ],
          defaultValue: '3',
        },
        {
          name: 'gap',
          type: 'number',
          label: 'Gap (px)',
          defaultValue: 24,
        },
        {
          name: 'cardBackgroundColor',
          type: 'text',
          label: 'Card Background Color (hex)',
        },
        {
          name: 'cardBorderRadius',
          type: 'number',
          label: 'Card Border Radius (px)',
          defaultValue: 0,
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