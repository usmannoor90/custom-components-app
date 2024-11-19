import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <select name="all component pages" id="allcomponentpages">
        <option value="home">Home</option>
      </select>
    </main>
  );
}
