import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'

import { Hero } from './collections/Hero'
import { About } from './collections/About'
import { Location } from './collections/Location'
import { Application } from './collections/Application'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Settings } from './globals/Settings'

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    Users,
    Media,
    Pages,
    Hero,
    About,
    Location,
    Application,
  ],
  globals: [
    Settings,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
})
