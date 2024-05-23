import React, { useEffect, useRef } from "react";

const AdSenseAd: React.FC = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6368128433214629" // Замените на ваш AdSense ID
        data-ad-slot="5197493269" // Замените на ваш AdSense Slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

export default AdSenseAd;
