import { Button, Flex } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";
import type { PropsWithChildren } from "react";
import { useBooleanState } from "~/hooks";

export const Accordion = ({ children }: PropsWithChildren) => {
  const theme = useShophubTheme();
  const { value: isOpenAccordion, onChange } = useBooleanState();

  return (
    <Flex
      position="absolute"
      w="full"
      h={!isOpenAccordion ? "112px" : "80vh"}
      zIndex="5"
      overflow={isOpenAccordion ? "scroll" : "hidden"}
      left="0"
      bottom="0"
      flexDir="column"
      rowGap="4px"
      boxShadow="0 -4px 8px rgba(0,0,0,0.05)"
      bgColor={theme.COLORS.white}
      borderTopRightRadius="8px"
      borderTopLeftRadius="8px"
      transition="0.75s cubic-bezier(0.165,0.84, 0.44,1)"
      alignItems="center"
    >
      <Flex
        position="fixed"
        w="full"
        p="16px 0"
        onClick={onChange}
        justifyContent="center"
        alignItems="center"
        bgColor={theme.COLORS.white}
        cursor="pointer"
      >
        <Button w="32px" h="4px" bgColor={theme.COLORS.grey[400]} />
      </Flex>
      <Flex flexDir="column" w="390px" p="36px 0 112px" alignItems="center" rowGap="32px">
        {children}
      </Flex>
    </Flex>
  );
};
