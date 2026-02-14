import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields, logoConfigFields } from './shared-styling'

export const PartnerLogosBlock: Block = {
  slug: 'partnerLogos',
  labels: {
    singular: 'Partner Logos Block',
    plural: 'Partner Logos Blocks',
  },
  fields: [
    {
      name: 'partners',
      type: 'array',
      label: 'Partners',
      minRows: 1,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          label: 'Partner Name',
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
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
          name: 'maxColumns',
          type: 'select',
          label: 'Max Columns',
          options: [
            { label: '2 Columns', value: '2' },
            { label: '3 Columns', value: '3' },
            { label: '4 Columns', value: '4' },
            { label: '5 Columns', value: '5' },
            { label: '6 Columns', value: '6' },
          ],
          defaultValue: '4',
        },
        {
          name: 'gap',
          type: 'number',
          label: 'Gap (px)',
          defaultValue: 24,
        },
        {
          name: 'logoStyles',
          type: 'group',
          label: 'Logo Styles',
          fields: [
            ...logoConfigFields,
          ],
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