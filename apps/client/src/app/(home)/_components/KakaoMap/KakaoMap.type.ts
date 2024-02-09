import type { PropsWithChildren } from "react";

export interface KakaoMapProps extends PropsWithChildren {
  isKakaoLoaded: {
    onload: boolean;
    center: {
      lat: number;
      lng: number;
    };
  };
}
