/* eslint-disable import/no-dynamic-require, no-console */
const path = require('path');
const axios = require('axios');

const cwd = process.cwd();

const { version } = require(path.resolve(cwd, 'package.json'));
const seatalkUrl = 'https://openapi.seatalk.io/webhook/group/_mh_SKGeQruZ49eX4CzqQw';

function noticeSeaTalk() {
  axios
    .post(seatalkUrl, {
      tag: 'text',
      text: {
        content: `Hello, everyone! Infrad has released version ${version}, Please check the update details from https://bolifestudio.com/changelog-cn`,
        at_all: true,
      },
    })
    .then(res => {
      console.log(res);
      console.log('Successful notice in seatalk.');
    })
    .catch(e => {
      console.log(e);
    });
}

noticeSeaTalk();
