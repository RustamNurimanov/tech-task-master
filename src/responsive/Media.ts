import { BREAKPOINTS } from "../constants/responsive";

export const Media = {
  desktop: `@media screen and (min-width: ${BREAKPOINTS.sm})`,
  mobile: `@media screen and (max-width: ${parseInt(BREAKPOINTS.lg, 10) - 1}px)`,
};

export default Media;
