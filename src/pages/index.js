import Head from "next/head";
import { HomeContent } from "src/components/HomeContent";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>TV Maze Search</title>
        <meta
          name="description"
          content="TV Maze Search"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "6rem",
          minHeight: "100vh",
          maxWidth: '1200px'
        }}
      >
        <HomeContent />
      </main>
    </>
  );
}
