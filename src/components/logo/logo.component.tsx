import { FC } from 'react';
import { Image } from '@chakra-ui/react';

import { LogoComponentProps } from '.';

export const LogoComponent: FC<LogoComponentProps> = ({ alt, src, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}