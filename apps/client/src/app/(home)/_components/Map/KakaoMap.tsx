import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=fee63af963e627ff4561955f5603f656&autoload=false`;

export const KakaoMap = () => {
  const [kakaoLoaded, setKakaoLoaded] = useState(false);

  useEffect(() => {
    const kakaoScript = document.createElement("script");
    kakaoScript.src = KAKAO_SDK_URL;
    kakaoScript.async = true;
    kakaoScript.onload = () => {
      setKakaoLoaded(true);
    };
    document.body.appendChild(kakaoScript);

    return () => {
      document.body.removeChild(kakaoScript);
    };
  }, []);

  return (
    <Box position="absolute" w="100%" zIndex="-1" top="0" left="0">
      {kakaoLoaded && <Map center={{ lat: 37.5000776, lng: 127.0385419 }} style={{ width: "100%", height: "100vh" }} />}
    </Box>
  );
};
