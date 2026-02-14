import { getPayload } from 'payload'
import { config } from 'dotenv'
import payloadConfig from './payload.config'

config()

const start = async () => {
  const payload = await getPayload({
    config: payloadConfig,
    onInit: async (payload) => {
      payload.logger.info(`Payload initialized successfully`)
      payload.logger.info(`Admin panel available at: ${payload.getAdminURL()}`)
    },
  })

  payload.logger.info('Payload CMS server is ready')
}

start()
