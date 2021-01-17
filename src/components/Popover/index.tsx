import React, {
  useState, useRef, useEffect, ReactElement, ReactNode, RefObject, ReactEventHandler,
} from 'react';
import { css } from '@emotion/css';

interface ContentFunc {
  (setVisible: React.Dispatch<React.SetStateAction<boolean>>): ReactNode
}
interface PopoverProps {
  content: ReactNode | ContentFunc,
  children: ReactElement,
}

function useOnClickOutside(ref: RefObject<HTMLElement>, handler: ReactEventHandler) {
  useEffect(
    () => {
      const listener = (event: any) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    [ref, handler],
  );
}

export default function Popover(props: PopoverProps) {
  const {
    children,
    content,
  } = props;
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setVisible(false));
  return (
    <div
      ref={ref}
      className={css`
        position: relative;
        .content{
          position: absolute;
          box-sizing: border-box;
          top: 45px;
          left: -10px;
          background: #fff;
          padding: 16px;
          border: 1px solid #00b4cf;
          z-index: 10;
          box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
          .icon-close{
            color:  #00b4cf;
            font-weight: bold;
            position: absolute;
            right: 10px;
            top: 10px;
          }
          &:before{
            content: '';
            top: -12px;
            display: block;
            border: 1px solid #00b4cf;
            width: 20px;
            border-bottom: none;
            border-right: none;
            height: 20px;
            background: #fff;
            transform: rotate(45deg);
            position: absolute;
          }
        }
      `}
    >
      <div onClick={() => setVisible(!visible)}>
        {children}
      </div>
      {
        visible && (
          <div className="content">
            <i className="icon-close" onClick={() => setVisible(false)} />
            {typeof content === 'function' ? content(setVisible) : content}
          </div>
        )
      }
    </div>
  );
}
