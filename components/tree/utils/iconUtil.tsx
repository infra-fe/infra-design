import * as React from 'react';
import classNames from 'classnames';
import {
  LoadingOutlined,
  FileOutlined,
  MinusSquareOutlined,
  PlusSquareOutlined,
  CaretDownFilled,
} from 'infra-design-icons';
import type { AntTreeNodeProps, SwitcherIcon } from '../Tree';
import { isValidElement, cloneElement } from '../../_util/reactNode';

export default function renderSwitcherIcon(
  prefixCls: string,
  switcherIcon: SwitcherIcon,
  showLine: boolean | { showLeafIcon: boolean } | undefined,
  treeNodeProps: AntTreeNodeProps,
): React.ReactNode {
  const { isLeaf, expanded, loading } = treeNodeProps;

  if (loading) {
    return <LoadingOutlined className={`${prefixCls}-switcher-loading-icon`} />;
  }
  let showLeafIcon;
  if (showLine && typeof showLine === 'object') {
    showLeafIcon = showLine.showLeafIcon;
  }
  if (isLeaf) {
    if (showLine) {
      if (typeof showLine === 'object' && !showLeafIcon) {
        return <span className={`${prefixCls}-switcher-leaf-line`} />;
      }
      return <FileOutlined className={`${prefixCls}-switcher-line-icon`} />;
    }
    return null;
  }

  const switcherCls = `${prefixCls}-switcher-icon`;

  const switcher =
    typeof switcherIcon === 'function' ? switcherIcon({ expanded: !!expanded }) : switcherIcon;

  if (isValidElement(switcher)) {
    return cloneElement(switcher, {
      className: classNames(switcher.props.className || '', switcherCls),
    });
  }

  if (switcher) {
    return switcher;
  }

  if (showLine) {
    return expanded ? (
      <MinusSquareOutlined className={`${prefixCls}-switcher-line-icon`} />
    ) : (
      <PlusSquareOutlined className={`${prefixCls}-switcher-line-icon`} />
    );
  }
  return <CaretDownFilled className={switcherCls} />;
}
