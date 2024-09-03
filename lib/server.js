const hazel = require('./index')
const repo = "robo-heaver"

const {
  INTERVAL: interval,
  ACCOUNT: RoboCoderXX,
  REPOSITORY: repo,
  PRE: pre,
  TOKEN: token,
  URL: PRIVATE_BASE_URL,
  VERCEL_URL
} = process.env

const url = VERCEL_URL || PRIVATE_BASE_URL

module.exports = hazel({
  interval,
  account,
  repository,
  pre,
  token,
  url
})
