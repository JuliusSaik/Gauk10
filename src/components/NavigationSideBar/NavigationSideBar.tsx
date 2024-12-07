import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { ROUTES } from "../../config/Router/routes";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import StyleRoundedIcon from "@mui/icons-material/StyleRounded";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const sideBarItems = [
  {
    route: ROUTES.DASHBOARD,
    icon: <SpaceDashboardRoundedIcon fontSize="large" className="text-white" />,
    text: "Dashboard",
  },
  {
    route: ROUTES.ALL_STUDY_CARDS,
    icon: <StyleRoundedIcon fontSize="large" className="text-white" />,
    text: "Cards",
  },
  {
    route: ROUTES.CALENDAR,
    icon: <CalendarMonthRoundedIcon fontSize="large" className="text-white" />,
    text: "Calendar",
  },
];

const NavigationSideBar = () => {
  const currentLocation = useLocation();

  return (
    <Box className="bg-gray-800 min-h-full overflow-y-hidden flex-col w-64">
      <Link
        to={ROUTES.DASHBOARD}
        key="Icon"
        className="flex justify-center mb-12 mt-8"
      >
        <img src="/gauk10_logo.svg" alt="logo" />
      </Link>

      <Stack spacing={2} className="flex-col items-start">
        {sideBarItems.map((item) => (
          <Link
            className={clsx(
              "w-full hover:bg-primary hover:bg-opacity-30 transform transition-all duration-300",
              {
                "bg-primary": currentLocation.pathname === item.route,
              }
            )}
            to={item.route}
            key={item.text}
          >
            <Box className="flex p-3">
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} className=" text-white" />
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default NavigationSideBar;
