/**
 * RadioField Component for tingle
 * @author shanchao
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FieldRequiredIcon from 'salt-icon/lib/FieldRequired';
import { prefixClass } from '../Context';
import renderIcon from './utils';
import Group from '../Group';


class RadioField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  clickAction(value, item, index, data) {
    const t = this;
    const itemNew = item;
    const { data: radioArray, onChange } = t.props;

    const { disable } = item;
    if (disable) {
      return;
    }
    radioArray.map((radioItem) => {
      const radioItemNew = radioItem;
      radioItemNew.checked = false;
      return radioItemNew;
    });
    itemNew.checked = !itemNew.checked;
    if (onChange) {
      onChange(value, index, data);
    }
    t.forceUpdate();
  }


  render() {
    const t = this;
    const {
      rootClassName,
      className,
      data: radioArray,
      groupListArgument,
      groupListFlag,
      label,
    } = t.props;

    const radioArrayComponent = radioArray.map((item, index, data) => {
      const { checked, disable, value } = item;
      /* eslint-disable react/no-array-index-key */
      return (
        <div
          key={index}
          className={classnames(prefixClass('radio-field-row FBAC FBH'), {
            disable,
          })}
          onClick={t.clickAction.bind(t, value, item, index, data)}
        >
          {
            t.props.iconPosition === 'left' && renderIcon(checked)
          }
          <div
            ref={`content${index}`}
            className={prefixClass('radio-field-content FB1')}
          >
            {item.content || item.text}
          </div>
          {
            t.props.iconPosition === 'right' && renderIcon(checked, 'right')
          }
          {
            disable && <div className={prefixClass('radio-field-disable-mask')} />
          }
        </div>
      );
    });

    const requiredTag = (
      <FieldRequiredIcon
        className={prefixClass('radio-field-label-required')}
        width={6}
        height={6}
        fill="red"
      />
    );

    let finalJSX = (
      <Group className={classnames(prefixClass('radio-field'), {
        [rootClassName]: !!rootClassName,
      }, {
        [className]: !!className,
      })}
      >
        {
            label === ''
            ? null
            : (
              <Group.Head className={classnames(prefixClass('radio-field-label'))}>
                {label}
                {this.props.required && requiredTag}
              </Group.Head>
            )
          }
        <Group.List {...groupListArgument}>
          {radioArrayComponent}
        </Group.List>
      </Group>
    );

    if (!groupListFlag) {
      finalJSX = (
        <div
          className={classnames(prefixClass('radio-field'), {
            [rootClassName]: !!rootClassName,
            [className]: !!className,
          })
        }
        >
          {radioArrayComponent}
        </div>
      );
    }

    return finalJSX;
  }
}

RadioField.defaultProps = {
  data: [],
  onChange() { },
  groupListFlag: true,
  groupListArgument: {
    lineIndent: 0,
    itemIndent: 16,
  },
  label: '',
  iconPosition: 'right',
  required: false,
  className: undefined,
};

// http://facebook.github.io/react/docs/reusable-components.html
RadioField.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  onChange: PropTypes.func,
  groupListFlag: PropTypes.bool,
  groupListArgument: PropTypes.object,
  iconPosition: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.node,
};

RadioField.displayName = 'RadioField';

export default RadioField;
