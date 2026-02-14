import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields, headingFontSizeFields, fontSizeFields } from './shared-styling'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Call to Action',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Button Link',
        },
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
        {
          name: 'buttonPadding',
          type: 'group',
          label: 'Button Padding',
          fields: [
            {
              name: 'top',
              type: 'number',
              label: 'Top (px)',
              defaultValue: 12,
            },
            {
              name: 'bottom',
              type: 'number',
              label: 'Bottom (px)',
              defaultValue: 12,
            },
            {
              name: 'left',
              type: 'number',
              label: 'Left (px)',
              defaultValue: 24,
            },
            {
              name: 'right',
              type: 'number',
              label: 'Right (px)',
              defaultValue: 24,
            },
          ],
        },
        {
          name: 'buttonFontSize',
          type: 'select',
          label: 'Button Font Size',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Base', value: 'base' },
            { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' },
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
      ],
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
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color (hex)',
            },
            {
              name: 'headingFontWeight',
              type: 'select',
              label: 'Heading Font Weight',
              options: [
                { label: 'Normal', value: 'normal' },
                { label: 'Bold', value: 'bold' },
                { label: 'Extra Bold', value: '800' },
                { label: '900', value: '900' },
              ],
              defaultValue: 'bold',
            },
          ],
        },
        {
          name: 'subtitleStyles',
          type: 'group',
          label: 'Subtitle Styles',
          fields: [
            ...fontSizeFields,
            {
              name: 'subtitleColor',
              type: 'text',
              label: 'Subtitle Color (hex)',
            },
            {
              name: 'subtitleFontWeight',
              type: 'select',
              label: 'Subtitle Font Weight',
              options: [
                { label: 'Normal', value: 'normal' },
                { label: 'Bold', value: 'bold' },
                { label: 'Medium', value: '500' },
              ],
              defaultValue: 'normal',
            },
          ],
        },
        {
          name: 'descriptionStyles',
          type: 'group',
          label: 'Description Styles',
          fields: [
            ...fontSizeFields,
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
