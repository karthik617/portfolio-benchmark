export default function Header() {

  return (
    <div className="flex items-center justify-between w-full h-16 border-b border-[var(--light-grey)] bg-gray-900 px-3">
      <p className="text-xl font-bold text-white flex-1">Portfolio & Benchmark</p>
      <div className="flex gap-4 items-center">
        <button className="btn">Apply</button>
      </div>
    </div>
  );
}
