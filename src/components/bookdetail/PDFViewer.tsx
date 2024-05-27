import React from 'react'
import { Viewer,Worker,TextDirection } from "@react-pdf-viewer/core";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";


const PDFViewer = (props) => {
  const [toolbarPluginInstance] = useState(toolbarPlugin());
  const { Toolbar } = toolbarPluginInstance;

  const transformToolbarSlot = (slot) => ({
    ...slot,
    Download: () => <></>,
    Open:() => <></>,
    OpenMenuItem:()=><></>,
    Print:()=><></>,
    PrintMenuItem:()=><></>,
    DownloadMenuItem: () => <></>,
    SwitchTheme: () => <></>,
    SwitchThemeMenuItem:()=><></>,
  });

  return (
    <div className='w-[100%] flex justify-center bg-primaryBlue'>

    <div
      className="rpv-core__viewer"
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        height: "703px",
        width:"70%",
        userSelect:"none"
      }}
      onContextMenu={(e)=>e.preventDefault()}
    >
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#eeeeee",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          display: "flex",
          padding: "0.25rem",
        }}
      >
        <Toolbar>
          {toolbarPluginInstance.renderDefaultToolbar(transformToolbarSlot)}
        </Toolbar>
      </div>

      <div
        style={{
          flex: 1,
          overflow: "hidden",
          height:"500px"
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={props.url}
            // theme="dark"
            plugins={[toolbarPluginInstance]}
            theme={{
              direction: TextDirection.RightToLeft,
          }}
          />
        </Worker>
      </div>
    </div>
    </div>
  );
};

export default PDFViewer;
