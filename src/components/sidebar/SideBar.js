import React from "react";
import SubMenu from "./SubMenu";
import { Col, Nav } from "react-bootstrap";
import "./sidebar.scss";
import neoKredLogo from "../../assets/neokredLogo.png";
import classNames from "classnames";
import AdminServices from "../../assets/sidebarAssets/AdminServices.svg";
import BulkRegistration from "../../assets/sidebarAssets/BulkRegistration.svg";
import Cards from "../../assets/sidebarAssets/Cards.svg";
import Client from "../../assets/sidebarAssets/Client.svg";
import Clientprefundicon from "../../assets/sidebarAssets/Clientprefundicon.svg";
import ClientRelationship from "../../assets/sidebarAssets/ClientRelationship.svg";
import Customericon from "../../assets/sidebarAssets/Customericon.svg";
import Dashboard from "../../assets/sidebarAssets/Dashboard.svg";
import Reports from "../../assets/sidebarAssets/Reports.svg";
import Compliance from "../../assets/sidebarAssets/Compliance.svg";
export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarOptions: [
        {
          title: "Client",
          icon: Client,
          items: [
            {
              name: "Add Client",
              key: "ktm-duke",
            },
            {
              name: "Client List",
              key: "ktm-duke",
            },
            {
              name: "Add Pocket",
              key: "ktm-duke",
            },
            {
              name: "Pocket List",
              key: "ktm-duke",
            },
            {
              name: "Program List",
              key: "ktm-duke",
            },
          ],
        },
        {
          title: "Client Relationships",
          icon: ClientRelationship,
          items: [
            {
              name: "Add Client Relationship",
              key: "ktm-duke",
            },
            {
              name: "Client Relationship Mapping",
              key: "ktm-duke",
            },
            {
              name: "Client Relationship List",
              key: "ktm-duke",
            },
          ],
        },
        {
          title: "Customer",
          icon: Customericon,
          items: [
            {
              name: "Add Coustomer",
              key: "ktm-duke",
            },
            {
              name: "Customer List",
              key: "ktm-duke",
            },
            {
              name: "KYC Reports",
              key: "ktm-duke",
            },
          ],
        },
        {
          title: "Cards",
          icon: Cards,
          items: [
            {
              name: "Card List",
              key: "ktm-duke",
            },
            {
              name: "Assign Physical Cards",
              key: "ktm-duke",
            },
            {
              name: "Bulk Card Issuance",
              key: "ktm-duke",
            },
            {
              name: "Bulk Card Issuance Indent",
              key: "ktm-duke",
            },
            {
              name: "Bulk Card Issuance List",
              key: "ktm-duke",
            },
            {
              name: "Bulk Card Issuance Response",
              key: "ktm-duke",
            },
          ],
        },
        {
          title: "Reports",
          icon: Reports,
          items: [
            {
              name: "SettleMent Reports",
              key: "ktm-duke",
            },
            {
              name: "Transaction Reports",
              key: "ktm-duke",
            },
          ],
        },
        {
          title: "Client Prefund",
          icon: Clientprefundicon,
          items: [
            {
              name: "Client Prefund Approval",
              key: "ktm-duke",
            },
            {
              name: "Wallet Fund Request",
              key: "ktm-duke",
            },
          ],
        },
        {
          title: "Admin Services",
          icon: AdminServices,
          items: [
            {
              name: "Add Role",
              key: "ktm-duke",
            },
            {
              name: "User List",
              key: "ktm-duke",
            },
          ],
        },
        {
          title: "Bulk Registration",
          icon: BulkRegistration,
          items: [
            {
              name: "Bulk Customer Registraion",
              key: "ktm-duke",
            },
            {
              name: "Bulk Customer List",
              key: "ktm-duke",
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Col style={{ backgroundColor: "#1A1A1A" }} fixed="top">
            <img src={neoKredLogo} alt="logo" className={"image"} />
          </Col>
        </div>
        <Nav className="flex-column pt-2">
          <Nav.Item>
            <Nav.Link href="/">
              <img src={Dashboard} alt="logo" className={"sidebar_image"} />
              Dashboard
            </Nav.Link>
          </Nav.Item>
          {this.state.sideBarOptions.map((item) => {
            return (
              <SubMenu title={item.title} icon={item.icon} items={item.items} />
            );
          })}
          <Nav.Item>
            <Nav.Link href="/">
              <img src={Compliance} alt="logo" className={"sidebar_image"} />
              Compliance Report
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
