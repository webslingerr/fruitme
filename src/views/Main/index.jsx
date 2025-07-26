import About from "@/components/About";
import {Banner} from "@/components/Banner";
import Footer from "@/components/Footer";
import Frukt from "@/components/Fruck";
import FruitBasketCards from "@/components/Plan";
import Header from "@/components/header";
import styles from "./styles.module.scss";

export default function Main() {
  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <Frukt />
      {/* <Integrations /> */}
      <FruitBasketCards />
      <About />
      <Footer />
    </main>
  );
}
