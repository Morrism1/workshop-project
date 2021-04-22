import React from 'react';

export default function GenericPage({ header, body, bg }) {
  return (
    <div className={bg}>
      <div className="min-h-screen text-blue relative z-50">
        <div className="w-11/12 mx-auto ">
          <div>
            <div className="pt-60">
              <div>
                <div>
                  <h2 className="text-blue w-3/5">
                    {header}
                  </h2>
                </div>
                <div className="w-1/2 text-left ml-auto mx-12 py-3">
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
