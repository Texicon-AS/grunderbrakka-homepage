# Payload CMS v3 Setup Documentation

This document provides comprehensive instructions for setting up and running the Grunderbrakka Homepage project with Payload CMS v3.

## Prerequisites

- Node.js v18 or higher
- npm or yarn package manager
- MongoDB database (local or cloud instance)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Texicon-AS/grunderbrakka-homepage.git
cd grunderbrakka-homepage
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

Edit `.env` and set the following variables:

- `PAYLOAD_SECRET`: A secure random string used for encryption (generate a strong secret)
- `DATABASE_URI`: MongoDB connection string (e.g., `mongodb://localhost:27017/grunderbrakka`)
- `PORT`: Server port (default: 3000)

### 4. Database Setup

Ensure MongoDB is running. For local development:

```bash
mongod
```

Or use a cloud MongoDB service like MongoDB Atlas and update the `DATABASE_URI` in your `.env` file.

## Running the Application

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

The server will initialize Payload CMS. Note: Payload v3 is typically used with Next.js for full admin panel and API functionality. For a standalone setup, you may need to integrate with Next.js or set up Express routes manually.

### Production Mode

Build the TypeScript files:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Accessing the Admin Panel

Payload CMS v3 is designed to work with Next.js. For full admin panel functionality, consider:

1. Installing Next.js and using `@payloadcms/next` package
2. Or setting up Express routes manually to serve the admin panel and API

The current setup initializes Payload CMS core functionality. To access the admin panel, integrate with Next.js or configure Express routes.

## Project Structure

```
grunderbrakka-homepage/
├── src/
│   ├── collections/
│   │   ├── Hero.ts          # Hero section content
│   │   ├── About.ts         # About section content
│   │   ├── Location.ts      # Location information
│   │   ├── Application.ts   # Application submissions
│   │   ├── Users.ts         # User authentication
│   │   └── Media.ts         # Media uploads
│   ├── globals/
│   │   └── Settings.ts      # Global site settings
│   ├── payload.config.ts    # Payload CMS configuration
│   └── server.ts            # Express server entry point
├── .env.example             # Environment variables template
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies
└── SETUP.md                 # This file
```

## Collections

### Hero
Manages the hero section of the homepage with title, subtitle, description, image, and call-to-action elements.

### About
Contains about page content including title, rich text content, images, mission, and vision statements.

### Location
Stores location information including address, coordinates, contact details, and opening hours.

### Application
Handles application submissions with name, email, phone, message, and status tracking.

### Users
Manages user authentication and admin access.

### Media
Handles file uploads and media management.

## Globals

### Settings
Global site settings including site name, description, contact email, and social media links.

## TypeScript Types

Generate TypeScript types from your Payload configuration:

```bash
npm run generate:types
```

This creates `src/payload-types.ts` with type definitions for all collections and globals.

## API Endpoints

Payload CMS automatically generates REST and GraphQL APIs for all collections:

- REST API: `http://localhost:3000/api/{collection-slug}`
- GraphQL API: `http://localhost:3000/api/graphql`
- Admin Panel: `http://localhost:3000/admin`

## Development Tips

1. **Hot Reload**: The development server uses nodemon for automatic restarts on file changes.

2. **Type Safety**: Use the generated types from `payload-types.ts` in your frontend or API consumers.

3. **Database**: Use MongoDB Compass or similar tools to inspect your database directly.

4. **Logging**: Check server logs for Payload CMS initialization and API requests.

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, change the `PORT` in your `.env` file.

### Database Connection Issues
- Verify MongoDB is running
- Check your `DATABASE_URI` format
- Ensure network access if using a remote database

### Type Generation Errors
- Ensure all collections are properly configured
- Check for TypeScript compilation errors
- Run `npm run build` to see detailed error messages

## Next Steps

1. Create your first admin user via the admin panel
2. Configure your site settings in the Settings global
3. Add content to your collections
4. Integrate the API with your frontend application

## Resources

- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Payload CMS v3 Migration Guide](https://payloadcms.com/docs/migrating-to-v3)
- [MongoDB Documentation](https://docs.mongodb.com/)
