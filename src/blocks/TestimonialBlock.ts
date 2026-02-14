import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields, headingFontSizeFields, fontSizeFields, fontWeightFields, lineHeightFields } from './shared-styling'

export const TestimonialBlock: Block = {
  slug: 'testimonial',
  labels: {
    singular: 'Testimonial Block',
    plural: 'Testimonial Blocks',
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      label: 'Quote Text',
      required: true,
    },
    {
      name: 'founderName',
      type: 'text',
      label: 'Founder Name',
      required: true,
    },
    {
      name: 'founderTitle',
      type: 'text',
      label: 'Founder Title',
    },
    {
      name: 'educationDetails',
      type: 'textarea',
      label: 'Education Details',
    },
    {
      type: 'collapsible',
      label: 'Styling',
      fields: [
        ...layoutFields,
        ...colorFields,
        {
          name: 'quoteColor',
          type: 'text',
          label: 'Quote Color (hex)',
          admin: {
            description: 'Color for quote mark/accent',
          },
        },
        {
          name: 'quoteStyles',
          type: 'group',
          label: 'Quote Styles',
          fields: [
            ...fontSizeFields,
            ...fontWeightFields,
            ...lineHeightFields,
            {
              name: 'quoteTextColor',
              type: 'text',
              label: 'Quote Text Color (hex)',
            },
          ],
        },
        {
          name: 'founderNameStyles',
          type: 'group',
          label: 'Founder Name Styles',
          fields: [
            ...headingFontSizeFields,
            ...fontWeightFields,
            {
              name: 'founderNameColor',
              type: 'text',
              label: 'Founder Name Color (hex)',
            },
          ],
        },
        {
          name: 'founderTitleStyles',
          type: 'group',
          label: 'Founder Title Styles',
          fields: [
            ...fontSizeFields,
            ...fontWeightFields,
            {
              name: 'founderTitleColor',
              type: 'text',
              label: 'Founder Title Color (hex)',
            },
          ],
        },
        {
          name: 'educationStyles',
          type: 'group',
          label: 'Education Details Styles',
          fields: [
            ...fontSizeFields,
            ...fontWeightFields,
            ...lineHeightFields,
            {
              name: 'educationColor',
              type: 'text',
              label: 'Education Color (hex)',
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