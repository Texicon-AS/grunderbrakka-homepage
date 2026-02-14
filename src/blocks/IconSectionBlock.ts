import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields, headingFontSizeFields, fontSizeFields, fontWeightFields, lineHeightFields } from './shared-styling'

export const IconSectionBlock: Block = {
  slug: 'iconSection',
  labels: {
    singular: 'Icon Section Block',
    plural: 'Icon Section Blocks',
  },
  fields: [
    {
      name: 'sections',
      type: 'array',
      label: 'Sections',
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
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
          name: 'iconColor',
          type: 'text',
          label: 'Icon Color (hex)',
        },
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
          name: 'titleStyles',
          type: 'group',
          label: 'Section Title Styles',
          fields: [
            ...headingFontSizeFields,
            ...fontWeightFields,
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color (hex)',
            },
          ],
        },
        {
          name: 'descriptionStyles',
          type: 'group',
          label: 'Description Styles',
          fields: [
            ...fontSizeFields,
            ...fontWeightFields,
            ...lineHeightFields,
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Color (hex)',
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