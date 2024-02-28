"use client";

import { Container } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { Accordion, ShopPin, StoreItem, TabBar } from "~/components";
import { useBooleanState, useKaKaoMap } from "~/hooks";
import { VH } from "~/utils";
import { KakaoMap, MapSearchInput } from "./(home)/_components";

export default function Home() {
  const { value: isOpenAccordion, onChange } = useBooleanState();
  const { kakaoLoadedData } = useKaKaoMap();
  const router = useRouter();

  const TEST_IMAGE_URL = "https://picsum.photos/id/237/96/96";

  // TODO : API 조회로 변경합니다. <퍼블리싱용>
  const storeInformationArray = [
    {
      id: 1,
      thumbnailUrl: TEST_IMAGE_URL,
      name: "BEEN STORE",
      description: "스트릿 옷가게",
      distance: "12m",
      address: "서울특별시 강남구 테헤란로 11111",
      isCouponAvailable: false,
      minimumPrice: 14000,
      latLng: { lat: 37.5934062, lng: 127.0884679 },
    },
    {
      id: 2,
      thumbnailUrl: TEST_IMAGE_URL,
      name: "BEEN STORE",
      description: "스트릿 옷가게",
      distance: "12m",
      address: "서울특별시 강남구 테헤란로 11111",
      isCouponAvailable: false,
      minimumPrice: 14000,
      latLng: { lat: 37.5934062, lng: 127.0884679 },
    },
  ];

  const onPathRoutingHandler = (path: string) => {
    router.push(path);
  };

  return (
    <Container h={VH(100)} mx="auto" pt="8px">
      <MapSearchInput />
      <KakaoMap kakaoLoadedData={kakaoLoadedData}>
        {storeInformationArray.map((shop) => (
          <CustomOverlayMap key={shop.id} position={shop.latLng}>
            <ShopPin name={shop.name} checkCoupon={shop.isCouponAvailable} />
          </CustomOverlayMap>
        ))}
      </KakaoMap>
      <Accordion value={isOpenAccordion} onChange={onChange}>
        {storeInformationArray.map((shop) => (
          <StoreItem key={shop.id} storeInformation={shop} />
        ))}
      </Accordion>
      <TabBar onPathRoutingHandler={onPathRoutingHandler} />
    </Container>
  );
}
