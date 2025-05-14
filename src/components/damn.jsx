// Parent Component
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
      <MyComponent name="John" />
    </>
  );
}

// Child Component
function MyComponent({ name }) {
  console.log("Rendered MyComponent");
  return <div>Hello {name}</div>;
}

export default React.memo(MyComponent);
