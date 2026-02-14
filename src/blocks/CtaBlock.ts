import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields, fontSizeFields } from './shared-styling'

export const CtaBlock: Block = {
  slug: 'cta',
  labels: {
    singular: 'CTA Block',
    plural: 'CTA Blocks',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      label: 'CTA Text',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      label: 'CTA Link',
      required: true,
    },
    {
      name: 'buttonStyle',
      type: 'select',
      label: 'Button Style',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Outline', value: 'outline' },
        { label: 'Text', value: 'text' },
      ],
      defaultValue: 'primary',
    },
    {
      type: 'collapsible',
      label: 'Styling',
      fields: [
        ...layoutFields,
        ...colorFields,
        {
          name: 'buttonStyles',
          type: 'group',
          label: 'Button Styles',
          fields: [
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
              name: 'buttonHoverBackgroundColor',
              type: 'text',
              label: 'Button Hover Background Color (hex)',
            },
            {
              name: 'buttonHoverTextColor',
              type: 'text',
              label: 'Button Hover Text Color (hex)',
            },
            {
              name: 'buttonBorderColor',
              type: 'text',
              label: 'Button Border Color (hex)',
            },
            {
              name: 'buttonBorderWidth',
              type: 'number',
              label: 'Button Border Width (px)',
              defaultValue: 0,
            },
            {
              name: 'buttonBorderRadius',
              type: 'number',
              label: 'Button Border Radius (px)',
              defaultValue: 8,
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
                { label: '2XL', value: '2xl' },
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
            {
              name: 'buttonFontWeight',
              type: 'select',
              label: 'Button Font Weight',
              options: [
                { label: 'Normal', value: 'normal' },
                { label: 'Medium', value: '500' },
                { label: 'Bold', value: 'bold' },
                { label: 'Extra Bold', value: '800' },
              ],
              defaultValue: 'bold',
            },
            {
              name: 'buttonAlign',
              type: 'select',
              label: 'Button Alignment',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' },
              ],
              defaultValue: 'center',
            },
            {
              name: 'buttonWidth',
              type: 'select',
              label: 'Button Width',
              options: [
                { label: 'Auto', value: 'auto' },
                { label: 'Full Width', value: 'full' },
                { label: 'Custom', value: 'custom' },
              ],
              defaultValue: 'auto',
            },
            {
              name: 'customButtonWidth',
              type: 'number',
              label: 'Custom Button Width (px)',
              admin: {
                condition: (data) => data.buttonWidth === 'custom',
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
