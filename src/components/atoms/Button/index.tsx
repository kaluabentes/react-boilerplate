import React from "react";

interface Props {
  children: string;
  onClick(event: any): void;
}

/**
 * A basic button to use in overall application actions
 */
export default function Button({ children, onClick }: Props) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}
