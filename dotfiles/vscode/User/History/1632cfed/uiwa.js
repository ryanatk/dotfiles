import { useCallback, useMemo, useState } from 'react';
import { bool, func, object } from 'prop-types';
import cx from 'classnames';

import { BACKGROUND, COLOR, TEXT } from 'common/const';
import { getItemFlag, getItemTotals } from 'common/utils';
import { TextLink, Product, Icon } from 'common/components';

import UpdateQuantity from '../UpdateQuantity';

import styles from './Item.module.css';

const Item = ({
  hasError,
  item,
  isEarlyPricing,
  setRemovingItem,
  updateCart,
}) => {
  console.log('<Item>', { item });

  const [isActive, setIsActive] = useState(false);

  const { currentPrice, originalPrice } = getItemTotals({
    item,
    isEarlyPricing,
  });

  // to keep QuantityButton from firing onChange for every render
  const handleQuantityChange = useCallback(
    (newQuantity) => {
      // don't update if quantity is 0
      if (newQuantity) {
        updateCart(item, newQuantity);
      } else {
        setIsActive(false);
      }
    },
    [item, updateCart],
  );

  const flag = getItemFlag({ ...item, price: currentPrice });
  const isNotRemovable = useMemo(
    () => item.isRequired || hasError || currentPrice === 0,
    [item.isRequired, hasError, currentPrice],
  );

  return (
    <Product
      variant="cart"
      isActive={isActive}
      id={item.id}
      name={item.name}
      image={item.image}
      currentPrice={currentPrice * item.quantity}
      originalPrice={originalPrice * item.quantity}
      flag={flag}
      quantity={
        <UpdateQuantity
          isActive={isActive && !hasError}
          setIsActive={setIsActive}
          className={cx(BACKGROUND.PAPER, TEXT.SUBTITLE, styles.quantity)}
          quantity={item.quantity ?? 0}
          increment={item.increment}
          onChange={handleQuantityChange}
          onZero={() => setRemovingItem(item)}
          disabled={isNotRemovable}
          min={item.min}
          max={item.max}
        />
      }
    >
      {isNotRemovable ? null : (
        <TextLink
          className={styles.remove}
          onClick={() => setRemovingItem(item)}
        >
          <span className={styles.trash}>
            <Icon name="trash" size="small" />
          </span>
          <span className={COLOR.TEXT}>Remove Item</span>
        </TextLink>
      )}
    </Product>
  );
};

Item.propTypes = {
  hasError: bool,
  item: object,
  setRemovingItem: func,
  updateCart: func,
};

export default Item;
