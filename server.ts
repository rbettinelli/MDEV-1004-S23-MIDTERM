#!/usr/bin/env node

// -------------------------------------------------------------
// - Robert Bettinelli - MDEV1004 - S2023 - Assignment#1
// - 090003683@student.georgianc.on.ca
// -------------------------------------------------------------
// Server.ts - As Provided in Class Instruction
// Personally entered and followed as pert of in class learning.
// -------------------------------------------------------------
// 06/10/2023 - RBettinelli - Header and Documentation Added
// -------------------------------------------------------------

/**
 * Module dependencies.
 */

import app from './Server/Config/app';
import debug from 'debug';
debug('mdev-1004-s23-ice3:server');
import http from 'http';
import { HttpError } from 'http-errors';
import { AddressInfo } from 'net'

/**
 * Get port from environment and store in Express.
 */

let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: HttpError) : void {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() : void {
  let addr = server.address() as AddressInfo;
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
