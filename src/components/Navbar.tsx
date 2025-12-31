'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
     const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About</HoveredLink>
            <HoveredLink href="/achievements">Achievements</HoveredLink>
            
          </div>
        </MenuItem>
         <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/all-courses">All Courses</HoveredLink>
            <HoveredLink href="/music-theory">Basic Music Theory</HoveredLink>
            <HoveredLink href="/adv-composition">Advanced Composition</HoveredLink>
            <HoveredLink href="/song-writing">Song Writing</HoveredLink>
          </div>
        </MenuItem>
         <MenuItem setActive={setActive} active={active} item="Contact us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact-us">contact us</HoveredLink>
            <HoveredLink href="/email">Email</HoveredLink>
            
          </div>
        </MenuItem>
        </Menu>
    </div>
  )
}

export default Navbar