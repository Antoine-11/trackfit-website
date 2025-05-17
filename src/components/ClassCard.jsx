export default function ClassCard({ title, description, image }) {
    return (
      <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  