import React, { ElementType } from "react";
import { Button } from "../index";
type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

const SmallSidebarItem = ({ Icon, title, url }: SmallSidebarItemProps) => {
  return (
    <a href={url} className="w-full">
      <Button variant="ghost" className="w-full py-4">
        <div className="flex flex-col items-center justify-center gap-1">
          <Icon />
          <span>{title}</span>
        </div>
      </Button>
    </a>
  );
};

export default SmallSidebarItem;
