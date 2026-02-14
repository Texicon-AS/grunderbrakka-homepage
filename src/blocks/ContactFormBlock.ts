import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields, headingFontSizeFields, fontSizeFields, fontWeightFields, lineHeightFields } from './shared-styling'

export const ContactFormBlock: Block = {
  slug: 'contactForm',
  labels: {
    singular: 'Contact Form Block',
    plural: 'Contact Form Blocks',
  },
  fields: [
    {
      name: 'formTitle',
      type: 'text',
      label: 'Form Title',
    },
    {
      name: 'formDescription',
      type: 'textarea',
      label: 'Form Description',
    },
    {
      name: 'submitButtonText',
      type: 'text',
      label: 'Submit Button Text',
      defaultValue: 'Send',
    },
    {
      type: 'collapsible',
      label: 'Styling',
      fields: [
        ...layoutFields,
        ...colorFields,
        {
          name: 'formBackgroundColor',
          type: 'text',
          label: 'Form Background Color (hex)',
        },
        {
          name: 'titleStyles',
          type: 'group',
          label: 'Form Title Styles',
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
          label: 'Form Description Styles',
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
          name: 'inputStyles',
          type: 'group',
          label: 'Input Styles',
          fields: [
            {
              name: 'inputFontSize',
              type: 'select',
              label: 'Input Font Size',
              options: [
                { label: 'Small', value: 'sm' },
                { label: 'Base', value: 'base' },
                { label: 'Large', value: 'lg' },
                { label: 'Custom', value: 'custom' },
              ],
              defaultValue: 'base',
            },
            {
              name: 'customInputFontSize',
              type: 'number',
              label: 'Custom Input Font Size (px)',
              admin: {
                condition: (data) => data.inputFontSize === 'custom',
              },
            },
            {
              name: 'inputBorderColor',
              type: 'text',
              label: 'Input Border Color (hex)',
            },
            {
              name: 'inputTextColor',
              type: 'text',
              label: 'Input Text Color (hex)',
            },
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
              name: 'buttonColor',
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