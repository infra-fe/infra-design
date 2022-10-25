import React from 'react';
import {
  NoApp,
  NoData,
  NoImage,
  NoLog,
  NoPermission,
  NoRatings,
  NoRecords,
  NoResults,
} from './otherImageType';

const noAppImg = <NoApp />;
const noData = <NoData />;
const noLog = <NoLog />;
const noRecords = <NoRecords />;
const noResults = <NoResults />;
const noRatings = <NoRatings />;
const noImage = <NoImage />;
const noPermission = <NoPermission />;

type ImageType =
  | 'NO_APP'
  | 'NO_DATA'
  | 'NO_LOG'
  | 'NO_RECORDS'
  | 'NO_RESULTS'
  | 'NO_RATINGS'
  | 'NO_IMAGE'
  | 'NO_PERMISSION';

const typeConfig = new Map([
  ['NO_APP', { icon: noAppImg, description: 'No Application Found' }],
  ['NO_DATA', { icon: noData, description: 'No Data' }],
  ['NO_LOG', { icon: noLog, description: 'No Logs Found' }],
  ['NO_RECORDS', { icon: noRecords, description: 'No Operation Records' }],
  ['NO_RESULTS', { icon: noResults, description: 'Your search does not match any results' }],
  ['NO_RATINGS', { icon: noRatings, description: 'You have not received any ratings' }],
  ['NO_IMAGE', { icon: noImage, description: 'No Image Found' }],
  ['NO_PERMISSION', { icon: noPermission, description: 'No Permission' }],
]);

export { ImageType, typeConfig };
