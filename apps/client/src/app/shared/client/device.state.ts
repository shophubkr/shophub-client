import { atom, useRecoilState, useRecoilValue } from "recoil";

type DeviceInfo = "mobile" | "desktop";

const deviceInfoAtom = atom<DeviceInfo>({
  key: "deviceInfoAtom",
  default: "desktop",
});

export const useDeviceInfoState = () => useRecoilState(deviceInfoAtom);
export const useDeviceInfoValue = () => useRecoilValue(deviceInfoAtom);
