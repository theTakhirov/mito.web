import styled from "@emotion/styled";

// Cursor Style
const Cursor = styled.div`
    --transparent: transparent;
    --colored: #fff;
    --border-radius: 9999px;
    --size: 14px;
    --size-outer: 32px;
    --size-text: 4px;

    position: fixed;
    width: var(--size-outer);
    height: var(--size-outer);
    top: 0;
    left: 0;
    mix-blend-mode: difference;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999;

    .inner {
        background: var(--colored);
        border: 1px solid transparent;
        border-radius: var(--border-radius);
        mix-blend-mode: difference;
        position: absolute;
        width: var(--size);
        height: var(--size);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease-in-out;

        &.text {
            width: var(--size-text);
            height: calc(var(--size-outer) - 6px);
            border-radius: 1px;
        }

        &.grab {
            border-radius: 2px;
            background: var(--transparent);
            border-color: var(--colored);
        }

        &.grabbing {
            border-radius: 4px;
            background: var(--transparent);
            border-color: var(--colored);
        }
    }

    .outer {
        position: absolute;
        width: var(--size);
        height: var(--size);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: var(--border-radius);
        border-color: var(--transparent);
        border-width: 1px;
        will-change: transform;
        mix-blend-mode: difference;
        transition: border-color 0.1s ease-in-out, width 0.22s ease-in-out,
            height 0.22s ease-in-out;

        &.pointer {
            width: calc(var(--size-outer) - 4px);
            height: calc(var(--size-outer) - 4px);
            border-color: var(--colored);
        }
    }
`;

export default Cursor;
