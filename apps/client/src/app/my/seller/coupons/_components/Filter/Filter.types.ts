import type { Dispatch, SetStateAction } from "react";

export interface FilterProps {
  setTerminatedFilter: Dispatch<SetStateAction<boolean | null>>;
}
