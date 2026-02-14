import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields } from './shared-styling'

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
        {
          name: 'formBackgroundColor',
          type: 'text',
          label: 'Form Background Color (hex)',
        },
        {
          name: 'buttonColor',
          type: 'text',
          label: 'Button Color (hex)',
        },
        {
          name: 'inputBorderColor',
          type: 'text',
          label: 'Input Border Color (hex)',
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