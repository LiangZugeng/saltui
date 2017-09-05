/**
 * Rate Component for tingle
 * @author quanyun.mqy
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */

import React from 'react';

import classnames from 'classnames';
import { unitize } from '@ali/tingle-style';
import Context from '@ali/tingle-context';
import Icon from '@ali/tingle-icon';

class Rate extends React.Component {

  static displayName = 'Rate';

  static defaultProps = {
    total: 5,
    value: 0,
    showTip: true,

    size: 'normal',

    scoreTips: ['不满意', '一般', '基本满意', '满意', '非常满意'],
    onChange: () => { },
  };

  // http://facebook.github.io/react/docs/reusable-components.html
  static propTypes = {
    className: React.PropTypes.string,
    totalScore: React.PropTypes.number,
    total: React.PropTypes.number,
    scoreTips: React.PropTypes.array,
    showTip: React.PropTypes.bool,
    score: React.PropTypes.number,
    value: React.PropTypes.number,
    onChange: React.PropTypes.func,
  };


  getValue() {
    const { value, score } = this.props;
    if (score !== undefined) {
      console.warn('Rate: score is deprecated, use value instead');
      return score;
    }
    return value;
  }

  getTotal() {
    const { total, totalScore } = this.props;
    if (totalScore !== undefined) {
      console.warn('Rate: totalScore is deprecated, use total instead');
      return totalScore;
    }
    return total;
  }

  handleItemClick(v) {
    this.props.onChange(v);
  }

  render() {
    const t = this;
    const size = t.props.size;
    const width = size && size === 'large' ? 36 : 26;
    const gap = size && size === 'large' ? 4 : 2.5;
    const items = [];
    const value = this.getValue();
    const total = this.getTotal();
    for (let i = 1; i <= total; i++) {
      const item = (
        <div
          className={classnames(Context.prefixClass('rate-item'), {
            't-DIB': true,
            't-PR': true,
            active: i <= value,
          })}
          key={i}
          onClick={() => { t.handleItemClick(i); }}
          style={{
            width: unitize(width),
            height: unitize(width - 1),
            paddingLeft: unitize(gap),
            paddingRight: unitize(gap),
          }}
        >
          <Icon name={i <= value ? 'star-full' : 'star-line'} className={classnames(Context.prefixClass('rate-icon'))} />
        </div>
      );
      items.push(item);
    }
    return (
      <div
        className={classnames(Context.prefixClass('rate'),
          {
            't-FBH': t.props.size === 'normal',
            [t.props.className]: !!t.props.className,
          })}
      >
        <div className={classnames({ 't-FBH': true, 'show-center': t.props.size === 'large' })} style={{ width: unitize((width + 3) * 5) }}>
          {items}
        </div>
        {t.props.showTip ?
          <div className="rate-tip" style={{ lineHeight: unitize(width), textAlign: t.props.size === 'large' ? 'center' : 'left' }}>{t.props.scoreTips[value - 1]}</div>
          : ''}
      </div>
    );
  }
}

export default Rate;