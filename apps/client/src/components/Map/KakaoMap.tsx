import { Box } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { Map } from "react-kakao-maps-sdk";
import { useMap } from "~/hooks/useMap";

export const KakaoMap = ({ children }: PropsWithChildren) => {
  const { isKakaoLoaded } = useMap();

  return (
    <Box position="absolute" w="full" zIndex="0" top="0" left="0">
      {isKakaoLoaded?.onload && (
        <Map center={isKakaoLoaded?.center} style={{ width: "100%", height: "100vh" }}>
          {children}
        </Map>
      )}
    </Box>
  );
};
