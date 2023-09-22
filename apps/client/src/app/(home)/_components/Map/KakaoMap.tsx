import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import type { ApiProductType } from "../../_types/apiData.type";
import { StorePinOnMap } from "../StorePinOnMap/StorePinOnMap";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=fee63af963e627ff4561955f5603f656&autoload=false`;

export const KakaoMap = ({ data }: ApiProductType) => {
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
          {data.map((it) => (
            <CustomOverlayMap position={it.latLng}>
              <StorePinOnMap data={it} />
            </CustomOverlayMap>
          ))}
        </Map>
      )}
    </Box>
  );
};
