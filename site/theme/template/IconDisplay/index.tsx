import Icon, * as AntdIcons from 'infra-design-icons';
import { Empty, Input, Radio } from 'infrad';
import type { RadioChangeEvent } from 'infrad/es/radio/interface';
import debounce from 'lodash/debounce';
import * as React from 'react';
import { injectIntl } from 'react-intl';
import Category from './Category';
import type { CategoriesKeys } from './fields';
import { categories } from './fields';
import { categoriesShopee } from './fieldShopee';
import IconPicSearcher from './IconPicSearcher';
import { FilledIcon, OutlinedIcon, TwoToneIcon } from './themeIcons';

export enum ThemeType {
  Filled = 'Filled',
  Outlined = 'Outlined',
  TwoTone = 'TwoTone',
  Shopee = 'Shopee',
}

const allIcons: { [key: string]: any } = AntdIcons;

interface IconDisplayProps {
  intl: any;
}

interface IconDisplayState {
  theme: ThemeType;
  searchKey: string;
}

const IconDisplay: React.FC<IconDisplayProps> = ({ intl }) => {
  const { messages } = intl;
  const [displayState, setDisplayState] = React.useState<IconDisplayState>({
    theme: ThemeType.Shopee,
    searchKey: '',
  });

  const newIconNames: string[] = [];

  const handleSearchIcon = React.useCallback(
    debounce((searchKey: string) => {
      setDisplayState(prevState => ({ ...prevState, searchKey }));
    }),
    [],
  );

  const handleChangeTheme = React.useCallback((e: RadioChangeEvent) => {
    setDisplayState(prevState => ({ ...prevState, theme: e.target.value as ThemeType }));
  }, []);

  const renderCategories = React.useMemo<React.ReactNode | React.ReactNode[]>(() => {
    const { searchKey = '', theme } = displayState;
    const categoryList = theme === ThemeType.Shopee ? categoriesShopee : categories;

    const categoriesResult = Object.keys(categories)
      .map((key: CategoriesKeys) => {
        let iconList = categoryList[key];
        if (searchKey) {
          const matchKey = searchKey
            // eslint-disable-next-line prefer-regex-literals
            .replace(new RegExp(`^<([a-zA-Z]*)\\s/>$`, 'gi'), (_, name) => name)
            .replace(/(Filled|Outlined|TwoTone)$/, '')
            .toLowerCase();
          iconList = iconList.filter(iconName => iconName.toLowerCase().includes(matchKey));
        }

        // CopyrightCircle is same as Copyright, don't show it
        iconList = iconList.filter(icon => icon !== 'CopyrightCircle');
        if (theme === ThemeType.Shopee) {
          return {
            category: key,
            icons: iconList.filter(iconName => allIcons[iconName]),
          };
        }
        return {
          category: key,
          icons: iconList.map(iconName => iconName + theme).filter(iconName => allIcons[iconName]),
        };
      })
      .filter(({ icons }) => !!icons.length)
      .map(({ category, icons }) => (
        <Category
          key={category}
          title={category as CategoriesKeys}
          theme={theme}
          icons={icons}
          newIcons={newIconNames}
        />
      ));
    return categoriesResult.length === 0 ? <Empty style={{ margin: '2em 0' }} /> : categoriesResult;
  }, [displayState.searchKey, displayState.theme]);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Radio.Group
          value={displayState.theme}
          onChange={handleChangeTheme}
          size="large"
          buttonStyle="solid"
        >
          <Radio.Button value={ThemeType.Shopee}>
            <Icon component={TwoToneIcon} /> {messages['app.docs.components.icon.shopee']}
          </Radio.Button>
          <Radio.Button value={ThemeType.Outlined}>
            <Icon component={OutlinedIcon} /> {messages['app.docs.components.icon.outlined']}
          </Radio.Button>
          <Radio.Button value={ThemeType.Filled}>
            <Icon component={FilledIcon} /> {messages['app.docs.components.icon.filled']}
          </Radio.Button>
          <Radio.Button value={ThemeType.TwoTone}>
            <Icon component={TwoToneIcon} /> {messages['app.docs.components.icon.two-tone']}
          </Radio.Button>
        </Radio.Group>
        <Input.Search
          placeholder={messages['app.docs.components.icon.search.placeholder']}
          style={{ margin: '0 10px', flex: 1 }}
          allowClear
          onChange={e => handleSearchIcon(e.currentTarget.value)}
          size="large"
          autoFocus
          suffix={<IconPicSearcher />}
        />
      </div>
      {renderCategories}
    </>
  );
};

export default injectIntl(IconDisplay);
