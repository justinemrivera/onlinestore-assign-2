import Item from "./item";
import "./catalog.css";
const Catalog = () => {
  return (
    <div className="catalog-page">
      <h3>Check out our hand-crafted jewelry</h3>
      <div className="item-container">
        <Item title="ring" price="$50"></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    </div>
  );
};

export default Catalog;
