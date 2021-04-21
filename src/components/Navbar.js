import React from 'react';
import logo from '../assets/images/logo.svg';

export default function Navbar() {
  return (
    <div>
      <nav className="fixed flex-wrap items-center z-50 text-blue h-20 w-full  m-0 inset-0 border-b border-solid border-blue">
        <div className="w-11/12 flex-col relative flex mx-auto py-4">
          <div className="self-start w-1/5 block my-auto mx-0 p-0 ">
            <ul className="list-none ">
              <li className="m-0 px-0 py-1">
                <a aria-current="page" className="font-primary" href="/">
                  <img src={logo} alt="betahills-logo" />
                </a>
              </li>
            </ul>
          </div>
          <div className="self-end justify-end absolute flex w-4/5 text-right px-0 mr-0 pt-2">
            <ul className="list-none text-xl font-sans">
              <li className="inline-block mx-5 my-0">
                <a
                  className="text-base font-normal tracking-widest block h-full w-full mx-0 cursor-pointer"
                  href="/#about"
                >
                  About
                </a>
              </li>
              <li className="inline-block mx-5  my-0 ">
                <a
                  className="text-base font-normal tracking-widest block h-full w-full mx-0 cursor-pointer"
                  href="/#process"
                >
                  Process
                </a>
              </li>
              <li className="inline-block mx-5  my-0 ">
                {' '}
                <a
                  className="text-base font-normal tracking-widest block h-full w-full mx-0 cursor-pointer"
                  href="/#solutions"
                >
                  Solutions
                </a>
              </li>
              <li className="inline-block mx-5  my-0 ">
                {' '}
                <a
                  className="text-base font-normal tracking-widest block h-full w-full mx-0 cursor-pointer"
                  href="/#case-studies"
                >
                  Case studies
                </a>
              </li>
              <li className="inline-block mx-5  my-0  border-b-2 border-solid border-accent xs:border-0 sm:border-0 md:border-0 pb-2">
                {' '}
                <a
                  className="text-base font-normal tracking-widest block h-full w-full mx-0 cursor-pointer"
                  href="/#impact"
                >
                  Impact
                </a>
              </li>
              <li className="inline-block mx-5  my-0 ">
                {' '}
                <a
                  className="text-base font-normal tracking-widest block h-full w-full mx-0 cursor-pointer"
                  href="/#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>


        </div>
      </nav>
    </div>
  );
}
