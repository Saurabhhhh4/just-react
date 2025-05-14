// Parent Component
// function App() {
//   const [count, setCount] = React.useState(0);

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Click {count}</button>
//       <MyComponent name="John" />
//     </>
//   );
// }

// // Child Component
// function MyComponent({ name }) {
//   console.log("Rendered MyComponent");
//   return <div>Hello {name}</div>;
// }

// export default React.memo(MyComponent);
function Cart({ items }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = items.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
  }, [items]);

  return <div>Total: ₹{total}</div>;
}

const filteredList = useMemo(() => {
  return list.filter((item) => item.includes(searchTerm));
}, [list, searchTerm]);
