import { Inter, Roboto } from "next/font/google";
import NextNProgress from "nextjs-progressbar";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <QueryClientProvider client={queryClient}>
        {/* <Hydrate state={pageProps.dehydratedState}> */}
        <SessionProvider session={session}>
          <main className={`${roboto.variable} ${inter.className}`}>
            <NextNProgress options={{ showSpinner: false }} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </SessionProvider>
        <ReactQueryDevtools />

        {/* </Hydrate> */}
      </QueryClientProvider>
    </>
  );
}
