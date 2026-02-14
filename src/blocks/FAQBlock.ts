import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields } from './shared-styling'

export const FAQBlock: Block = {
  slug: 'faq',
  labels: {
    singular: 'FAQ Block',
    plural: 'FAQ Blocks',
  },
  fields: [
    {
      name: 'questions',
      type: 'array',
      label: 'Questions',
      minRows: 1,
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Question',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Answer',
          required: true,
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
          name: 'accentColor',
          type: 'text',
          label: 'Accent Color (hex)',
        },
        {
          name: 'borderRadius',
          type: 'number',
          label: 'Border Radius (px)',
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