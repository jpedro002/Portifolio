import 'dotenv/config'
import * as prismic from '@prismicio/client'


export const client = prismic.createClient(process.env.REPOSITORY_NAME, {
  accessToken: process.env.ACCESS_TOKEN,
})

console.log(client);