
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";
import { WorkspaceSwitcher } from "./workspace-switcher";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral p-4 w-full">
        <Link href='/'>
            <Image src='/logo.svg' alt="Logo" width={50} height={50} />
        </Link>
        <DottedSeparator className="my-4" />
        <WorkspaceSwitcher />
        <DottedSeparator className="my-4" />
        <Navigation />
    </aside>
  );
};
