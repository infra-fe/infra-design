import * as React from 'react';
import { ReactNode } from 'react';
import {
  LoadingOutlined,
  SearchOutlined,
  IArrowDown,
  IArrowUp,
  ISelector,
  IClose,
  ICloseFullfiled,
} from 'infra-design-icons';

type RenderNode = React.ReactNode | ((props: any) => React.ReactNode);

export default function getIcons({
  suffixIcon,
  clearIcon,
  menuItemSelectedIcon,
  removeIcon,
  loading,
  multiple,
  hasFeedback,
  prefixCls,
  showArrow,
  feedbackIcon,
}: {
  suffixIcon?: React.ReactNode;
  clearIcon?: RenderNode;
  menuItemSelectedIcon?: RenderNode;
  removeIcon?: RenderNode;
  loading?: boolean;
  multiple?: boolean;
  hasFeedback?: boolean;
  feedbackIcon?: ReactNode;
  prefixCls: string;
  showArrow?: boolean;
}) {
  // Clear Icon
  let mergedClearIcon = clearIcon;
  if (!clearIcon) {
    mergedClearIcon = <ICloseFullfiled />;
  }

  // Validation Feedback Icon
  const getSuffixIconNode = (arrowIcon?: ReactNode) => (
    <>
      {showArrow !== false && arrowIcon}
      {hasFeedback && feedbackIcon}
    </>
  );

  // Arrow item icon
  let mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode(<LoadingOutlined spin />);
  } else {
    const iconCls = `${prefixCls}-suffix`;
    mergedSuffixIcon = ({ open, showSearch }: { open: boolean; showSearch: boolean }) => {
      if (open) {
        return showSearch ? (
          <SearchOutlined className={iconCls} />
        ) : (
          <IArrowUp className={iconCls} />
        );
      }
      return <IArrowDown className={iconCls} />;
    };
  }

  // Checked item icon
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = <ISelector />;
  } else {
    mergedItemIcon = null;
  }

  let mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = <IClose />;
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon,
  };
}
