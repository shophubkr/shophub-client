import axios from "axios";
import type { APIResponse, BusinessNumber } from "../../_types/types";

export const signUpApi = {
  businessConfirm: (value: string) => {
    return axios.post<APIResponse<BusinessNumber>>(
      `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=jLYDm8UrTI6O0xwYjloDybofTULlg9YFEVIbA8pyRkS78TmOmeB%2B%2FlVlBWBqqoOtBAiEn%2FyukJGWMuMJrMdt0w%3D%3D`,
      { b_no: [value] },
    );
  },
};
