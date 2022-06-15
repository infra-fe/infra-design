import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import type {
  PickerDateProps,
  PickerProps,
  RangePickerProps as BaseRangePickerProps,
} from './generatePicker';
// import type { IQuickPickerProps } from './generatePicker/QuickPicker';
import generatePicker from './generatePicker';
import type { IQuickItem } from './generatePicker/const';

export type DatePickerProps = PickerProps<Moment>;
export type MonthPickerProps = Omit<PickerDateProps<Moment>, 'picker'>;
export type WeekPickerProps = Omit<PickerDateProps<Moment>, 'picker'>;
export type RangePickerProps = BaseRangePickerProps<Moment>;
// export type QuickPickerProps = IQuickPickerProps;
export type QuickListItem = IQuickItem;

const DatePicker = generatePicker<Moment>(momentGenerateConfig);
export default DatePicker;
