import styles from "./Gallery.module.scss";

import img from "../../assets/gallery.png";

const Gallery = () => {
  return (
    <div className={styles.Gallery}>
      <h2>Галлерея</h2>
      <section className={styles.ImageSection}>
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </section>
    </div>
  );
};

export default Gallery;
