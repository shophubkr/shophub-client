import { rest } from "msw";
import { productMockData } from "./productMock";

export interface ProductType {
  storeIdx: number;
  storeName: string;
  description: string;
  thumbnailUrl: string;
  latLng: {
    lat: number;
    lng: number;
  };
  isCouponAvailable: boolean;
  isRecommend: boolean;
  distance: number;
  price: number;
}

export const getProductApi = rest.get<ProductType[]>("/api/products", (req, res, ctx) => {
  const searchParams = new URLSearchParams(req.url.searchParams);

  const _pageNum = searchParams.get("pageNum") as string;

  const pageNum = parseInt(_pageNum, 10) || 1;
  const storeType = searchParams.get("storeType");

  const startIndex = (pageNum - 1) * 8;
  const endIndex = pageNum * 8;

  const data = productMockData.slice(startIndex, endIndex);

  if (storeType === "recommend") {
    const recommendFiltering = productMockData.filter((it) => it.isRecommend === true);
    const recommendData = recommendFiltering.slice(startIndex, endIndex);

    return res(
      ctx.status(200),
      ctx.json({
        page: pageNum,
        result: recommendData,
        totalResult: recommendFiltering.length,
        totalPages: Math.ceil(recommendFiltering.length / 8),
      }),
    );
  }

  if (storeType === "nearBy") {
    return res(
      ctx.status(200),
      ctx.json({
        page: pageNum,
        result: data,
        totalResult: productMockData.length,
        totalPages: Math.ceil(productMockData.length / 8),
      }),
    );
  }

  return res(
    ctx.status(200),
    ctx.json({
      page: pageNum,
      result: data,
      totalResult: productMockData.length,
      totalPages: Math.ceil(productMockData.length / 8),
    }),
  );
});
