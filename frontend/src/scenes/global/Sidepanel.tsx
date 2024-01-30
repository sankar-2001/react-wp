import React from "react";
import { SideBarParent } from "@/components/side-bar-parent/side-bar-parent";
import { SideBarItem } from "@/components/side-bar-item/side-bar-item";
import { Link } from "react-router-dom";

const SidebarItems = [
  {
    name: "THE ITALIAN JOB",
    route: "/",
  },
  {
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    name: "Page 1",
    route: "/page-1",
  },
  {
    name: "Page 2",
    route: "/page-2",
  },
  {
    name: "Page 3",
    route: "page-3",
  },
];

export default function Sidepanel() {
  return (
    <>
      <SideBarParent>
        {SidebarItems.map((item) => (
          <Link to={item.route}>
            {" "}
            <SideBarItem >
              <p>{item.name}</p>
            </SideBarItem>
          </Link>
        ))}
      </SideBarParent>
    </>
  );
}
