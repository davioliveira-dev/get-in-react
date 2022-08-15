import React, { HTMLProps } from "react";
import { forwardRef } from "react";
import "./styles.css";

type Props = Omit<HTMLProps<HTMLInputElement>, "id"> & {
  icon?: string;
};

export const SearchInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const stylesWithIcon = props.icon
    ? {
        ...props.style,
        backgroundImage: `url('${props.icon}')`,
      }
    : {};

  return (
    <input
      id={"search-input"}
      ref={ref}
      type="search"
      style={stylesWithIcon}
      {...props}
    />
  );
});
