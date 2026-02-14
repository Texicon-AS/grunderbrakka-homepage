import type { Field } from 'payload'

export const paddingFields: Field[] = [
  {
    name: 'paddingTop',
    type: 'number',
    label: 'Padding Top (px)',
    defaultValue: 0,
  },
  {
    name: 'paddingBottom',
    type: 'number',
    label: 'Padding Bottom (px)',
    defaultValue: 0,
  },
  {
    name: 'paddingLeft',
    type: 'number',
    label: 'Padding Left (px)',
    defaultValue: 0,
  },
  {
    name: 'paddingRight',
    type: 'number',
    label: 'Padding Right (px)',
    defaultValue: 0,
  },
]

export const marginFields: Field[] = [
  {
    name: 'marginTop',
    type: 'number',
    label: 'Margin Top (px)',
    defaultValue: 0,
  },
  {
    name: 'marginBottom',
    type: 'number',
    label: 'Margin Bottom (px)',
    defaultValue: 0,
  },
]

export const colorFields: Field[] = [
  {
    name: 'backgroundColor',
    type: 'text',
    label: 'Background Color (hex)',
    admin: {
      description: 'Enter hex color code (e.g., #FFFFFF)',
    },
  },
  {
    name: 'textColor',
    type: 'text',
    label: 'Text Color (hex)',
    admin: {
      description: 'Enter hex color code (e.g., #000000)',
    },
  },
]

export const layoutFields: Field[] = [
  {
    name: 'layout',
    type: 'select',
    label: 'Layout',
    options: [
      {
        label: 'Full Width',
        value: 'full-width',
      },
      {
        label: 'Constrained',
        value: 'constrained',
      },
      {
        label: 'Container',
        value: 'container',
      },
    ],
    defaultValue: 'full-width',
  },
  {
    name: 'maxWidth',
    type: 'number',
    label: 'Max Width (px)',
    admin: {
      condition: (data) => data.layout === 'constrained' || data.layout === 'container',
      description: 'Maximum width for constrained/container layouts',
    },
  },
]

export const fontSizeFields: Field[] = [
  {
    name: 'fontSize',
    type: 'select',
    label: 'Font Size',
    options: [
      {
        label: 'Extra Small',
        value: 'xs',
      },
      {
        label: 'Small',
        value: 'sm',
      },
      {
        label: 'Base',
        value: 'base',
      },
      {
        label: 'Large',
        value: 'lg',
      },
      {
        label: 'Extra Large',
        value: 'xl',
      },
      {
        label: '2XL',
        value: '2xl',
      },
      {
        label: '3XL',
        value: '3xl',
      },
      {
        label: '4XL',
        value: '4xl',
      },
      {
        label: '5XL',
        value: '5xl',
      },
      {
        label: '6XL',
        value: '6xl',
      },
      {
        label: 'Custom',
        value: 'custom',
      },
    ],
    defaultValue: 'base',
  },
  {
    name: 'customFontSize',
    type: 'number',
    label: 'Custom Font Size (px)',
    admin: {
      condition: (data) => data.fontSize === 'custom',
    },
  },
]

export const headingFontSizeFields: Field[] = [
  {
    name: 'headingFontSize',
    type: 'select',
    label: 'Heading Font Size',
    options: [
      {
        label: 'H1',
        value: 'h1',
      },
      {
        label: 'H2',
        value: 'h2',
      },
      {
        label: 'H3',
        value: 'h3',
      },
      {
        label: 'H4',
        value: 'h4',
      },
      {
        label: 'H5',
        value: 'h5',
      },
      {
        label: 'H6',
        value: 'h6',
      },
      {
        label: 'Custom',
        value: 'custom',
      },
    ],
    defaultValue: 'h1',
  },
  {
    name: 'customHeadingFontSize',
    type: 'number',
    label: 'Custom Heading Font Size (px)',
    admin: {
      condition: (data) => data.headingFontSize === 'custom',
    },
  },
]

export const fontWeightFields: Field[] = [
  {
    name: 'fontWeight',
    type: 'select',
    label: 'Font Weight',
    options: [
      { label: 'Normal', value: 'normal' },
      { label: '400', value: '400' },
      { label: '500 (Medium)', value: '500' },
      { label: '600 (Semi Bold)', value: '600' },
      { label: 'Bold', value: 'bold' },
      { label: '700', value: '700' },
      { label: '800 (Extra Bold)', value: '800' },
      { label: '900', value: '900' },
    ],
    defaultValue: 'normal',
  },
]

export const lineHeightFields: Field[] = [
  {
    name: 'lineHeight',
    type: 'select',
    label: 'Line Height',
    options: [
      { label: '1.0', value: '1.0' },
      { label: '1.2', value: '1.2' },
      { label: '1.4', value: '1.4' },
      { label: '1.5', value: '1.5' },
      { label: '1.6', value: '1.6' },
      { label: '1.8', value: '1.8' },
      { label: '2.0', value: '2.0' },
      { label: 'Custom', value: 'custom' },
    ],
    defaultValue: '1.5',
  },
  {
    name: 'customLineHeight',
    type: 'number',
    label: 'Custom Line Height',
    admin: {
      condition: (data) => data.lineHeight === 'custom',
      description: 'Enter custom line height value (e.g., 1.75)',
    },
  },
]

export const logoConfigFields: Field[] = [
  {
    name: 'logoMaxWidth',
    type: 'number',
    label: 'Logo Max Width (px)',
    defaultValue: 200,
  },
  {
    name: 'logoMaxHeight',
    type: 'number',
    label: 'Logo Max Height (px)',
    defaultValue: 100,
  },
]
