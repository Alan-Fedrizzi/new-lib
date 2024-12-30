import { useState } from 'react';
import type { PressableProps } from 'react-native';
import { type TpButtonProps } from 'tokens/congressos';
import { ButtonContainer, ButtonText } from './Button.styles';

export default function TpButton(
  props: TpButtonProps &
    PressableProps & {
      children: React.ReactNode;
    }
) {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { children, tpFill, tpDisabled, ...otherProps } = props;

  return (
    <ButtonContainer
      tpFill={tpFill}
      tpDisabled={tpDisabled}
      isPressed={isPressed}
      isHovered={isHovered}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onHoverIn={() => setIsHovered(true)} // For web hover effect
      onHoverOut={() => setIsHovered(false)} // For web hover effect
      // onPressIn={() => console.log('onPressIn')}
      // onPressOut={() => console.log('onPressOut')}
      // onHoverIn={() => console.log('onHoverIn')} // For web hover effect
      // onHoverOut={() => console.log('onHoverOut')} // For web hover effect
      {...otherProps}
    >
      <ButtonText tpFill={tpFill} tpDisabled={tpDisabled} isHovered={isHovered}>
        {children}
      </ButtonText>
    </ButtonContainer>
  );
}
