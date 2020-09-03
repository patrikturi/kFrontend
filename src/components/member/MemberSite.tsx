import React, { useState } from 'react';
// import '../../member-site.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faUsers,
  faStopwatch,
  faMapMarkerAlt,
  faSearch,
  faTrophy,
  faFutbol,
  faHandsHelping,
  faAngleLeft,
  faAngleRight,
  faCogs,
  faList,
  faSignOutAlt,
  faUser,
  faCircle,
  faAngleUp,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { Dropdown, Nav } from 'react-bootstrap';
import profilePicture from '../../img/profile.jpg';
import { DoughnutChart } from './DoughnutChart';

export const MemberSite = () => {
  const [isSidebarToggled, setSidebarToggled] = useState(false);

  let sidebarClassName =
    'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion';
  if (isSidebarToggled) {
    sidebarClassName += ' toggled';
  }

  const handleToggleSidebar = () => {
    setSidebarToggled(!isSidebarToggled);
  };

  return (
    <div className="memberWrapper">
      {/*<!-- Sidebar -->*/}
      <ul className={sidebarClassName} id="accordionSidebar">
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div>
            <img src="logo.png" width="60" height="60" alt="" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span> Dashboard</span>
          </a>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Gameplay</div>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <FontAwesomeIcon icon={faUsers} fixedWidth />
            <span>Teams</span>
          </a>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <FontAwesomeIcon icon={faStopwatch} fixedWidth />
            <span>Matches</span>
          </a>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />
            <span>Fields</span>
          </a>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />

        {/*<!-- Sidebar Toggler (Sidebar) -->*/}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={handleToggleSidebar}
          >
            <FontAwesomeIcon
              icon={isSidebarToggled ? faAngleRight : faAngleLeft}
              id="sidebarToggleArrow"
              color="#b7b9cc"
            />
          </button>
        </div>
      </ul>
      {/*<!-- End of Sidebar -->*/}

      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          {/*<!-- Topbar -->*/}
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/*<!-- Sidebar Toggle (Topbar) -->*/}
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
              onClick={handleToggleSidebar}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>

            {/*<!-- Topbar Search -->*/}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search player..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <FontAwesomeIcon icon={faSearch} size="sm" />
                  </button>
                </div>
              </div>
            </form>

            {/*<!-- Topbar Navbar -->*/}
            <ul className="navbar-nav ml-auto">
              {/*<!-- Nav Item - Search Dropdown (Visible Only XS) -->*/}
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </a>
                {/*<!-- Dropdown - Messages -->*/}
                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <FontAwesomeIcon icon={faSearch} size="sm" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>

              {/*<!-- Nav Item - User Information -->*/}
              <Nav.Item>
                <Dropdown className="nav-item no-arrow" navbar={true}>
                  <Dropdown.Toggle
                    className="nav-link"
                    href="/"
                    id="userDropdown"
                    data-toggle="dropdown"
                    role="button"
                    variant="none"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      kreison Jacabus
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      alt="profile"
                      src={profilePicture}
                    />
                  </Dropdown.Toggle>
                  {/*<!-- Dropdown - User Information -->*/}
                  <Dropdown.Menu
                    className="shadow"
                    aria-labelledby="userDropdown"
                    alignRight
                  >
                    <Dropdown.Item href="/">
                      <FontAwesomeIcon
                        icon={faUser}
                        size="sm"
                        className="mr-2 text-gray-400"
                        fixedWidth
                      />
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="/">
                      <FontAwesomeIcon
                        icon={faCogs}
                        size="sm"
                        className="mr-2 text-gray-400"
                        fixedWidth
                      />
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item href="/">
                      <FontAwesomeIcon
                        icon={faList}
                        size="sm"
                        className="mr-2 text-gray-400"
                        fixedWidth
                      />
                      Activity Log
                    </Dropdown.Item>
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item
                      href="/"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        size="sm"
                        className="mr-2 text-gray-400"
                        fixedWidth
                      />
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </ul>
          </nav>
          {/*<!-- End of Topbar -->*/}

          {/*<!-- Begin Page Content -->*/}
          <div className="container-fluid text-left">
            {/*<!-- Page Heading -->*/}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            {/*<!-- Content Row -->*/}
            <div className="row">
              {/*<!-- Pending Requests Card Example -->*/}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                          kSoccer points
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          500
                        </div>
                      </div>
                      <div className="col-auto">
                        <FontAwesomeIcon
                          icon={faTrophy}
                          className="fa-2x text-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*<!-- Earnings (Monthly) Card Example -->*/}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Goals
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          99
                        </div>
                      </div>
                      <div className="col-auto">
                        <FontAwesomeIcon
                          icon={faFutbol}
                          className="fa-2x text-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*<!-- Earnings (Monthly) Card Example -->*/}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Assists
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          99
                        </div>
                      </div>
                      <div className="col-auto">
                        <FontAwesomeIcon
                          icon={faHandsHelping}
                          className="fa-2x text-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*<!-- Earnings (Monthly) Card Example -->*/}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                          Matches
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          99
                        </div>
                      </div>
                      <div className="col-auto">
                        <FontAwesomeIcon
                          icon={faStopwatch}
                          className="fa-2x text-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<!-- Content Row -->*/}

            <div className="row">
              {/*<!-- Area Chart -->*/}
              <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                  {/*<!-- Card Header - Dropdown -->*/}
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Last system updates
                    </h6>
                  </div>
                  {/*<!-- Card Body -->*/}
                  <div className="card-body">
                    <p>Bug fix.</p>
                    <p className="mb-0">New feature.</p>
                  </div>
                </div>
              </div>
              {/*<!-- Pie Chart -->*/}
              <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                  {/*<!-- Card Header - Dropdown -->*/}
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Statistics
                    </h6>
                  </div>
                  {/*<!-- Card Body -->*/}
                  <div className="card-body">
                    <div className="chart-pie pt-4 pb-2">
                      <DoughnutChart />
                    </div>
                    <div className="mt-4 text-center small">
                      <span className="mr-2">
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="text-primary"
                        />{' '}
                        Goals
                      </span>
                      <span className="mr-2">
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="text-success"
                        />{' '}
                        Assists
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- /.container-fluid -->*/}
        </div>
        {/*<!-- End of Main Content -->*/}

        {/*<!-- Footer -->*/}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; kSoccer 2020</span>
            </div>
          </div>
        </footer>
        {/*<!-- End of Footer -->*/}
      </div>

      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <FontAwesomeIcon icon={faAngleUp} />
      </a>

      {/* <!-- Logout Modal--> */}
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- End of Content Wrapper -->*/}
    </div>
  );
};
