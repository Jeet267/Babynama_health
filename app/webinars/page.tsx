'use client';



// Mock data for webinars
const webinars = [
  {
    id: 1,
    title: "Baby Sleep Patterns & Solutions",
    speaker: "Dr. Sumitra Meena",
    date: "2024-04-15T18:00:00Z",
  },
  {
    id: 2,
    title: "Nutrition in the First Year",
    speaker: "Dr. Rahul Verma",
    date: "2024-04-20T17:30:00Z",
  },
  {
    id: 3,
    title: "Common Baby Health Concerns",
    speaker: "Dr. Priya Sharma",
    date: "2024-04-25T19:00:00Z",
  }
];

export default function WebinarsPage() {
  const handleViewDetails = (id: number) => {
    console.log(`Viewing details for webinar ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Upcoming Webinars
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {webinars.map((webinar) => (
            <div
              key={webinar.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {webinar.title}
                </h2>
                <p className="text-gray-600 mb-2">
                  Speaker: {webinar.speaker}
                </p>
                <p className="text-gray-600 mb-4">
                  Date: {new Date(webinar.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
                <button
                  onClick={() => handleViewDetails(webinar.id)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 