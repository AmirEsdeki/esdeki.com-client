import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="img/favicon.ico" rel="icon" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <body data-spy="scroll" data-target=".navbar" data-offset="51">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
