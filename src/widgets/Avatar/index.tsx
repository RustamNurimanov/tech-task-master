import { isNil } from "lodash";
import React from "react";

import { StyledAbbreviation, StyledAvatar } from "./styles";

interface Props {
  label?: string;
  avatar?: string | null;
  size?: number;
  textFontSize?: number;
}

export const Avatar: React.FC<Props> = ({ avatar, size = 24, textFontSize = size / 2, label }) => {
  return isNil(avatar) ? (
    <StyledAbbreviation $avatarTextSize={textFontSize} $size={size}>
      {label?.at(0)}
    </StyledAbbreviation>
  ) : (
    <StyledAvatar $size={size} src={avatar} alt={label} />
  );
};
