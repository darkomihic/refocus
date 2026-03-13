import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QrScanner({ onScanSuccess, onScanError }) {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState(null);
  const scannerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let stopped = false;
    const scanner = new Html5Qrcode("qr-reader");
    scannerRef.current = scanner;

    const stopScanner = () => {
      if (stopped) return Promise.resolve();
      stopped = true;
      return scanner.stop().catch(() => {});
    };

    scanner
      .start(
        { facingMode: "environment" },
        { fps: 10, qrbox: { width: 250, height: 250 } },
        (decodedText) => {
          stopScanner().then(() => {
            setIsScanning(false);
            if (onScanSuccess) onScanSuccess(decodedText);
          });
        },
        // eslint-disable-next-line no-unused-vars
        (_errorMessage) => {}
      )
      .then(() => {
        setIsScanning(true);
      })
      .catch((err) => {
        setError("Kamera nije dostupna. Proverite dozvole.");
        if (onScanError) onScanError(err);
      });

    return () => {
      stopScanner();
      scannerRef.current = null;
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Camera viewfinder */}
      <div
        id="qr-reader"
        ref={containerRef}
        className="w-full max-w-sm rounded-2xl overflow-hidden"
      />

      {/* Status messages */}
      {isScanning && (
        <p className="text-[#14532d]/60 text-sm mt-4 animate-pulse">
          Skenirajte QR kod...
        </p>
      )}

      {error && (
        <div className="mt-4 bg-red-50 text-red-700 px-4 py-3 rounded-xl text-sm text-center">
          {error}
        </div>
      )}
    </div>
  );
}
