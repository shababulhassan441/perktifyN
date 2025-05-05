"use client";
import React, { useEffect, useState } from "react";

const PdfFile = ({ fileId }) => {
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    setPdfUrl(fileId);
  }, []);

  return (
    <button
      onClick={() => window.open(pdfUrl, "_blank")}
      className="mt-0 w-100 text-center fs-4 p-2 mx-auto fw-600 rounded-2 bg-white   "
      disabled={!pdfUrl} // Disable button if URL is not available
    >
      View as PDF
    </button>
  );
};

export default PdfFile;
