import { useState } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import cx from 'classnames';

import { TEXT, BACKGROUND, ROUTE, COLOR } from 'common/const';
import { TextLink } from 'common/components';

import styles from './Filters.module.css';

const Filters = ({ filters, selected, onChange }) => {
  console.log('<Filters>', { filters, selected });

  const [hoverLink, setHoverLink] = useState('');

  return (
    <ol className={styles.list}>
      {filters.map(({ name, isPackage }) => {
        return (
          <li key={`filter-${name}`} className={cx(TEXT.SUBTITLE, styles.item)}>
            <TextLink
              color="inherit"
              to={ROUTE.CATALOG + '/' + name}
              onClick={() => onChange(name)}
              onMouseEnter={() => setHoverLink(name)}
              onMouseLeave={() =>
                // only unset hoverLink when necessary
                setHoverLink((link) => (name === link ? '' : name))
              }
            >
              <span
                className={cx(
                  COLOR.TEXT_SECONDARY,
                  styles.link,
                  isPackage
                    ? {
                        [BACKGROUND.POWER_PACKAGE]: name === selected,
                        [BACKGROUND.POWER_PACKAGE_LIGHT]: name === hoverLink,
                      }
                    : {
                        [BACKGROUND.GREY_100]: name === selected,
                        [BACKGROUND.GREY_50]: name === hoverLink,
                      },
                )}
              >
                {name}
              </span>
            </TextLink>
          </li>
        );
      })}
    </ol>
  );
};

Filters.propTypes = {
  filters: arrayOf(
    shape({
      name: string,
      isPackage: bool,
    }),
  ),
  selected: string,
  onChange: func,
};

export default Filters;
