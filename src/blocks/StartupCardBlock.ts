import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields, headingFontSizeFields, fontSizeFields, fontWeightFields, lineHeightFields, logoConfigFields } from './shared-styling'

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
          name: 'titleStyles',
          type: 'group',
          label: 'Title Styles',
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
          name: 'logoStyles',
          type: 'group',
          label: 'Logo Styles',
          fields: [
            ...logoConfigFields,
          ],
        },
        {
          name: 'buttonStyles',
          type: 'group',
          label: 'Button Styles',
          fields: [
            {
              name: 'buttonFontSize',
              type: 'select',
              label: 'Button Font Size',
              options: [
                { label: 'Small', value: 'sm' },
                { label: 'Base', value: 'base' },
                { label: 'Large', value: 'lg' },
                { label: 'Custom', value: 'custom' },
              ],
              defaultValue: 'base',
            },
            {
              name: 'customButtonFontSize',
              type: 'number',
              label: 'Custom Button Font Size (px)',
              admin: {
                condition: (data) => data.buttonFontSize === 'custom',
              },
            },
            ...fontWeightFields,
            {
              name: 'buttonBackgroundColor',
              type: 'text',
              label: 'Button Background Color (hex)',
            },
            {
              name: 'buttonTextColor',
              type: 'text',
              label: 'Button Text Color (hex)',
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