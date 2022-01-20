import * as React from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import { DownOutlined } from 'infra-design-icons';
import { SharedProps } from './interface';

export function getEcosystemGroup(): React.ReactNode {
  return [
    <Menu.Item key="pro">
      <a
        href="https://infra-fe.github.io/infrad-pro-components/"
        className="header-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FormattedMessage id="app.header.menu.pro.v4" />
      </a>
    </Menu.Item>,
  ];
}

export default (props: SharedProps) => {
  const menu = <Menu>{getEcosystemGroup()}</Menu>;
  const downstyle = props.isRTL ? '-1px 2px 0 0' : '-1px 0 0 2px';
  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Button size="small" className="header-button">
        <FormattedMessage id="app.header.menu.more" />
        <DownOutlined
          style={{
            fontSize: '9px',
            margin: downstyle,
            verticalAlign: 'middle',
          }}
        />
      </Button>
    </Dropdown>
  );
};
