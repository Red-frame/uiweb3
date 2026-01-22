import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";
export default function Home() {
  return (
    <div className="flex flex-col h-dvh max-w-md mx-auto bg-white">
      <Navbar />
      <ChatBox />
    </div>
  );
}
