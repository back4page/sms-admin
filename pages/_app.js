import { Inter, Roboto } from "next/font/google";
import NextNProgress from "nextjs-progressbar";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <SessionProvider session={session}>
        <main className={`${roboto.variable} ${inter.className}`}>
          <NextNProgress options={{ showSpinner: false }} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </SessionProvider>
    </>
  );
}
