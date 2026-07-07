function Gallery({ images = [] }) {
  if (!images.length) {
    return (
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="aspect-square rounded-3xl bg-gray-100"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="aspect-square overflow-hidden rounded-3xl"
        >
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
