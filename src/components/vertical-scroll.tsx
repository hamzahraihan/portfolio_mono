import React, { useRef } from 'react';

function VerticalScroll({ children }: Readonly<{ children: React.ReactNode }>) {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  return <div>{children}</div>;
}

export default VerticalScroll;
