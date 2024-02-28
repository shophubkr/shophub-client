import { Box } from "@chakra-ui/react";
import { Map } from "react-kakao-maps-sdk";
import { VH } from "~/utils";
import type { KakaoMapProps } from "./KakaoMap.type";

export const KakaoMap = ({ kakaoLoadedData, children }: KakaoMapProps) => {
  return (
    <Box position="absolute" w="full" zIndex="0" top="0" left="0">
      {kakaoLoadedData?.onload && (
        <Map center={kakaoLoadedData?.center} style={{ width: "100%", height: VH(100) }}>
          {children}
        </Map>
      )}
    </Box>
  );
};
