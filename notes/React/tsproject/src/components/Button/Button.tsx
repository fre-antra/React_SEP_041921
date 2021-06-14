// import React from 'react';


// interface IButtonProp {
//     btnSize?: ButtonSize | 'lg' | 'sm';
// }

// export enum ButtonSize {
//     Large = 'lg',
//     Small = 'sm',
// }

// const Button: React.FunctionComponent<IButtonProp> = (props) => {
//     const { children, btnSize } = props;

//     let classNameList: string[] = ["btn"];
//     if (btnSize === ButtonSize.Large) {
//         classNameList.push('btn-lg')
//     }
//     if (btnSize === ButtonSize.Small) {
//         classNameList.push('btn-sm')
//     }

//     const classNames = classNameList.join(' ');

//     return <button className={classNames}>{children}</button>
// };

// export default Button;


import React, {
    ButtonHTMLAttributes,
    AnchorHTMLAttributes,
    FC,
    MouseEvent,
  } from 'react';
  import { classNames } from '../../utils/classNames';
  
  // export enum ButtonSize {
  //   Large = 'lg',
  //   Small = 'sm',
  // }
  export type ButtonSize = 'lg' | 'sm';
  export type ButtonType =
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'default'
    | 'link';
  // export enum ButtonType {
  //   Primary = 'primary',
  //   Secondary = 'secondary',
  //   Danger = 'danger',
  //   Default = 'default',
  //   Link = 'link',
  // }
  export interface IButtonProps {
    /** set customized style */
    className?: string;
    /** set button size */
    btnSize?: ButtonSize;
    /** set button type */
    btnType?: ButtonType;
    /** set disabled button */
    disabled?: boolean;
  }
  
  type NativeButtonProps = IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
  type NativeAchorButtonProps = IButtonProps &
    AnchorHTMLAttributes<HTMLAnchorElement>;
  export type PatButtonProps = NativeButtonProps | NativeAchorButtonProps;
  
  /**
   * A Button indicates a possible user action.
   *
   * ```js
   * import {Button} from 'pat-ui'
   * ```
   */
  export const Button: FC<PatButtonProps> = (props) => {
    const { btnSize, btnType, children, disabled, className, ...rest } = props;
    let styleClasses = classNames('btn', {
      [`btn-${btnType}`]: true,                 // if true  whatever it is will plug in
      [`btn-${btnSize}`]: !!btnSize,            // optional
      disabled: !!(disabled && btnType === 'link'),
    });
    if (className) {
      styleClasses += ' ' + className;
    }
  
    let btn;
    if (btnType !== 'link') {
      btn = (
        <button
          className={styleClasses}
          disabled={disabled}
          {...(rest as NativeButtonProps)}
        >
          {props.children}
        </button>
      );
    } else {
      if (disabled) {
        rest.onClick = (e: MouseEvent) => {     // 如果是Link又disable不能换地址
          e.preventDefault();
        };
      }
      btn = (
        <a className={styleClasses} {...(rest as NativeAchorButtonProps)}>
          {props.children}
        </a>
      );
    }
    return btn;
  };
  
  Button.defaultProps = {
    btnType: 'default',
    disabled: false,
  };
  
  export default Button;