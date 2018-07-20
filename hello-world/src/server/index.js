// Dependencies
import express from 'express'
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import open from 'open';

// Webpack Configuration
import webpackConfig from '../../webpack.config.babel';

// Server Port
const port = 3000;
// Enviroment
const isDevelopment = process.env.NODE_ENV !== 'production';
// Express app
const app = express();

// Public
app.use(express.static(path.join(__dirname, '../public')));

// Webpack Compiler
const webpackCompiler = webpack(webpackConfig);

// Webpack Middleware
if (isDevelopment) {
  app.use(webpackDevMiddleware(webpackCompiler));
  app.use(webpackHotMiddleware(webpackCompiler));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(port, err => {
   if(!err){
     open(`http://localhost:${port}`);
   }
});
