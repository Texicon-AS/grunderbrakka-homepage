import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields, headingFontSizeFields } from './shared-styling'

export const DeadlineBlock: Block = {
  slug: 'deadline',
  labels: {
    singular: 'Deadline Block',
    plural: 'Deadline Blocks',
  },
  fields: [
    {
      name: 'deadlineText',
      type: 'text',
      label: 'Deadline Text',
      required: true,
    },
    {
      name: 'deadlineDate',
      type: 'date',
      label: 'Deadline Date',
    },
    {
      type: 'collapsible',
      label: 'Styling',
      fields: [
        ...layoutFields,
        ...colorFields,
        {
          name: 'textStyles',
          type: 'group',
          label: 'Text Styles',
          fields: [
            ...headingFontSizeFields,
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color (hex)',
            },
            {
              name: 'fontWeight',
              type: 'select',
              label: 'Font Weight',
              options: [
                { label: 'Normal', value: 'normal' },
                { label: 'Bold', value: 'bold' },
                { label: 'Extra Bold', value: '800' },
                { label: '900', value: '900' },
              ],
              defaultValue: 'bold',
            },
            {
              name: 'textAlign',
              type: 'select',
              label: 'Text Alignment',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' },
              ],
              defaultValue: 'center',
            },
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
