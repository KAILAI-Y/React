import { createGlobalStyle } from 'styled-components';

export const GlobalFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* Project id 3930888 */
    src: url('//at.alicdn.com/t/c/font_3930888_oorplgwq70r.woff2?t=1678720284840') format('woff2'),
        url('//at.alicdn.com/t/c/font_3930888_oorplgwq70r.woff?t=1678720284840') format('woff'),
        url('//at.alicdn.com/t/c/font_3930888_oorplgwq70r.ttf?t=1678720284840') format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

