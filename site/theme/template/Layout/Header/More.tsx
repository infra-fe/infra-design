import type { MenuProps } from 'antd';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
// import { Dropdown, Menu, Button } from 'antd';
// import { DownOutlined } from 'infra-design-icons';
// import type { SharedProps } from './interface';

// const smallStyle = { fontSize: 12, color: '#777', marginLeft: '0.3em' };

export function getEcosystemGroup(): Exclude<MenuProps['items'], undefined> {
  return [
    {
      label: (
        <a
          href="https://infra-fe.github.io/infrad-pro-components/"
          className="header-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="app.header.menu.pro.components" />
        </a>
      ),
      key: 'procomponents',
    },
  ];
}

// export default (props: SharedProps) => {
//   const menu = <Menu items={getEcosystemGroup()} />;
//   const downstyle = props.isRTL ? '-1px 2px 0 0' : '-1px 0 0 2px';
//   return (
//     <Dropdown overlay={menu} placement="bottomRight">
//       <Button size="small" className="header-button">
//         <FormattedMessage id="app.header.menu.more" />
//         <DownOutlined
//           style={{
//             fontSize: '9px',
//             margin: downstyle,
//             verticalAlign: 'middle',
//           }}
//         />
//       </Button>
//     </Dropdown>
//   );
// };

export default () => null;
