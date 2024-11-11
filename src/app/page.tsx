import Image from "next/image";
import CenterContent from "./components/center-container/page";
import Navbar from "./components/navbar/page";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <CenterContent></CenterContent>
    </div>
  );
}
