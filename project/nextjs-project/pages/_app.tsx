import { useState } from "react";
import MainPage from "./";
import Layout from "./_layout";

export default function App() {
  const [accessToken, setAccessToken] = useState("");

  return (
    <Layout>
      <MainPage />
    </Layout>
  );
}
