import { css, jsx } from '@emotion/core'

const Flex = ({
  basis = 'auto',
  children,
  direction = 'row',
  grow = 0,
  wrap = 'unset',
  halign = 'flex-start',
  shrink = 1,
  type = 'div',
  valign = 'flex-start',
  ...rest
}) =>
  jsx(
    type,
    {
      css: {
        display: 'flex',
        flexDirection: direction,
        flexGrow: grow,
        flexShrink: shrink,
        flexWrap: wrap,
        flexBasis: basis,
        justifyContent: direction === 'row' ? halign : valign,
        alignItems: direction === 'row' ? valign : halign
      },
      ...rest
    },
    children
  );

export default Flex;
