type DefaultButtonBaseProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "ref"
>;

export interface ButtonBaseStyleProps {
  rippleColors?: string | [string, string?];
  rippleRadius?: string;
  rippleDuration?: string;
}

export type ButtonBaseProps = DefaultButtonBaseProps & ButtonBaseStyleProps;
