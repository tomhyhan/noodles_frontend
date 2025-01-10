'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + searchParams.toString();
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.origin + url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export const trackRouteClick = (pastaName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'pasta_menu_click', {
      pasta_name: pastaName,
    });
  }
};

export const trackFileUpload = (file, success) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const safeFileName = file.name.slice(0, 20);
    window.gtag('event', 'file_upload', {
      file_type: file.type,
      file_size: file.size,
      file_name: safeFileName,
      success: success,
      timestamp: new Date().toISOString(),
    });
  }
};

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Suspense fallback={null}>
        <Analytics />
      </Suspense>
    </>
  );
}
