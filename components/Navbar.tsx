import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between text-black  items-center">
      <h1 className="text-xl font-bold">ShortTrick</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/ocr-scan">Scan</Link>
        <Link href="/learn">Learn</Link>

        <Link href="/dashboard">Dashboard</Link>
        <Link href="/auth/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
