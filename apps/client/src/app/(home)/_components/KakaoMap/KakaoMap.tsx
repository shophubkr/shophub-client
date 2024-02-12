import { Box } from "@chakra-ui/react";
import { Map } from "react-kakao-maps-sdk";
import type { KakaoMapProps } from "./KakaoMap.type";

export const KakaoMap = ({ isKakaoLoaded, children }: KakaoMapProps) => {
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