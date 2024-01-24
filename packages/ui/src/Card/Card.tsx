import * as Styled from "./Card.styles";

import type {
  AddressSectionProps,
  CardProps,
  CouponSectionProps,
  DistanceSectionProps,
  TitleSectionProps,
} from "./Card.types";

export const Card = ({
  title,
  category,
  content,
  distance,
  method,
  price,
  address,
  src,
  alt,
  size,
  isCouponValid,
  requiredTime,
}: CardProps) => {
  return (
    <Styled.Container size={size}>
      <Styled.Image src={src} alt={alt} size={size} />
      <Styled.CardInfoContainer>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <TitleSection size={size} title={title} category={category} />
          <CouponSection size={size} isCouponValid={isCouponValid} />
        </div>
        <Styled.Content size={size}>{content}</Styled.Content>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <DistanceSection size={size} distance={distance} method={method} requiredTime={requiredTime} />
          {size !== "small" && <Styled.Price>{price}</Styled.Price>}
        </div>
      </Styled.CardInfoContainer>
      <AddressSection size={size} address={address} />
    </Styled.Container>
  );
};

const TitleSection = ({ size, title, category }: TitleSectionProps) => {
  return size !== "large" ? (
    <Styled.Title>{title}</Styled.Title>
  ) : (
    <div style={{ display: "flex", alignItems: "flex-end", columnGap: "4px" }}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Category>{category}</Styled.Category>
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

const DistanceSection = ({ size, distance, method, requiredTime }: DistanceSectionProps) => {
  return (
    size !== "large" && (
      <div style={{ display: "flex" }}>
        <Styled.Distance>{distance}</Styled.Distance>
        <Styled.MethodAndTime>
          {method}, {requiredTime}분
        </Styled.MethodAndTime>
      </div>
    )
  );
};

const AddressSection = ({ size, address }: AddressSectionProps) => {
  return (
    size === "medium" && (
      <div style={{ display: "flex", alignItems: "center", gap: "8px", gridColumn: "1 / 3" }}>
        <span className="material-icons-outlined" style={{ fontSize: "18px" }}>
          location_on
        </span>
        {address}
      </div>
    )
  );
};
