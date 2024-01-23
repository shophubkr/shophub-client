import * as Styled from "./Card.styles";

import type { CardProps, CouponSectionProps, SizeProps } from "./Card.types";

export const Card = ({ src, alt, size, isCouponValid, ...imgProps }: CardProps) => {
  return (
    <Styled.Container size={size}>
      <Styled.Image src={src} alt={alt} size={size} />
      <Styled.CardInfoContainer>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <TitleSection size={size} />
          <CouponSection size={size} isCouponValid={isCouponValid} />
        </div>
        <Styled.Content size={size}>내용</Styled.Content>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <DistanceSection size={size} />
          {size !== "small" && <Styled.Price>가격</Styled.Price>}
        </div>
      </Styled.CardInfoContainer>
      <AddressSection size={size} />
    </Styled.Container>
  );
};

const TitleSection = ({ size }: SizeProps) => {
  return size !== "large" ? (
    <Styled.Title>타이틀</Styled.Title>
  ) : (
    <div style={{ display: "flex", alignItems: "flex-end", columnGap: "4px" }}>
      <Styled.Title>타이틀</Styled.Title>
      <Styled.Category>카테고리</Styled.Category>
    </div>
  );
};

const CouponSection = ({ size, isCouponValid }: CouponSectionProps) => {
  return (
    size !== "large" && (
      <Styled.Coupon>
        <span className="material-icons-outlined" style={{ fontSize: "16px" }}>
          {isCouponValid ? "discount" : "label_off"}
        </span>
        {isCouponValid ? `쿠폰 ${size === "small" ? "사용가능" : ""}` : `${size === "small" ? "쿠폰 사용" : ""}불가`}
      </Styled.Coupon>
    )
  );
};

const DistanceSection = ({ size }: SizeProps) => {
  return (
    size !== "large" && (
      <div style={{ display: "flex" }}>
        <Styled.Distance>거리</Styled.Distance>
        <Styled.MethodAndTime>수단, 소요 시간</Styled.MethodAndTime>
      </div>
    )
  );
};

const AddressSection = ({ size }: SizeProps) => {
  return (
    size === "medium" && (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span className="material-icons-outlined" style={{ fontSize: "18px" }}>
          location_on
        </span>
        주소
      </div>
    )
  );
};
