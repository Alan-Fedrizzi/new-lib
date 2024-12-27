import { type TpButtonProps } from 'tokens/congressos';
import { ButtonContainer } from './Button.styles';

export default function TpButton(
  props: TpButtonProps & {
    children: React.ReactNode;
  }
) {
  const { children, ...otherProps } = props;

  return <ButtonContainer {...otherProps}>{children}</ButtonContainer>;
}
