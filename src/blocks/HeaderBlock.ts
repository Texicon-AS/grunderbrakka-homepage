import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields, headingFontSizeFields, fontSizeFields, fontWeightFields, logoConfigFields } from './shared-styling'

export const HeaderBlock: Block = {
  slug: 'header',
  labels: {
    singular: 'Header Block',
    plural: 'Header Blocks',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'siteTitle',
      type: 'text',
      label: 'Site Title',
    },
    {
      name: 'navigationLinks',
      type: 'array',
      label: 'Navigation Links',
      minRows: 1,
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
    {
      type: 'collapsible',
      label: 'Styling',
      fields: [
        ...layoutFields,
        ...colorFields,
        {
          name: 'logoStyles',
          type: 'group',
          label: 'Logo Styles',
          fields: [
            ...logoConfigFields,
          ],
        },
        {
          name: 'siteTitleStyles',
          type: 'group',
          label: 'Site Title Styles',
          fields: [
            ...headingFontSizeFields,
            ...fontWeightFields,
            {
              name: 'siteTitleColor',
              type: 'text',
              label: 'Site Title Color (hex)',
            },
          ],
        },
        {
          name: 'navigationStyles',
          type: 'group',
          label: 'Navigation Styles',
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