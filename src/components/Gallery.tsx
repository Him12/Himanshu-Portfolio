import { useState } from "react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // All images from /public/gallery/
  const images = [
    "gallery/IMG-20251112-WA0018.jpg",
    "gallery/IMG-20251206-WA0007.jpg",
    "gallery/IMG-20251206-WA0008.jpg",
    "gallery/IMG-20251206-WA0010.jpg"
  ];

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Moments, memories, and milestones
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((url, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 cursor-pointer animate-fade-in-up hover:shadow-2xl transition-all"
              style={{ animationDelay: `${index * 60}ms` }}
              onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}${url}`)}
            >
              <img
                src={`${import.meta.env.BASE_URL}${url}`}
                alt="Gallery"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Fullscreen Preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Full preview"
                className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
