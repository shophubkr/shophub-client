import Script from "next/script";
import { Map } from "react-kakao-maps-sdk";
import * as S from "./KakaoMap.style";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=fee63af963e627ff4561955f5603f656&autoload=false`;

export const KakaoMap = () => {
  return (
    <S.MapWrapper>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={{ lat: 37.5000776, lng: 127.0385419 }} style={{ width: "100%", height: "100vh" }} />
    </S.MapWrapper>
  );
};
