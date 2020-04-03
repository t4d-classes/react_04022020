import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const ItemList = ({
  items, keyFn, contentFn,
  actionLabel, onAction: action
}) => {

  return (
    <ul>
      {items.map( (item, index) => <li key={keyFn(item)}>
        {contentFn(item)}
        {actionLabel && <button type="button" onClick={() => action(item)}>
          {actionLabel}
        </button>}
      </li>)}
    </ul>
  );

};

ItemList.propTypes = {
  items: PropTypes.array,
  keyFn: PropTypes.func.isRequired,
  contentFn: PropTypes.func.isRequired,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
};

ItemList.defaultProps = {
  items: [],
};

export const ItemListMemo = memo(ItemList);

