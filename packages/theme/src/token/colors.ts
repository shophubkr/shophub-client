export const COLORS = {
  black: "#000",
  white: "#FFF",
  grey: {
    900: "#202020",
    800: "#3B3B3B",
    700: "#5C5C5C",
    600: "#797979",
    500: "#A0A0A0",
    400: "#C9C9C9",
    300: "#EEEEEE",
    200: "#CCCCCC",
    100: "#F7F7F7",
    50: "#FBFBFB",
  },
  primary: {
    // TODO: 디자인 시스템 업데이트 후 명시된 내용 확인하여 업데이트 필요
    600: "#BFD833",
    500: "#CADE5A",
    400: "#E5EFAD",
    300: "#D9E885", // 명시 확인
    200: "#CCE05C", // 명시 확인
    100: "#BFD833", // 명시 확인
  },
  status: {
    error: "#FF6565",
    success: "#00C851",
  },
} as const;
