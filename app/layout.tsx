import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Foodie — Good food, good mood.', description: 'Discover neighborhood favorites and find your next delicious bite. Food ordering demo built with Next.js.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
