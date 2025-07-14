import { useEffect, useState } from 'react';

export default function Home() {
  const [hosts, setHosts] = useState([]);

  useEffect(() => {
    fetch('/api/hosts')
      .then((res) => res.json())
      .then(setHosts)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>HerWaypoint</h1>
      <p>Welcome to the future home of the HerWaypoint frontend.</p>
      <h2>Hosts (sample from D1)</h2>
      <pre>{JSON.stringify(hosts, null, 2)}</pre>
    </div>
  );
}
