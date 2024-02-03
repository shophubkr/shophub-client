"use client";

import { Box, Avatar as BaseAvatar, Text } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";
import type { AvatarProps } from "./Avatar.types";

export const Avatar = ({ size = 72, edit = false, src, onClick }: AvatarProps) => {
  const theme = useShophubTheme();

  return (
    <Box
      position="relative"
      boxSize={`${size}px`}
      overflow="hidden"
      borderRadius="full"
      cursor="pointer"
      onClick={onClick}
    >
      <BaseAvatar src={src} w="full" h="full" />
      {edit && (
        <Box
          w="full"
          h={`${size / 3.5}px`}
          position="absolute"
          bottom="0"
          bgColor={theme.COLORS.black}
          color={theme.COLORS.white}
          textAlign="center"
        >
          <Text fontSize="12px">편집</Text>
        </Box>
      )}
    </Box>
  );
};
