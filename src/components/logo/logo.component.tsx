import { FC } from 'react';
import { Image, Flex, Text } from '@chakra-ui/react';

import { LogoComponentProps } from '.';

export const LogoComponent: FC<LogoComponentProps> = ({ alt, src, width, height }) => {
  return (
    <Flex align="center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <Text fontSize='3xl' fontFamily='Shizuru'>LOTTERY</Text>
    </Flex>
  )
}