import { Pressable } from 'react-native';
import styled, { css } from 'styled-components/native';
import { type TpButtonProps, TpButtonFill } from 'tokens/congressos';

export const ButtonContainer = styled(Pressable)<TpButtonProps>`
  ${({ tpFill = TpButtonFill.SOLID }) => css`
    background-color: ${`var(--tp-button-${tpFill}-bg-default)`};
    padding-right: ${`var(--tp-button-${tpFill}-padding-horizontal)`};
    padding-left: ${`var(--tp-button-${tpFill}-padding-horizontal)`};

    &:hover {
      color: red;
    }
  `}
`;
// tpFill = TpButtonFill.SOLID
// background: ${`var(--tp-button-${tpFill}-bg-default)`};
// padding: ${`var(--tp-button-${tpFill}-padding-horizontal)`};

// export const ButtonText = styled(Text)<TpButton>`
//   ${({ clear = false }) => css`
//     color: ${clear ? 'red' : '#fff'};
//     font-size: 16px;
//     line-height: 16px;
//     font-weight: 600;
//   `}
// `;
