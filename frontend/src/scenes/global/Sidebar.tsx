import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link } from "react-router-dom"
import { Cable, HelpCircle } from "lucide-react";

const MySidebar = () => {
    return (
        <div className="flex h-screen sticky top-0">
          <Sidebar className="app">
            <Menu>
              <MenuItem className="menu1" icon={<MenuRoundedIcon />}>
                <h2> ROBOTOAI</h2>
              </MenuItem>
              <MenuItem icon={<GridViewRoundedIcon /> } >Dashboard</MenuItem>
              <SubMenu label="Insights" icon={<BarChartRoundedIcon />}>
                <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
                <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
              </SubMenu>
              <MenuItem icon={<Cable />}>Teleop</MenuItem>
              <MenuItem icon={<HelpCircle />}>FAQ</MenuItem>
              <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
                <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
                <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
                <MenuItem icon={<NotificationsRoundedIcon />}>
                  Notifications
                </MenuItem>
              </SubMenu>
              <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
            </Menu>
          </Sidebar>
        </div>
    );
  };
  export default MySidebar;