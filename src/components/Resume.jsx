import React, { useRef } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    defaultScale: 1, // 1 = 100%
  });
  const viewerRef = useRef(null);
  const pdfUrl = '/Resume.pdf';

  // Download function
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Print function
  const handlePrint = () => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = pdfUrl;
    document.body.appendChild(iframe);
    iframe.onload = () => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
      document.body.removeChild(iframe);
    };
  };

  return (
    <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 pt-12 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">📄 My Resume</h1>

      <div className="flex gap-4 mb-4">
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
        >
          Download PDF
        </button>

        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        >
          Print PDF
        </button>
      </div>

      <div className="w-full max-w-5xl h-full shadow-xl border border-white/10 rounded-lg overflow-hidden bg-black text-black">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={pdfUrl}
            plugins={[defaultLayoutPluginInstance]}
            ref={viewerRef}
          />
        </Worker>
      </div>
    </div>
  );
};

export default PdfViewer;
