import "../styles/globals.css";
import React from "react";
import { QueryClient,Hydrate,QueryClientProvider } from "@tanstack/react-query";

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    
    <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </Hydrate>
  </QueryClientProvider>
  );
}

export default MyApp;
