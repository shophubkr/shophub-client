import type { PropsWithChildren } from "react";

export interface KakaoMapProps extends PropsWithChildren {
  kakaoLoadedData: {
    onload: boolean;
    center: {
      lat: number;
      lng: number;
    };
  };
}
