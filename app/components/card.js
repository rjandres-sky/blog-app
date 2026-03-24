export default function Card({ title, description, children }) {
  return (
    <div className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
}