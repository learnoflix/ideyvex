import React from "react";

interface ButtonProps {
  text?: string;
  icon: React.ComponentType;
  left?: boolean;
  right?: boolean;
  onClick?: () => void;
}

export function Button({
  text,
  icon: Icon,
  left,
  right,
  onClick,
}: ButtonProps) {
  return (
    <button
      className="inline-flex items-center justify-center font-medium rounded border px-4 py-2 space-x-2 text-primary border-gray-300 hover:text-gray-500 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 active:bg-gray-100"
      onClick={onClick}
    >
      {left && <Icon />}
      <span>{text}</span>
      {right && <Icon />}
    </button>
  );
}
