import { useEffect } from "react";

export default function useHotjar(siteId) {
  useEffect(() => {
    if (!siteId) return;

    // Prevent double-injecting if user navigates between tracked pages
    if (document.getElementById("hotjar-script")) return;

    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid: siteId, hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');
      r.async=1;
      r.id="hotjar-script"; // <-- Add ID so we can check
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

  }, [siteId]);
}