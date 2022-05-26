import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, button, input {
        font-family: 'Varela', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    input, select {
        height: 50px;
        padding: 0px 20px;
        border: 1px solid var(--color-border);
        border-radius: 8px;
        background: var(--color-white);
        font-size: 16px;
        resize: none;
        outline: none;
    }

    select {
        appearance: none;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');
        background-repeat: no-repeat;
        background-position: calc(100% - 20px) center;
    }

    :root {
        --color-primary: #f29200;
        --color-secondary: #495058;
        --color-tertiary: #fafafa;
        --color-border: #e1e1e1;
        --color-white: #fff;
        --color-black: #000;
        --color-red: #d13b56;
        --color-light-red: #fbeded;
        --color-light-orange: #fef5e6;
        --color-green: #42ba96;
        --color-light-green: #dcf2ec;
    }
`;
