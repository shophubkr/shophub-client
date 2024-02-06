"use client";

import { Container } from "@chakra-ui/react";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { StoreItem } from "~/components";
import { Accordion } from "~/components/Accordion/Accordion";
import { KakaoMap } from "~/components/Map/KakaoMap";
import { ShopPin } from "~/components/ShopPin/ShopPin";
import { TabBar } from "~/components/TabBar/TabBar";
import { RoutingBar } from "./(home)/_components";

export default function Home() {
  // TODO : API 조회 방식으로 변경 예정 <퍼블리싱용>
  const shopDataArray = [
    {
      "id": 1,
    },
    {
      "id": 2,
    },
    {
      "id": 3,
    },
    {
      "id": 4,
    },
    {
      "id": 5,
    },
    {
      "id": 6,
    },
  ];

  const TEST_IMAGE_URL = "https://picsum.photos/id/237/96/96";

  // TODO : API 조회로 변경합니다. <퍼블리싱용>
  const storeInformation = {
    thumbnailUrl: TEST_IMAGE_URL,
    name: "BEEN STORE",
    description: "스트릿 옷가게",
    distance: "12m",
    address: "서울특별시 강남구 테헤란로 11111",
    isCouponAvailable: true,
    minimumPrice: 14000,
  };

  // TODO : API 조회로 변경합니다. <퍼블리싱용>
  const storeInformationArray = [
    {
      id: 1,
      name: "상점 이름3",
      address: "상점 주소",
      introduce: "상점 소개",
      checkCoupon: true,
      latLng: { lat: 37.5934062, lng: 127.0884679 },
    },
  ];

  return (
    <Container w="390px" h="100vh" m="0 auto" p="8px 0 0 0">
      <RoutingBar />
      <KakaoMap>
        {storeInformationArray.map((store) => (
          <CustomOverlayMap key={store.id} position={store.latLng}>
            <ShopPin name={store.name} checkCoupon={store.checkCoupon} />
          </CustomOverlayMap>
        ))}
      </KakaoMap>
      <Accordion>
        {shopDataArray.map((shop) => (
          <StoreItem key={shop.id} storeInformation={storeInformation} />
        ))}
      </Accordion>
      <TabBar />
    </Container>
  );
}
