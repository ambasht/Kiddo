type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({
  children,
}: ButtonProps) {
  return (
    <button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-3 rounded-2xl font-semibold shadow-md hover:scale-105 transition-transform">
      {children}
    </button>
  );
}