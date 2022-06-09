const fs = require('fs');

function getFiles(filePath) {
  return fs.readdirSync(filePath, { encoding: 'utf-8', withFileTypes: true });
}

function isDir(filepath) {
  const stat = fs.statSync(filepath);
  return stat.isDirectory();
}

function getRepeatTimes(str, repeatStr) {
  let times = 0;
  let b = str.indexOf(repeatStr);
  while (b !== -1) {
    times++;
    b = str.indexOf(repeatStr, b + repeatStr.length);
  }
  return times;
}

function getMDFiels(filePath) {
  const filesArr = getFiles(filePath);
  filesArr.forEach(item => {
    if (item.name.includes('.md')) {
      fs.readFile(`${filePath}/${item.name}`, 'utf8', (err, data) => {
        const code = data;
        if (getRepeatTimes(code, '<<<<<<< HEAD') === 1) {
          const incomingCode = code.match(/(?<=={7})[\S\s]*(?=>{7} [\da-z]*\n)/)?.[0];
          const withoutConflict = code.replace(/<{7} HEAD[\S\s]*>{7} [\da-z]*\n/, incomingCode);
          const replaceAntd = withoutConflict.replace(/from 'antd/g, "from 'infrad");
          const replaceAntdIcon = replaceAntd.replace(
            /from '@ant-design\/icons/g,
            "from 'infra-design-icons",
          );

          fs.writeFile(`${filePath}/${item.name}`, replaceAntdIcon, error => {
            if (error) throw error;
          });
        }
      });
    } else if (isDir(`${filePath}/${item.name}`)) {
      getMDFiels(`${filePath}/${item.name}`);
    }
  });
}

getMDFiels('components');
