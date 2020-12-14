import React from 'react';
import { Button } from 'antd';

export default function Header(props) {
  return (
    <header {...props}>
      <a className="logo-wrapper" href="https://antv.alipay.com/zh-cn/index.html" target="_blank">
        <i className="logo" />
        <span>Orange Time and Space</span>
      </a>
      <div className="button">
        <Button>Price</Button>
      </div>
    </header>
  );
}
