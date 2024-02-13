import { Flex } from "@chakra-ui/react";
import Link from "next/link";

import { Icon } from "../Icon";
import type { BackButtonProps } from "./BackButton.types";

export const BackButton = ({ href, size = 24 }: BackButtonProps) => {
  return (
    <Link href={href}>
      <Flex>
        <Icon name="arrow_back_ios_new" size={size} />
      </Flex>
    </Link>
  );
};
