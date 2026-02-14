import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields, fontSizeFields, headingFontSizeFields } from './shared-styling'

export const ValuesBlock: Block = {
  slug: 'values',
  labels: {
    singular: 'Values Block',
    plural: 'Values Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
    },
    {
      name: 'values',
      type: 'array',
      label: 'Values',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Value Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Value Description',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon/Image',
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
          name: 'columns',
          type: 'select',
          label: 'Number of Columns',
          options: [
            { label: '1 Column', value: '1' },
            { label: '2 Columns', value: '2' },
            { label: '3 Columns', value: '3' },
            { label: '4 Columns', value: '4' },
          ],
          defaultValue: '3',
        },
        {
          name: 'columnGap',
          type: 'number',
          label: 'Column Gap (px)',
          defaultValue: 24,
        },
        {
          name: 'titleStyles',
          type: 'group',
          label: 'Section Title Styles',
          fields: [
            ...headingFontSizeFields,
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color (hex)',
            },
            {
              name: 'titleAlign',
              type: 'select',
              label: 'Title Alignment',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' },
              ],
              defaultValue: 'center',
            },
          ],
        },
        {
          name: 'valueTitleStyles',
          type: 'group',
          label: 'Value Title Styles',
          fields: [
            ...headingFontSizeFields,
            {
              name: 'valueTitleColor',
              type: 'text',
              label: 'Value Title Color (hex)',
            },
            {
              name: 'valueTitleFontWeight',
              type: 'select',
              label: 'Value Title Font Weight',
              options: [
                { label: 'Normal', value: 'normal' },
                { label: 'Bold', value: 'bold' },
                { label: 'Extra Bold', value: '800' },
              ],
              defaultValue: 'bold',
            },
          ],
        },
        {
          name: 'valueDescriptionStyles',
          type: 'group',
          label: 'Value Description Styles',
          fields: [
            ...fontSizeFields,
            {
              name: 'valueDescriptionColor',
              type: 'text',
              label: 'Value Description Color (hex)',
            },
            {
              name: 'valueDescriptionLineHeight',
              type: 'number',
              label: 'Line Height',
              defaultValue: 1.5,
            },
          ],
        },
        {
          name: 'cardStyles',
          type: 'group',
          label: 'Card Styles',
          fields: [
            {
              name: 'cardBackgroundColor',
              type: 'text',
              label: 'Card Background Color (hex)',
            },
            {
              name: 'cardPadding',
              type: 'group',
              label: 'Card Padding',
              fields: [
                {
                  name: 'top',
                  type: 'number',
                  label: 'Top (px)',
                  defaultValue: 24,
                },
                {
                  name: 'bottom',
                  type: 'number',
                  label: 'Bottom (px)',
                  defaultValue: 24,
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
              name: 'cardBorderRadius',
              type: 'number',
              label: 'Card Border Radius (px)',
              defaultValue: 0,
            },
            {
              name: 'cardBorderColor',
              type: 'text',
              label: 'Card Border Color (hex)',
            },
            {
              name: 'cardBorderWidth',
              type: 'number',
              label: 'Card Border Width (px)',
              defaultValue: 0,
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
