import { rest } from "msw";
import type { MyPageBuyerProps } from "./types";

export const getMyPageBuyerMain = rest.get("/api/user/my-page", (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json<MyPageBuyerProps>({
      nearbyStores: [
        {
          thumbnailUrl: "https://picsum.photos/id/237/96/96",
          name: "BEEN STORE",
          description: "스트릿 옷가게",
          distance: "12m",
          address: "서울특별시 강남구 테헤란로 11111",
          isCouponAvailable: false,
          minimumPrice: 14000,
        },
        {
          thumbnailUrl: "https://picsum.photos/id/238/96/96",
          name: "MINSOO STORE",
          description: "스트릿 옷가게",
          distance: "18m",
          address: "서울특별시 강남구 테헤란로 22222",
          isCouponAvailable: true,
          minimumPrice: 19000,
        },
      ],
      CouponSummary: { total: 8, used: 4, unused: 2, expired: 2 },
    }),
  );
});
