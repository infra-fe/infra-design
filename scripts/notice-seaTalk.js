const path = require('path');
const request = require('request');

const cwd = process.cwd();

const { version } = require(path.resolve(cwd, 'package.json'));

function noticeSeaTalk() {
  request({
    url: 'https://openapi.seatalk.io/webhook/group/_mh_SKGeQruZ49eX4CzqQw',
    method: 'POST',
    json: true,
    headers: {
      'content-type': 'application/json',
    },
    body: {
      tag: 'text',
      text: {
        content: `Hello, everyone! Infrad has released version ${version}, Please check the update details from https://bolifestudio.com/changelog-cn`,
        at_all: true,
      },
    },
  });
}

noticeSeaTalk();
