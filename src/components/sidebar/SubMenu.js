import React from "react";
import { Accordion, Nav } from "react-bootstrap";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

class SubMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { icon, title, items } = this.props;

    return (
      <Nav.Item className={classNames({ open: !this.state.collapsed })}>
        <Accordion>
          <Accordion.Toggle
            as={Nav.Link}
            variant="link"
            eventKey="0"
            onClick={this.toggleNavbar}
          >
            <img src={icon} alt="logo" className={"sidebar_image"} />
            {title}
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <nav className="nav flex-column">
              {items.map((item) => (
                <a
                  className={`nav-link nav-item pl-5 ${
                    item === "Active" ? "active" : ""
                  } `}
                  href="/"
                  key={item.key}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </Accordion.Collapse>
        </Accordion>
      </Nav.Item>
    );
  }
}

export default SubMenu;
