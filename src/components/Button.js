import React from 'react';

export default function Button({ text }) {
  return (
    <div className="mt-32">
      <a href="/#contact">
        <button className="btn bg-transparent font-sans  md:w-52  border-solid hover:bg-blue hover:text-white border-blue mx-0 text-blue leading-5 py-4 px-8 inline-flex items-center  text-base font-medium">
          {text}
        </button>
      </a>
    </div>
  );
}
