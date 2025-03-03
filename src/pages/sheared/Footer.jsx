import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/jobslogo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img className="w-12" src={logo} alt="" />
            <h3 className="text-3xl bg-slate-700 px-1 py-2 rounded-xl">
              Job
              <span className="bg-amber-600  p-1 rounded-xl">HUB</span>
            </h3>
          </Link>
          <p className="text-center">
            JobHUB Private Ltd.
            <br />
            Providing job searching service since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
