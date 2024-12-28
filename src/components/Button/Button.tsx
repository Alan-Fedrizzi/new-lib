import { type TpButtonProps } from 'tokens/congressos';
import { ButtonContainer, ButtonText } from './Button.styles';
import type { PressableProps } from 'react-native';

export default function TpButton(
  props: TpButtonProps &
    PressableProps & {
      children: React.ReactNode;
    }
) {
  const { children, tpFill, tpDisabled, ...otherProps } = props;

  return (
    <ButtonContainer tpFill={tpFill} tpDisabled={tpDisabled} {...otherProps}>
      <ButtonText tpFill={tpFill} tpDisabled={tpDisabled}>
        {children}
      </ButtonText>
    </ButtonContainer>
  );
}
