import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Links from "@/components/navbar/types";
import Link from "next/link";

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer({
  opensFrom,
  links,
}: {
  opensFrom: Anchor;
  links: Links[];
}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className=" rounded-md pt-6 pr-7 pb-6 self-end text-gray-700 cursor-pointer flex justify-end">
        <XMarkIcon aria-hidden="true" className="size-6" />
      </div>
      <Divider />
      <List>
        {links.map((link, index) => (
          <ListItem key={index} disablePadding>
            <Link
              key={link.name}
              href={link.href}
              className="pl-3 text-base/7 font-semibold hover:bg-gray-50 w-full"
            >
              <ListItemButton>{link.name}</ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <div className="flex sm:hidden">
          <button
            type="button"
            onClick={toggleDrawer(opensFrom, true)}
            className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <Drawer
          anchor={opensFrom}
          open={state[opensFrom]}
          onClose={toggleDrawer(opensFrom, false)}
        >
          {list(opensFrom)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
