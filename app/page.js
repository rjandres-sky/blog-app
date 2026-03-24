import Image from "next/image";

export default function Home() {
  let fulltname = "RJ S. Andres"
  

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome {fulltname}</h1>
      <p className="mt-4 text-lg">This is the home page.</p>
    </div>
  );
}
