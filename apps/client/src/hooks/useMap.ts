import { useEffect, useState } from "react";

export const useMap = () => {
  const [isKakaoLoaded, setIsKakaoLoaded] = useState({
    center: {
      lat: 37.500643,
      lng: 127.036377,
    },
    onload: false,
  });

  useEffect(() => {
    const kakaoScript = document.createElement("script");

    kakaoScript.src = process.env.NEXT_PUBLIC_SDK_KAKAO_MAP as string;
    kakaoScript.async = true;
    kakaoScript.onload = () => {
      setIsKakaoLoaded((prev) => ({ ...prev, onload: true }));

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setIsKakaoLoaded((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          }));
        });
      }
    };

    document.head.appendChild(kakaoScript);

    return () => {
      document.head.removeChild(kakaoScript);
    };
  }, []);

  return { isKakaoLoaded };
};
