import webpack from 'webpack'
import serverConfig from '../webpack.server'
import clientConfig from '../webpack.config'
import devMid from 'webpack-dev-middleware'
import hotMid from 'webpack-hot-middleware'
import express from 'express'
import c from 'chalk'

const devServer = express()

webpack(serverConfig, (err, stats)=> {
  console.log(stats.toString({
    colors: true,
    chunks: false
  }))
})

const clientPacker = webpack(clientConfig)

devServer
  .use(devMid(clientPacker, {
    stats: {
      colors: true,
      chunks: false
    },
    publicPath: clientConfig.output.publicPath
  }))
  .use(hotMid(clientPacker))
  .listen(clientConfig.hotPort, ()=> {
    console.log(`⚡️  Webpack dev server is listening on ${c.cyan(clientConfig.hotPort)}`)
  })

require('piping')({ main: './src/server', hook:true })
