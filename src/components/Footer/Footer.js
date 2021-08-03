/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://www.guta.com/?ref=bdr-user-archive-footer">
              Guta Block-Chain App
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.guta.com/presentation?ref=bdr-user-archive-footer">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.guta.com/blog?ref=bdr-user-archive-footer">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} Powered{" "}
          <i className="tim-icons icon-lightning-2" /> by:{" "}
          <a
            href="https://www.guta.com/?ref=bdr-user-archive-footer"
            target="_blank"
          >
           Malin Greats Systems
          </a>{" "}
          IJCN
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
