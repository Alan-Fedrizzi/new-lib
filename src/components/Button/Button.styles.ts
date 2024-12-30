import { Pressable, Text } from 'react-native';
import styled, { css } from 'styled-components/native';
import { type TpButtonProps, TpButtonFill } from 'tokens/congressos';

export const ButtonContainer = styled(Pressable)<TpButtonProps>`
  ${({
    tpFill = TpButtonFill.SOLID,
    tpDisabled = false,
    isHovered = false,
  }) => css`
    display: flex;
    align-items: center;
    background-color: ${tpDisabled
      ? `var(--tp-button-${tpFill}-bg-disabled)`
      : isHovered
        ? `var(--tp-button-${tpFill}-bg-hover)`
        : `var(--tp-button-${tpFill}-bg-default)`};
    border-radius: ${`var(--tp-button-${tpFill}-border-radius)`};
    height: ${`var(--tp-button-${tpFill}-height)`};
    padding-right: ${`var(--tp-button-${tpFill}-padding-horizontal)`};
    padding-left: ${`var(--tp-button-${tpFill}-padding-horizontal)`};
    cursor: ${tpDisabled ? 'initial' : 'pointer'};
    pointer-events: ${tpDisabled ? 'none' : 'all'};

    /* &:hover {
      color: red;
    } */
  `}
`;

export const ButtonText = styled(Text)<TpButtonProps>`
  ${({
    tpFill = TpButtonFill.SOLID,
    tpDisabled = false,
    isHovered = false,
  }) => css`
    display: flex;
    align-items: center;
    height: 100%;
    color: ${tpDisabled
      ? `var(--tp-button-${tpFill}-fg-disabled)`
      : isHovered
        ? `var(--tp-button-${tpFill}-fg-hover)`
        : `var(--tp-button-${tpFill}-fg-default)`};
    /* TODO Yurepegar no objeto */
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5em;
    font-family: sans-serif;
  `}
`;
