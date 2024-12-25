import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import { Breadcrumb } from "./ui/breadcrumb";
import SearchInput from "./ui/search-input";
import { NavUser } from "./nav-user";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb />
      </div>

      <div className="flex items-center gap-2 px-4">
        <div className="hidden md:flex">
          <SearchInput />
        </div>
        <NavUser />
        <ThemeToggle />
      </div>
    </header>
  );
}