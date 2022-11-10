import { App, ExpressReceiver } from '@slack/bolt'
import { createApp } from './src/app'
import { config } from './src/config'

const receiver = new ExpressReceiver({
  signingSecret: config.signingSecret,
})

export const app = createApp({ ...config, receiver })

receiver.router.get('/', (_, res) => {
  res.send('ok')
})