import React from "react";
type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto max-w-[1404px] px-5 lg:px-10 2xl:px-0 my-15 w-full ">
      {children}
    </div>
  );
}
