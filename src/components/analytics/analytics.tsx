"use client";
import Script from 'next/script';

export function Analytics() {
	const token = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
	if (!token) {
		return null;
	}
	return (
		<>
		<Script 
			async 
			src={`https://www.googletagmanager.com/gtag/js?id=${token}`}
		/>
		<Script id="google-analytics" strategy="afterInteractive">
			{`
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', '${token}');
			`}
		</Script>
		</>
	);
}