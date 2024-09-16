
export default function LocationCard({ location }) {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-semibold">{location.name}</h2>
        <p>{location.address}, {location.city}, {location.state}</p>
        {/* Add more location details here */}
      </div>
    )
  }