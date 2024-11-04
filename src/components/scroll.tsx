'use client';

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useTheme } from 'next-themes';

export const Scroll = () => {
  const { theme } = useTheme();
  if (theme == 'dark') {
    return <DotLottieReact src="https://lottie.host/114f76f3-1db8-4e37-a698-feeabd1ac55e/iHtFuQQwrH.lottie" loop autoplay />;
  } else {
    return <DotLottieReact src="https://lottie.host/c99efee2-07f4-4a74-b295-cc296d73feb7/J7xf5QeTZk.lottie" loop autoplay />;
  }
};
