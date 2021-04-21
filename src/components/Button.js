import React from 'react';

export default function Button({ text }) {
  return (
    <div className="flex justify-center">
      <a href="/#contact">
        <button className="btn bg-transparent text-lg font-sans  md:w-40  border-solid hover:bg-blue hover:text-white transition-250ms border-1 border-blue mx-0 text-blue leading-5 py-4 px-8 inline-flex items-center shadow-sm text-base font-medium">
          {text}
        </button>
      </a>
    </div>
  );
}
