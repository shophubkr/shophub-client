import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import type { ApiProductType } from "../../_types/apiData.type";
import { StorePinOnMap } from "../StorePinOnMap/StorePinOnMap";

const KAKAO_SDK_URL = process.env.NEXT_PUBLIC_SDK_KAKAO_MAP as string;

export const KakaoMap = ({ storeDatas }: ApiProductType) => {
  const [kakaoLoaded, setKakaoLoaded] = useState(false);

  useEffect(() => {
    const kakaoScript = document.createElement("script");
    kakaoScript.src = KAKAO_SDK_URL;
    kakaoScript.async = true;
    kakaoScript.onload = () => {
      setKakaoLoaded(true);
    };
    document.head.appendChild(kakaoScript);

    return () => {
      document.head.removeChild(kakaoScript);
    };
  }, []);

  return (
    <Box position="absolute" w="100%" zIndex="0" top="0" left="0">
      {kakaoLoaded && (
        <Map center={{ lat: 37.500643, lng: 127.036377 }} style={{ width: "100%", height: "100vh" }}>
          {storeDatas.map((store) => (
            // api 통신 이후, storeIdx만 key prop 설정 예정
            <CustomOverlayMap key={store.storeIdx + Math.random()} position={store.latLng}>
              <StorePinOnMap store={store} />
            </CustomOverlayMap>
          ))}
        </Map>
      )}
    </Box>
  );
};
