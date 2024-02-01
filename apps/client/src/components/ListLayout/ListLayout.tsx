import { Flex } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { Children, Fragment } from "react";
import { HorizontalLine } from "../HorizontalLine";

export const ListLayout = ({ children }: PropsWithChildren) => {
  const childrenArray = Children.toArray(children);

  return (
    <Flex flexDir="column" rowGap="24px" pt="24px">
      {childrenArray.map((child, index) => (
        <Fragment key={child.toString()}>
          {child}
          {index < childrenArray.length - 1 && <HorizontalLine h="1px" />}
        </Fragment>
      ))}
    </Flex>
  );
};
