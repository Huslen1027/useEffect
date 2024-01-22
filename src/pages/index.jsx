import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [Username, setUsername] = useState("");

  useEffect(() => {
    async function getData() {
      const responce = await fetch("https://randomuser.me/api/");
      const data = await responce.json();
      console.log(data);
      setUsername(data.results[0].name.title);
    }
    getData();
  }, []);

  return (
    <div>
      <p>{Username}</p>
    </div>
  );
}
