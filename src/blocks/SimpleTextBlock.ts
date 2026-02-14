import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields, headingFontSizeFields, fontSizeFields, fontWeightFields, lineHeightFields } from './shared-styling'

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
          name: 'headingStyles',
          type: 'group',
          label: 'Heading Styles',
          fields: [
            ...headingFontSizeFields,
            ...fontWeightFields,
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color (hex)',
            },
          ],
        },
        {
          name: 'bodyTextStyles',
          type: 'group',
          label: 'Body Text Styles',
          fields: [
            ...fontSizeFields,
            ...fontWeightFields,
            ...lineHeightFields,
            {
              name: 'bodyTextColor',
              type: 'text',
              label: 'Body Text Color (hex)',
            },
          ],
        },
        {
          name: 'personNameStyles',
          type: 'group',
          label: 'Person Name Styles',
          fields: [
            ...headingFontSizeFields,
            ...fontWeightFields,
            {
              name: 'personNameColor',
              type: 'text',
              label: 'Person Name Color (hex)',
            },
          ],
        },
        {
          name: 'emailStyles',
          type: 'group',
          label: 'Email Styles',
          fields: [
            ...fontSizeFields,
            ...fontWeightFields,
            {
              name: 'emailColor',
              type: 'text',
              label: 'Email Color (hex)',
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