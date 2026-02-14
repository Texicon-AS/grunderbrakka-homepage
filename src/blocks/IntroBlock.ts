import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields, fontSizeFields } from './shared-styling'

export const IntroBlock: Block = {
  slug: 'intro',
  labels: {
    singular: 'Intro Block',
    plural: 'Intro Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
    },
    {
      name: 'emphasisText',
      type: 'text',
      label: 'Emphasis Text',
      admin: {
        description: 'Text that will be displayed with emphasis/bold styling',
      },
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
            ...fontSizeFields,
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color (hex)',
            },
            {
              name: 'lineHeight',
              type: 'number',
              label: 'Line Height',
              defaultValue: 1.5,
              admin: {
                description: 'Line height multiplier (e.g., 1.5)',
              },
            },
            {
              name: 'textAlign',
              type: 'select',
              label: 'Text Alignment',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' },
                { label: 'Justify', value: 'justify' },
              ],
              defaultValue: 'left',
            },
          ],
        },
        {
          name: 'emphasisStyles',
          type: 'group',
          label: 'Emphasis Text Styles',
          fields: [
            {
              name: 'emphasisColor',
              type: 'text',
              label: 'Emphasis Text Color (hex)',
            },
            {
              name: 'emphasisFontWeight',
              type: 'select',
              label: 'Emphasis Font Weight',
              options: [
                { label: 'Normal', value: 'normal' },
                { label: 'Bold', value: 'bold' },
                { label: 'Extra Bold', value: '800' },
              ],
              defaultValue: 'bold',
            },
            {
              name: 'emphasisFontSize',
              type: 'select',
              label: 'Emphasis Font Size',
              options: [
                { label: 'Same as text', value: 'inherit' },
                { label: 'Small', value: 'sm' },
                { label: 'Base', value: 'base' },
                { label: 'Large', value: 'lg' },
                { label: 'Extra Large', value: 'xl' },
                { label: 'Custom', value: 'custom' },
              ],
              defaultValue: 'inherit',
            },
            {
              name: 'customEmphasisFontSize',
              type: 'number',
              label: 'Custom Emphasis Font Size (px)',
              admin: {
                condition: (data) => data.emphasisFontSize === 'custom',
              },
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
