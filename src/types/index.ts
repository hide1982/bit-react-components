type DefaultButtonBaseProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "ref"
>;

export interface ButtonBaseStyleProps {
  disableFocusStyle?: boolean;
}

export type ButtonBaseProps = DefaultButtonBaseProps & ButtonBaseStyleProps;
