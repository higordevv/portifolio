import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import GlobalStyles from "@app/styles/GlobalStyles ";
import { Session } from "next-auth/core/types";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <GlobalStyles />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
