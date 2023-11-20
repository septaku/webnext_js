import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
    }}
    >
      <Component{...pageProps}/>
    </MantineProvider>
  );
}