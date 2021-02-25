import React, { FC } from 'react';

interface ImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Image: FC<ImageProps> = ({
  alt = '',
  src,
  width,
  height,
  className,
}) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
  />
);
