import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './tags.module.scss';

const Tags = ({ tagsList }) => {
  Tags.propTypes = {
    tagsList: PropTypes.arrayOf(PropTypes.string),
  };

  const list = tagsList.map((tag) => (
    <div className={s.tag} key={tag.id}>
      <img src={s['tag-icon']} alt="" />
      <div className={s['tag-text']}>
        {tag.text}
      </div>
    </div>
  ));

  const notEmptyTagList = list.length > 0 ? list : null;

  return (
    <div className={s.tags}>
      {notEmptyTagList}
    </div>
  );
};

export { Tags };