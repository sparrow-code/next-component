"use client";
import React from "react";

export default function Toast({ toast, setToast }) {
  return (
    <>
      {toast.show && (
        <div className="fixed right-5 top-3 z-[5]">
          <div className="flex flex-wrap justify-between gap-5 bg-[#404040C9] text-green-300 px-5 py-2 rounded">
            <div>{toast.msg}</div>
            <div>
              <button
                onClick={() =>
                  setToast((prev) => ({ ...prev, show: false, msg: "" }))
                }
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
