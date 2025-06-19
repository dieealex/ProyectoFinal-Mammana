import Item from './Item';

function ItemList({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ItemList;