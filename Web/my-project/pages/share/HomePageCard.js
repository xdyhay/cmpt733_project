import styles from "../../styles/Home.module.css";
export default function HomePageCard(props) {
  //   comp_href, title, description
  return (
    <a href={props.comp_href} className={styles.card} key={props.title}>
      <h2>{props.title} &rarr;</h2>
      <p>{props.description}</p>
    </a>
  );
}
