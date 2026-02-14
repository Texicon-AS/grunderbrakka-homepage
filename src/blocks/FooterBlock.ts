import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields, headingFontSizeFields, fontSizeFields, fontWeightFields, lineHeightFields } from './shared-styling'

export const FooterBlock: Block = {
  slug: 'footer',
  labels: {
    singular: 'Footer Block',
    plural: 'Footer Blocks',
  },
  fields: [
    {
      name: 'footerSections',
      type: 'array',
      label: 'Footer Sections',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
        },
        {
          name: 'links',
          type: 'array',
          label: 'Links',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Link Label',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true,
            },
          ],
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
          name: 'sectionTitleStyles',
          type: 'group',
          label: 'Section Title Styles',
          fields: [
            ...headingFontSizeFields,
            ...fontWeightFields,
            {
              name: 'sectionTitleColor',
              type: 'text',
              label: 'Section Title Color (hex)',
            },
          ],
        },
        {
          name: 'linkStyles',
          type: 'group',
          label: 'Link Styles',
          fields: [
            ...fontSizeFields,
            ...fontWeightFields,
            {
              name: 'linkColor',
              type: 'text',
              label: 'Link Color (hex)',
            },
            {
              name: 'linkHoverColor',
              type: 'text',
              label: 'Link Hover Color (hex)',
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