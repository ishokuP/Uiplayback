import React from "react";

type UindowProps = {
  width?: string;
  height?: string;
  title?: string;
  headerColor?: string;
  children?: React.ReactNode;
};

const Uindow: React.FC<UindowProps> = ({
  width = "360px",
  height = "500px",
  title = "Main Window",
  headerColor = "#889cf2",
  children,
}) => {
  return (
    <div
      className="rounded-2xl shadow-lg overflow-hidden flex flex-col"
      style={{
        width,
        height,
        backgroundColor: "#ffeeea",
        maxWidth: "80%",
        maxHeight: "80%",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2 text-white text-lg -mb-px"
        style={{
          backgroundColor: headerColor,
        }}
      >
        {/* Window Buttons */}
        <div className="flex gap-2 items-center">
          {/* Close */}
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke={headerColor}
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>

          {/* Maximize */}
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke={headerColor}
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <rect x="5" y="5" width="14" height="14" rx="0" />
            </svg>
          </div>

          {/* Minimize */}
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke={headerColor}
              strokeWidth="5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="flex-1 text-center">{title}</div>
        <div className="w-12" />
      </div>

      {/* Body */}
      <div className="flex-1 overflow-hidden p-4">
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default Uindow;
