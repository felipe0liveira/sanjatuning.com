import Head from "next/head";
import Link from "next/router";
import "../styles/styles.scss";

const Index = () => (
  <div className="index-page">
    <Head>
      <title>SanjaTuning</title>
    </Head>

    <div className="container">
      <h1 className="title">SanjaTuning</h1>

      <div className="card">
        <p>
          Seja bem vindo ao site oficial do <strong>SanjaTuning</strong>
        </p>
      </div>

      <div className="card">
        <div className="card-title">Coding</div>

        <ul>
          <li>BimmerCode</li>
          <li>Adaptadores Compatíveis</li>
          <li>Funções</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Index;
