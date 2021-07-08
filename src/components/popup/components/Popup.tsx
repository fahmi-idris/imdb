import * as React from 'react';

import { Box, BoxProps, colors, radii } from 'components/ui-provider';

interface PopupProps extends BoxProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Popup = React.forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const { children, isOpen, handleClose, ...rest } = props;
  if (isOpen) {
    return (
      <Box position="fixed" background="rgba(0, 0, 0, 0.5)" width="100%" height="100vh" top="0" left="0">
        <Box
          ref={ref}
          position="relative"
          width="70%"
          margin="0 auto"
          height="auto"
          maxHeight="70vh"
          marginTop="calc(100vh - 85vh - 20px)"
          background={colors.white}
          borderRadius={radii.sm}
          padding="32px"
          overflowX="auto"
          {...rest}
        >
          <Box className="pointer" onClick={handleClose} position="absolute" right="12px" top="10px" fontSize="20px">
            &#215;
          </Box>
          {children}
        </Box>
      </Box>
    );
  }

  return null;
});

export default Popup;
