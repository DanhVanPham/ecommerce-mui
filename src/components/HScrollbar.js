import { useLayoutEffect, useRef, useState } from 'react';
// @mui
import { IconButton, Box } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
// simplebar
import SimpleBarReact from 'simplebar-react';
// Iconfy
import Iconify from './Iconify';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  position: "relative",
  height: '100%',
  overflow: 'hidden',
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
    visibility: "hidden"
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));

// ----------------------------------------------------------------------

HScrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

const SCROLL_BUTTON_WIDTH = 60;

export function ScrollButton({ isPrev = true,
  left = 0,
  onClick,
  sx,
  width = SCROLL_BUTTON_WIDTH,
  ...props }) {
  return <Box sx={{
    position: "absolute",
    height: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: isPrev ? "flex-start" : "flex-end",
    width: `${width}px`,
    zIndex: 2,
    ...isPrev ? { left: { left } } : { right: 0 },
    background: `linear-gradient(to ${isPrev ? "left" : "right"}, rgba(255,255,255,0.2), rgba(255,255,255,1))`,
  }}>
    <IconButton onClick={onClick} size='medium' sx={{ borderRadius: 1 }}>
      <Iconify sx={{ width: "18px", height: "18px" }} icon={isPrev ? "material-symbols:arrow-back-ios-rounded" : "material-symbols:arrow-forward-ios-rounded"} />
    </IconButton>
  </Box>
}

export default function HScrollbar({ children, sx, scrollBtnSx, scrollBtn = ScrollButton, ...other }) {
  const ScrollButtonComp = scrollBtn
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
  const scrollableNodeRef = useRef();
  const [showPrev, setShowPrev] = useState(false)
  const [showNext, setShowNext] = useState(false)
  const rootRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(rootRef?.current?.clientWidth);
  }, [rootRef])

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', width: 1, ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  const scrollToLeft = () => {
    scrollableNodeRef.current.scrollLeft -= 20
  }
  const scrollToRight = () => {
    scrollableNodeRef.current.scrollLeft += 20
  }

  function checkOver(ref) {
    const { current } = ref;
    return {
      hasOver: current.scrollWidth > current.clientWidth,
      canScrollLeft: current.scrollLeft !== 0,
      canScrollRight: current.scrollLeft + current.clientWidth < current.scrollWidth,
    }
  }

  const handleMouseEvents = () => {
    const { hasOver, canScrollLeft, canScrollRight } = checkOver(scrollableNodeRef)
    if (hasOver) {
      setShowPrev(canScrollLeft)
      setShowNext(canScrollRight)
    } else {
      setShowPrev(false)
      setShowNext(false)
    }
  }

  return (
    <RootStyle ref={rootRef}
      onMouseEnter={handleMouseEvents}
      onMouseLeave={handleMouseEvents}>
      {showPrev && <ScrollButtonComp onClick={scrollToLeft} sx={{ scrollBtnSx }} />}
      {showNext && <ScrollButtonComp
        isPrev={false}
        left={`${width - SCROLL_BUTTON_WIDTH}px`}
        onClick={scrollToRight}
        sx={{ scrollBtnSx }}
      />}
      <SimpleBarStyle forceVisible={false}
        scrollableNodeProps={{ ref: scrollableNodeRef }}
        timeout={500}
        clickOnTrack={false}
        sx={sx} {...other}>
        <Box sx={{
          p: '0.5px',
          ...(showPrev || showNext) && {
            width: "fit-content",
            marginLeft: showPrev ? "30px" : 0,
            paddingRight: showNext ? "30px" : 0,
          }
        }}>{children}</Box>
      </SimpleBarStyle>
    </RootStyle>
  );
}
