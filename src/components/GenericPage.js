import React from 'react';

export default function GenericPage({ header, body, bg }) {
  return (
    <div className={bg}>
      <div className="min-h-screen text-blue relative z-50 relative">
        <div className="w-11/12 mx-auto ">
          <div>
            <div className="pt-60">
              <div>
                <div>
                  <h2 className="text-blue w-2/3 md:text-7xl">
                    {header}
                  </h2>
                </div>
                <div className="w-3/5 text-right  md:text-left  md:w-90 md:mx-auto  mt-16  py-3">
                  {body}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
