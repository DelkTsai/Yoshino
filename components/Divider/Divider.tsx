
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';

export interface IDividerProps extends IBaseComponent {
  /**
   * 是否虚线
   */
  dashed: boolean;
  /**
   * 文本表现
   */
  textAlign: 'left' | 'center' | 'right';
}

export interface IDividerState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class Divider extends Component<IDividerProps, IDividerState> {
  static defaultProps = {
    dashed: false,
    textAlign: 'center',
  };

  render() {
    const {className, style, dashed, children, textAlign, ...otherProps} = this.props;
    const preCls = 'yoshino-divider';
    const textCls = `${preCls}-${textAlign}`;
    const dashedCls = {[`${preCls}-dashed`]: dashed};
    return (
      <div
        className={classNames(className, preCls, textCls, dashedCls)}
        style={{
          ...style,
        }}
        {...otherProps}
      >
        {children ? (<p className={`${preCls}-text`}>{children}</p>) : null}
      </div>
    );
  }
}

export default Divider;