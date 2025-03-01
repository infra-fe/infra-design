import classNames from 'classnames';
import DownloadOutlined from 'infra-design-icons/DownloadOutlined';
import ITrash from 'infra-design-icons/ITrash';
import IView from 'infra-design-icons/IView';
import CSSMotion from 'rc-motion';
import * as React from 'react';
import { ConfigContext } from '../../config-provider';
import Progress from '../../progress';
import Tooltip from '../../tooltip';
import type {
  ItemRender,
  UploadFile,
  UploadListProgressProps,
  UploadListType,
  UploadLocale,
} from '../interface';

export interface ListItemProps {
  prefixCls: string;
  className?: string;
  style?: React.CSSProperties;
  locale: UploadLocale;
  file: UploadFile;
  items: UploadFile[];
  listType?: UploadListType;
  isImgUrl?: (file: UploadFile) => boolean;
  showRemoveIcon?: boolean;
  showDownloadIcon?: boolean;
  showPreviewIcon?: boolean;
  removeIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode);
  downloadIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode);
  previewIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode);
  iconRender: (file: UploadFile) => React.ReactNode;
  actionIconRender: (
    customIcon: React.ReactNode,
    callback: () => void,
    prefixCls: string,
    title?: string | undefined,
  ) => React.ReactNode;
  itemRender?: ItemRender;
  onPreview: (file: UploadFile, e: React.SyntheticEvent<HTMLElement>) => void;
  onClose: (file: UploadFile) => void;
  onDownload: (file: UploadFile) => void;
  progress?: UploadListProgressProps;
}

const ListItem = React.forwardRef(
  (
    {
      prefixCls,
      className,
      style,
      locale,
      listType,
      file,
      items,
      progress: progressProps,
      iconRender,
      actionIconRender,
      itemRender,
      isImgUrl,
      showPreviewIcon,
      showRemoveIcon,
      showDownloadIcon,
      previewIcon: customPreviewIcon,
      removeIcon: customRemoveIcon,
      downloadIcon: customDownloadIcon,
      onPreview,
      onDownload,
      onClose,
    }: ListItemProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    // Status: which will ignore `removed` status
    const { status } = file;
    const [mergedStatus, setMergedStatus] = React.useState(status);
    React.useEffect(() => {
      if (status !== 'removed') {
        setMergedStatus(status);
      }
    }, [status]);

    // Delay to show the progress bar
    const [showProgress, setShowProgress] = React.useState(false);
    const progressRafRef = React.useRef<any>();
    React.useEffect(() => {
      progressRafRef.current = setTimeout(() => {
        setShowProgress(true);
      }, 300);

      return () => {
        window.clearTimeout(progressRafRef.current);
      };
    }, []);

    // This is used for legacy span make scrollHeight the wrong value.
    // We will force these to be `display: block` with non `picture-card`
    const spanClassName = `${prefixCls}-span`;

    const iconNode = iconRender(file);
    let icon = <div className={`${prefixCls}-text-icon`}>{iconNode}</div>;
    if (listType === 'picture' || listType === 'picture-card') {
      if (mergedStatus === 'uploading' || (!file.thumbUrl && !file.url)) {
        const uploadingClassName = classNames({
          [`${prefixCls}-list-item-thumbnail`]: true,
          [`${prefixCls}-list-item-file`]: mergedStatus !== 'uploading',
        });
        icon = <div className={uploadingClassName}>{iconNode}</div>;
      } else {
        const thumbnail = isImgUrl?.(file) ? (
          <img
            src={file.thumbUrl || file.url}
            alt={file.name}
            className={`${prefixCls}-list-item-image`}
            crossOrigin={file.crossOrigin}
          />
        ) : (
          iconNode
        );
        const aClassName = classNames({
          [`${prefixCls}-list-item-thumbnail`]: true,
          [`${prefixCls}-list-item-file`]: isImgUrl && !isImgUrl(file),
        });
        icon = (
          <a
            className={aClassName}
            onClick={e => onPreview(file, e)}
            href={file.url || file.thumbUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {thumbnail}
          </a>
        );
      }
    }

    const infoUploadingClass = classNames({
      [`${prefixCls}-list-item`]: true,
      [`${prefixCls}-list-item-${mergedStatus}`]: true,
      [`${prefixCls}-list-item-list-type-${listType}`]: true,
    });
    const trashClass = classNames({
      [`${prefixCls}-trash`]: true,
    });
    const linkProps =
      typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;

    const removeIcon = showRemoveIcon
      ? actionIconRender(
          (typeof customRemoveIcon === 'function' ? customRemoveIcon(file) : customRemoveIcon) || (
            <ITrash className={trashClass} />
          ),
          () => onClose(file),
          prefixCls,
          locale.removeFile,
        )
      : null;

    const downloadIcon =
      showDownloadIcon && mergedStatus === 'done'
        ? actionIconRender(
            (typeof customDownloadIcon === 'function'
              ? customDownloadIcon(file)
              : customDownloadIcon) || <DownloadOutlined />,
            () => onDownload(file),
            prefixCls,
            locale.downloadFile,
          )
        : null;
    const downloadOrDelete = listType !== 'picture-card' && (
      <span
        key="download-delete"
        className={classNames(`${prefixCls}-list-item-card-actions`, {
          picture: listType === 'picture',
        })}
      >
        {downloadIcon}
        {removeIcon}
      </span>
    );
    const listItemNameClass = classNames(`${prefixCls}-list-item-name`);
    const preview = file.url
      ? [
          <a
            key="view"
            target="_blank"
            rel="noopener noreferrer"
            className={listItemNameClass}
            title={file.name}
            {...linkProps}
            href={file.url}
            onClick={e => onPreview(file, e)}
          >
            {file.name}
          </a>,
          downloadOrDelete,
        ]
      : [
          <span
            key="view"
            className={listItemNameClass}
            onClick={e => onPreview(file, e)}
            title={file.name}
          >
            {file.name}
          </span>,
          downloadOrDelete,
        ];
    const previewStyle: React.CSSProperties = {
      pointerEvents: 'none',
      opacity: 0.5,
    };
    const editClass = classNames({
      [`${prefixCls}-view`]: true,
    });
    const previewIcon = showPreviewIcon ? (
      <a
        href={file.url || file.thumbUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={file.url || file.thumbUrl ? undefined : previewStyle}
        onClick={e => onPreview(file, e)}
        title={locale.previewFile}
      >
        {typeof customPreviewIcon === 'function'
          ? customPreviewIcon(file)
          : customPreviewIcon || <IView className={editClass} />}
      </a>
    ) : null;

    const actions = listType === 'picture-card' && mergedStatus !== 'uploading' && (
      <span className={`${prefixCls}-list-item-actions`}>
        {previewIcon}
        {mergedStatus === 'done' && downloadIcon}
        {removeIcon}
      </span>
    );

    let message: string;
    if (file.response && typeof file.response === 'string') {
      message = file.response;
    } else {
      message = file.error?.statusText || file.error?.message || locale.uploadError;
    }
    const iconAndPreview = (
      <span className={spanClassName}>
        {icon}
        {preview}
      </span>
    );
    const { getPrefixCls } = React.useContext(ConfigContext);
    const rootPrefixCls = getPrefixCls();

    const dom = (
      <div className={infoUploadingClass}>
        <div className={`${prefixCls}-list-item-info`}>{iconAndPreview}</div>
        {actions}
        {showProgress && (
          <CSSMotion
            motionName={`${rootPrefixCls}-fade`}
            visible={mergedStatus === 'uploading'}
            motionDeadline={2000}
          >
            {({ className: motionClassName }) => {
              // show loading icon if upload progress listener is disabled
              const loadingProgress =
                'percent' in file ? (
                  <Progress {...progressProps} type="line" percent={file.percent} />
                ) : null;

              return (
                <div className={classNames(`${prefixCls}-list-item-progress`, motionClassName)}>
                  {loadingProgress}
                </div>
              );
            }}
          </CSSMotion>
        )}
      </div>
    );
    const listContainerNameClass = classNames(`${prefixCls}-list-${listType}-container`, className);
    const item =
      mergedStatus === 'error' ? (
        <Tooltip title={message} getPopupContainer={node => node.parentNode as HTMLElement}>
          {dom}
        </Tooltip>
      ) : (
        dom
      );

    return (
      <div className={listContainerNameClass} style={style} ref={ref}>
        {itemRender
          ? itemRender(item, file, items, {
              download: onDownload.bind(null, file),
              preview: onPreview.bind(null, file),
              remove: onClose.bind(null, file),
            })
          : item}
      </div>
    );
  },
);

export default ListItem;
