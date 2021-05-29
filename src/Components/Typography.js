import React, { useMemo } from 'react';
import styled from 'styled-components';
import {
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiCreditCard,
  FiEdit,
  FiHeadphones,
  FiPlus,
  FiPower,
  FiSearch,
  FiStar,
  FiUser,
  FiUserPlus,
  FiX,
  FiZap,
} from 'react-icons/fi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
const StyledLabel = styled.label`
  display: block;
  font-size: ${({ size }) => size || 1}em;
  font-weight: ${({ weight }) => weight || 500};
  opacity: ${({ opacity }) => opacity || 1};
`;

const icons = {
  FiArrowRight: FiArrowRight,
  FiCheck: FiCheck,
  FiChevronDown: FiChevronDown,
  FiCreditCard: FiCreditCard,
  FiEdit: FiEdit,
  FiHeadphones: FiHeadphones,
  FiPlus: FiPlus,
  FiPower: FiPower,
  FiSearch: FiSearch,
  FiStar: FiStar,
  FiUser: FiUser,
  FiUserPlus: FiUserPlus,
  FiX: FiX,
  FiZap: FiZap,
  //
  AiFillStar: AiFillStar,
  AiOutlineStar: AiOutlineStar,
};
export function Icon({ icon, className, style, size }) {
  function renderIcon(_icon) {
    if (!_icon) return null;
    if (icons[_icon]) {
      return icons[_icon];
    }
  }
  const IconComponent = useMemo(() => renderIcon(icon), [icon]);
  if (!IconComponent) return null;
  return (
    <IconComponent className={className} style={style} size={size || 20} />
  );
}
export function Label({ text, className, size, bold, semiBold, muted }) {
  return (
    <StyledLabel
      className={className}
      size={size}
      weight={bold ? 700 : semiBold ? 600 : null}
      opacity={muted ? 0.7 : 1}
    >
      {text}
    </StyledLabel>
  );
}
