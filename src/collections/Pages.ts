import type { CollectionConfig } from 'payload'
import { HeroBlock, DeadlineBlock, IntroBlock, ValuesBlock, LocationBlock, CtaBlock, StartupCardBlock, TestimonialBlock, ContactFormBlock, SimpleTextBlock, IconSectionBlock, FAQBlock, PartnerLogosBlock, StartupGridBlock } from '../blocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Page Title',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier for this page',
      },
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Content Blocks',
      blocks: [
        HeroBlock,
        DeadlineBlock,
        IntroBlock,
        ValuesBlock,
        LocationBlock,
        CtaBlock,
        StartupCardBlock,
        TestimonialBlock,
        ContactFormBlock,
        SimpleTextBlock,
        IconSectionBlock,
        FAQBlock,
        PartnerLogosBlock,
        StartupGridBlock,
      ],
    },
  ],
}
