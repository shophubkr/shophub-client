import { rest } from "msw";
import { productMockData } from "./productMock";

export type ProductType = {
  storeIdx: number;
  storeName: string;
  catchPraise: string;
  thumbnail: string;
  latLng: {
    lat: number;
    lng: number;
  };
  isCoupon: boolean;
  isRecommend: boolean;
  distance: number;
  price: number;
};

export const getProductApi = rest.get<ProductType[]>("/api/products", (req, res, ctx) => {
  const searchParams = new URLSearchParams(req.url.searchParams);

  const _pageNum = searchParams.get("pageNum");

  const pageNum = _pageNum ? parseInt(_pageNum, 10) : 1;
  const storeType = searchParams.get("storeType");

  const startIndex = (pageNum - 1) * 8;
  const endIndex = pageNum * 8;

  const data = productMockData.slice(startIndex, endIndex);

  return res(
    ctx.status(200),
    ctx.json({
      page: pageNum,
      result: data,
      total_result: productMockData.length,
      total_pages: Math.ceil(productMockData.length / 8),
    }),
  );
});
