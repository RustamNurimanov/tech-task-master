import { BREAKPOINTS } from "../constants/responsive";
import { useMediaQuery } from "react-responsive";

export const useIsDesktop = () => {
  return useMediaQuery({ minWidth: BREAKPOINTS.lg });
};

export const useIsMobile = () => {
  return useMediaQuery({ maxWidth: parseInt(BREAKPOINTS.lg, 10) - 1 });
};
