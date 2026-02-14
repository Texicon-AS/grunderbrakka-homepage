import type { Block } from 'payload'
import { paddingFields, marginFields, colorFields, layoutFields, fontSizeFields, headingFontSizeFields } from './shared-styling'

export const LocationBlock: Block = {
  slug: 'location',
  labels: {
    singular: 'Location Block',
    plural: 'Location Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'partners',
      type: 'array',
      label: 'Partners',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Partner Name',
          required: true,
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Partner Logo',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Partner Link',
        },
      ],
    },
    {
      name: 'mapLinks',
      type: 'group',
      label: 'Map Links',
      fields: [
        {
          name: 'mazeMapLink',
          type: 'text',
          label: 'MazeMap Link',
        },
        {
          name: 'googleMapsLink',
          type: 'text',
          label: 'Google Maps Link',
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
          name: 'titleStyles',
          type: 'group',
          label: 'Title Styles',
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
              defaultValue: 'left',
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
            {
              name: 'descriptionLineHeight',
              type: 'number',
              label: 'Line Height',
              defaultValue: 1.5,
            },
          ],
        },
        {
          name: 'partnerStyles',
          type: 'group',
          label: 'Partner Styles',
          fields: [
            {
              name: 'partnerLayout',
              type: 'select',
              label: 'Partner Layout',
              options: [
                { label: 'Grid', value: 'grid' },
                { label: 'List', value: 'list' },
                { label: 'Carousel', value: 'carousel' },
              ],
              defaultValue: 'grid',
            },
            {
              name: 'partnerColumns',
              type: 'select',
              label: 'Partner Columns',
              options: [
                { label: '2 Columns', value: '2' },
                { label: '3 Columns', value: '3' },
                { label: '4 Columns', value: '4' },
                { label: '5 Columns', value: '5' },
                { label: '6 Columns', value: '6' },
              ],
              defaultValue: '4',
              admin: {
                condition: (data) => data.partnerLayout === 'grid',
              },
            },
            {
              name: 'partnerGap',
              type: 'number',
              label: 'Partner Gap (px)',
              defaultValue: 24,
            },
            {
              name: 'logoMaxWidth',
              type: 'number',
              label: 'Logo Max Width (px)',
              defaultValue: 150,
            },
            {
              name: 'logoMaxHeight',
              type: 'number',
              label: 'Logo Max Height (px)',
              defaultValue: 80,
            },
          ],
        },
        {
          name: 'linkStyles',
          type: 'group',
          label: 'Map Link Styles',
          fields: [
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
            {
              name: 'linkFontSize',
              type: 'select',
              label: 'Link Font Size',
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
              name: 'customLinkFontSize',
              type: 'number',
              label: 'Custom Link Font Size (px)',
              admin: {
                condition: (data) => data.linkFontSize === 'custom',
              },
            },
            {
              name: 'linkDecoration',
              type: 'select',
              label: 'Link Decoration',
              options: [
                { label: 'None', value: 'none' },
                { label: 'Underline', value: 'underline' },
                { label: 'Underline on Hover', value: 'hover-underline' },
              ],
              defaultValue: 'none',
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
