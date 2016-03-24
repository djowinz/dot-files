

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var https = require('https');
var http = require('http');
var fs = require('fs');
var url = require('url');

// Set the initial version by reading from the file.
var json = JSON.parse(fs.readFileSync(require.resolve('./package.json')));
var version = /^(\d+)\.(\d+)\.(\d+)(?:-([a-z0-9.-]+))?$/.exec(json.version)[2];

function processArgs() {
  var args = process.argv.slice(2);
  var processedArgs = {};

  args.forEach(function (argument, index) {
    if (index % 2 !== 0) {
      processedArgs[args[index - 1].slice(2)] = argument;
    }
  });
  return processedArgs;
}

function startServer(args) {
  var _webServer = undefined;
  if (args.key && args.cert && args.ca) {
    var webServerOptions = {
      key: fs.readFileSync(args.key),
      cert: fs.readFileSync(args.cert),
      ca: fs.readFileSync(args.ca),
      requestCert: true,
      rejectUnauthorized: true
    };

    // $FlowIssue https://github.com/facebook/flow/issues/1137
    _webServer = https.createServer(webServerOptions, handleRequest);
    console.log('running in secure mode'); //eslint-disable-line no-console
  } else {
      _webServer = http.createServer(handleRequest);
    }

  _webServer.on('listening', function () {
    console.log('listening on port ' + args.port); //eslint-disable-line no-console
  });

  _webServer.listen(args.port || 8084, '::');
}

function handleRequest(request, response) {
  var pathname = url.parse(request.url, false).pathname;

  switch (pathname) {
    case '/heartbeat':
      handleVersion(request, response);
      break;
    default:
      response.writeHead(500);
      response.write('This mock server does not understand that command');
      response.end();
      break;
  }
}

function handleVersion(request, response) {
  response.writeHead(200);
  response.write(version);
  response.end();
}

startServer(processArgs());
//# sourceMappingURL=data:application/json;base64,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Q0FBQyxDQUFDO0FBQ3hCLGNBQVEsQ0FBQyxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztBQUNwRSxjQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDZixZQUFNO0FBQUEsR0FDVDtDQUNGOztBQUdELFNBQVMsYUFBYSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7QUFDeEMsVUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QixVQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hCLFVBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztDQUNoQjs7QUFFRCxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJudWNsaWRlLW1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcbi8qIEBmbG93ICovXG5cbi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluXG4gKiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5jb25zdCBodHRwcyA9IHJlcXVpcmUoJ2h0dHBzJyk7XG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgdXJsID0gcmVxdWlyZSgndXJsJyk7XG5cbi8vIFNldCB0aGUgaW5pdGlhbCB2ZXJzaW9uIGJ5IHJlYWRpbmcgZnJvbSB0aGUgZmlsZS5cbmNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhyZXF1aXJlLnJlc29sdmUoJy4vcGFja2FnZS5qc29uJykpKTtcbmNvbnN0IHZlcnNpb24gPSAvXihcXGQrKVxcLihcXGQrKVxcLihcXGQrKSg/Oi0oW2EtejAtOS4tXSspKT8kLy5leGVjKGpzb24udmVyc2lvbilbMl07XG5cbmZ1bmN0aW9uIHByb2Nlc3NBcmdzKCkge1xuICBjb25zdCBhcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIpO1xuICBjb25zdCBwcm9jZXNzZWRBcmdzID0ge307XG5cbiAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChhcmd1bWVudCwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggJSAyICE9PSAwKSB7XG4gICAgICBwcm9jZXNzZWRBcmdzW2FyZ3NbaW5kZXggLSAxXS5zbGljZSgyKV0gPSBhcmd1bWVudDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcHJvY2Vzc2VkQXJncztcbn1cblxuZnVuY3Rpb24gc3RhcnRTZXJ2ZXIoYXJncykge1xuICBsZXQgX3dlYlNlcnZlcjtcbiAgaWYgKGFyZ3Mua2V5ICYmIGFyZ3MuY2VydCAmJiBhcmdzLmNhKSB7XG4gICAgY29uc3Qgd2ViU2VydmVyT3B0aW9ucyA9IHtcbiAgICAgIGtleTogZnMucmVhZEZpbGVTeW5jKGFyZ3Mua2V5KSxcbiAgICAgIGNlcnQ6IGZzLnJlYWRGaWxlU3luYyhhcmdzLmNlcnQpLFxuICAgICAgY2E6IGZzLnJlYWRGaWxlU3luYyhhcmdzLmNhKSxcbiAgICAgIHJlcXVlc3RDZXJ0OiB0cnVlLFxuICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiB0cnVlLFxuICAgIH07XG5cbiAgICAvLyAkRmxvd0lzc3VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xMTM3XG4gICAgX3dlYlNlcnZlciA9IGh0dHBzLmNyZWF0ZVNlcnZlcih3ZWJTZXJ2ZXJPcHRpb25zLCBoYW5kbGVSZXF1ZXN0KTtcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBpbiBzZWN1cmUgbW9kZScpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICB9IGVsc2Uge1xuICAgIF93ZWJTZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihoYW5kbGVSZXF1ZXN0KTtcbiAgfVxuXG4gIF93ZWJTZXJ2ZXIub24oJ2xpc3RlbmluZycsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnbGlzdGVuaW5nIG9uIHBvcnQgJyArIGFyZ3MucG9ydCk7IC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIH0pO1xuXG4gIF93ZWJTZXJ2ZXIubGlzdGVuKGFyZ3MucG9ydCB8fCA4MDg0LCAnOjonKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChyZXF1ZXN0LCByZXNwb25zZSkge1xuICBjb25zdCBwYXRobmFtZSA9IHVybC5wYXJzZShyZXF1ZXN0LnVybCwgZmFsc2UpLnBhdGhuYW1lO1xuXG4gIHN3aXRjaCAocGF0aG5hbWUpIHtcbiAgICBjYXNlICcvaGVhcnRiZWF0JzpcbiAgICAgIGhhbmRsZVZlcnNpb24ocmVxdWVzdCwgcmVzcG9uc2UpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlc3BvbnNlLndyaXRlSGVhZCg1MDApO1xuICAgICAgcmVzcG9uc2Uud3JpdGUoJ1RoaXMgbW9jayBzZXJ2ZXIgZG9lcyBub3QgdW5kZXJzdGFuZCB0aGF0IGNvbW1hbmQnKTtcbiAgICAgIHJlc3BvbnNlLmVuZCgpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBoYW5kbGVWZXJzaW9uKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHJlc3BvbnNlLndyaXRlSGVhZCgyMDApO1xuICByZXNwb25zZS53cml0ZSh2ZXJzaW9uKTtcbiAgcmVzcG9uc2UuZW5kKCk7XG59XG5cbnN0YXJ0U2VydmVyKHByb2Nlc3NBcmdzKCkpO1xuIl19