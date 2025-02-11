```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic to update count
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```