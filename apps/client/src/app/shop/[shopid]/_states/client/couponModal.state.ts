import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const couponListModalAtom = atom<boolean>({
  key: "couponListModalAtom",
  default: false,
});

export const useCouponListModalState = () => useRecoilState(couponListModalAtom);
export const useCouponListModalValue = () => useRecoilValue(couponListModalAtom);
export const useCouponListModalSetState = () => useSetRecoilState(couponListModalAtom);
