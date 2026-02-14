export interface PaddingConfig {
  paddingTop?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingRight?: number
}

export interface MarginConfig {
  marginTop?: number
  marginBottom?: number
}

export interface ColorConfig {
  backgroundColor?: string
  textColor?: string
}

export interface LayoutConfig {
  layout?: 'full-width' | 'constrained' | 'container'
  maxWidth?: number
}

export interface FontSizeConfig {
  fontSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | 'custom'
  customFontSize?: number
}

export interface HeadingFontSizeConfig {
  headingFontSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'custom'
  customHeadingFontSize?: number
}

export interface HeroBlockType {
  blockType: 'hero'
  heading: string
  subtitle?: string
  description?: string
  image?: string | number
  cta?: {
    text?: string
    link?: string
    buttonBackgroundColor?: string
    buttonTextColor?: string
    buttonPadding?: {
      top?: number
      bottom?: number
      left?: number
      right?: number
    }
    buttonFontSize?: 'sm' | 'base' | 'lg' | 'xl' | 'custom'
    customButtonFontSize?: number
  }
  layout?: LayoutConfig['layout']
  maxWidth?: number
  backgroundColor?: string
  textColor?: string
  headingStyles?: {
    headingFontSize?: HeadingFontSizeConfig['headingFontSize']
    customHeadingFontSize?: number
    headingColor?: string
    headingFontWeight?: 'normal' | 'bold' | '800' | '900'
  }
  subtitleStyles?: {
    fontSize?: FontSizeConfig['fontSize']
    customFontSize?: number
    subtitleColor?: string
    subtitleFontWeight?: 'normal' | 'bold' | '500'
  }
  descriptionStyles?: {
    fontSize?: FontSizeConfig['fontSize']
    customFontSize?: number
    descriptionColor?: string
  }
  spacing?: PaddingConfig & MarginConfig
}

export interface DeadlineBlockType {
  blockType: 'deadline'
  deadlineText: string
  deadlineDate?: string
  layout?: LayoutConfig['layout']
  maxWidth?: number
  backgroundColor?: string
  textColor?: string
  textStyles?: {
    headingFontSize?: HeadingFontSizeConfig['headingFontSize']
    customHeadingFontSize?: number
    textColor?: string
    fontWeight?: 'normal' | 'bold' | '800' | '900'
    textAlign?: 'left' | 'center' | 'right'
  }
  spacing?: PaddingConfig & MarginConfig
}

export interface IntroBlockType {
  blockType: 'intro'
  content: any
  emphasisText?: string
  layout?: LayoutConfig['layout']
  maxWidth?: number
  backgroundColor?: string
  textColor?: string
  textStyles?: {
    fontSize?: FontSizeConfig['fontSize']
    customFontSize?: number
    textColor?: string
    lineHeight?: number
    textAlign?: 'left' | 'center' | 'right' | 'justify'
  }
  emphasisStyles?: {
    emphasisColor?: string
    emphasisFontWeight?: 'normal' | 'bold' | '800'
    emphasisFontSize?: 'inherit' | 'sm' | 'base' | 'lg' | 'xl' | 'custom'
    customEmphasisFontSize?: number
  }
  spacing?: PaddingConfig & MarginConfig
}

export interface ValueItem {
  title: string
  description: string
  icon?: string | number
}

export interface ValuesBlockType {
  blockType: 'values'
  title?: string
  values: ValueItem[]
  layout?: LayoutConfig['layout']
  maxWidth?: number
  backgroundColor?: string
  textColor?: string
  columns?: '1' | '2' | '3' | '4'
  columnGap?: number
  titleStyles?: {
    headingFontSize?: HeadingFontSizeConfig['headingFontSize']
    customHeadingFontSize?: number
    titleColor?: string
    titleAlign?: 'left' | 'center' | 'right'
  }
  valueTitleStyles?: {
    headingFontSize?: HeadingFontSizeConfig['headingFontSize']
    customHeadingFontSize?: number
    valueTitleColor?: string
    valueTitleFontWeight?: 'normal' | 'bold' | '800'
  }
  valueDescriptionStyles?: {
    fontSize?: FontSizeConfig['fontSize']
    customFontSize?: number
    valueDescriptionColor?: string
    valueDescriptionLineHeight?: number
  }
  cardStyles?: {
    cardBackgroundColor?: string
    cardPadding?: {
      top?: number
      bottom?: number
      left?: number
      right?: number
    }
    cardBorderRadius?: number
    cardBorderColor?: string
    cardBorderWidth?: number
  }
  spacing?: PaddingConfig & MarginConfig
}

export interface Partner {
  name: string
  logo?: string | number
  link?: string
}

export interface LocationBlockType {
  blockType: 'location'
  title: string
  description?: string
  partners?: Partner[]
  mapLinks?: {
    mazeMapLink?: string
    googleMapsLink?: string
  }
  layout?: LayoutConfig['layout']
  maxWidth?: number
  backgroundColor?: string
  textColor?: string
  titleStyles?: {
    headingFontSize?: HeadingFontSizeConfig['headingFontSize']
    customHeadingFontSize?: number
    titleColor?: string
    titleAlign?: 'left' | 'center' | 'right'
  }
  descriptionStyles?: {
    fontSize?: FontSizeConfig['fontSize']
    customFontSize?: number
    descriptionColor?: string
    descriptionLineHeight?: number
  }
  partnerStyles?: {
    partnerLayout?: 'grid' | 'list' | 'carousel'
    partnerColumns?: '2' | '3' | '4' | '5' | '6'
    partnerGap?: number
    logoMaxWidth?: number
    logoMaxHeight?: number
  }
  linkStyles?: {
    linkColor?: string
    linkHoverColor?: string
    linkFontSize?: 'sm' | 'base' | 'lg' | 'xl' | 'custom'
    customLinkFontSize?: number
    linkDecoration?: 'none' | 'underline' | 'hover-underline'
  }
  spacing?: PaddingConfig & MarginConfig
}

export interface CtaBlockType {
  blockType: 'cta'
  text: string
  link: string
  buttonStyle?: 'primary' | 'secondary' | 'outline' | 'text'
  layout?: LayoutConfig['layout']
  maxWidth?: number
  backgroundColor?: string
  textColor?: string
  buttonStyles?: {
    buttonBackgroundColor?: string
    buttonTextColor?: string
    buttonHoverBackgroundColor?: string
    buttonHoverTextColor?: string
    buttonBorderColor?: string
    buttonBorderWidth?: number
    buttonBorderRadius?: number
    buttonPadding?: {
      top?: number
      bottom?: number
      left?: number
      right?: number
    }
    buttonFontSize?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | 'custom'
    customButtonFontSize?: number
    buttonFontWeight?: 'normal' | '500' | 'bold' | '800'
    buttonAlign?: 'left' | 'center' | 'right'
    buttonWidth?: 'auto' | 'full' | 'custom'
    customButtonWidth?: number
  }
  spacing?: PaddingConfig & MarginConfig
}

export interface StartupCardBlockType {
  blockType: 'startupCard'
  startupTitle: string
  description: string
  logo?: string | number
  contactUrl?: string
  buttonText?: string
  layout?: LayoutConfig['layout']
  maxWidth?: number
  backgroundColor?: string
  textColor?: string
  borderRadius?: number
  hoverEffect?: 'none' | 'scale' | 'shadow' | 'lift'
  spacing?: PaddingConfig & MarginConfig
}

export interface TestimonialBlockType {
  blockType: 'testimonial'
  quote: string
  founderName: string
  founderTitle?: string
  educationDetails?: string
  layout?: LayoutConfig['layout']
  maxWidth?: number
  backgroundColor?: string
  textColor?: string
  quoteColor?: string
  spacing?: PaddingConfig & MarginConfig
}

export interface ContactFormBlockType {
  blockType: 'contactForm'
  formTitle?: string
  formDescription?: string
  submitButtonText?: string
  layout?: LayoutConfig['layout']
  maxWidth?: number
  formBackgroundColor?: string
  buttonColor?: string
  inputBorderColor?: string
  spacing?: PaddingConfig & MarginConfig
}

export interface SimpleTextBlockType {
  blockType: 'simpleText'
  heading?: string
  bodyText?: string
  personName?: string
  contactEmail?: string
  image?: string | number
  layout?: LayoutConfig['layout']
  maxWidth?: number
  backgroundColor?: string
  textColor?: string
  spacing?: PaddingConfig & MarginConfig
}

export interface IconSectionItem {
  icon?: string | number
  title: string
  description: string
}

export interface IconSectionBlockType {
  blockType: 'iconSection'
  sections: IconSectionItem[]
  layout?: LayoutConfig['layout']
  maxWidth?: number
  backgroundColor?: string
  textColor?: string
  iconColor?: string
  columnCount?: '1' | '2' | '3' | '4'
  gap?: number
  spacing?: PaddingConfig & MarginConfig
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQBlockType {
  blockType: 'faq'
  questions: FAQItem[]
  layout?: LayoutConfig['layout']
  maxWidth?: number
  backgroundColor?: string
  textColor?: string
  accentColor?: string
  borderRadius?: number
  spacing?: PaddingConfig & MarginConfig
}

export interface PartnerLogoItem {
  logo: string | number
  name?: string
  url?: string
}

export interface PartnerLogosBlockType {
  blockType: 'partnerLogos'
  partners: PartnerLogoItem[]
  layout?: LayoutConfig['layout']
  maxWidth?: number
  backgroundColor?: string
  textColor?: string
  maxColumns?: '2' | '3' | '4' | '5' | '6'
  gap?: number
  logoMaxHeight?: number
  spacing?: PaddingConfig & MarginConfig
}

export interface StartupGridItem {
  title: string
  description?: string
  logo?: string | number
  url?: string
  buttonText?: string
}

export interface StartupGridBlockType {
  blockType: 'startupGrid'
  startups: StartupGridItem[]
  layout?: LayoutConfig['layout']
  maxWidth?: number
  backgroundColor?: string
  textColor?: string
  columnCount?: '1' | '2' | '3' | '4'
  gap?: number
  cardBackgroundColor?: string
  cardBorderRadius?: number
  spacing?: PaddingConfig & MarginConfig
}

export type BlockType =
  | HeroBlockType
  | DeadlineBlockType
  | IntroBlockType
  | ValuesBlockType
  | LocationBlockType
  | CtaBlockType
  | StartupCardBlockType
  | TestimonialBlockType
  | ContactFormBlockType
  | SimpleTextBlockType
  | IconSectionBlockType
  | FAQBlockType
  | PartnerLogosBlockType
  | StartupGridBlockType
