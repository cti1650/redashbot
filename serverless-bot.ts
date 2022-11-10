import { App, ExpressReceiver } from '@slack/bolt'
import serverlessExpress from "@vendia/serverless-express";
import { createApp } from './src/app'
import { config } from './src/config'

const receiver = new ExpressReceiver({
  signingSecret: config.signingSecret,
})

const app = createApp({ ...config, receiver })

receiver.router.get('/', (_, res) => {
  res.send('ok')
})

receiver.router.get('/api', (_, res) => {
  res.send('ok')
})

module.exports = serverlessExpress({
  app: receiver.app,
});