import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields } from './shared-styling'

export const SimpleTextBlock: Block = {
  slug: 'simpleText',
  labels: {
    singular: 'Simple Text Block',
    plural: 'Simple Text Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
    },
    {
      name: 'bodyText',
      type: 'textarea',
      label: 'Body Text',
    },
    {
      name: 'personName',
      type: 'text',
      label: 'Person Name',
    },
    {
      name: 'contactEmail',
      type: 'email',
      label: 'Contact Email',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image (optional)',
    },
    {
      type: 'collapsible',
      label: 'Styling',
      fields: [
        ...layoutFields,
        ...colorFields,
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