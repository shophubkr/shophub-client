import { Flex } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { Children, Fragment } from "react";
import { HorizontalLine } from "../HorizontalLine";
import { isNotLastElement } from "~/utils";

export const ListLayout = ({ children }: PropsWithChildren) => {
  const childrenArray = Children.toArray(children);

  return (
    <Flex flexDir="column" rowGap="24px">
      {childrenArray.map((child, index) => (
        <Fragment key={child.toString()}>
          {child}
          {isNotLastElement(childrenArray.length, index) && <HorizontalLine h="1px" />}
        </Fragment>
      ))}
    </Flex>
  );
};
