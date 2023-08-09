const FeatureCarousel = ({ images }) => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:mx-10">
                <div className="md:w-1/2">
                    <h1 className="text-5xl md:text-[#221E1B] dark:text-[#FFFFFF] text-center lg:text-left font-bold text-brown-300 my-10  ">
                        Featured Projects
                    </h1>
                </div>
                <div className="md:w-1/2 flex justify-center py-2">
                    <a href="s/projects" target="_blank" rel="noopener noreferrer">
                        <button className="border-2 border-indigo-400 hover:border-indigo-600 bg-transparent text-black dark:text-white font-bold py-2 px-4 rounded dark:bg-transparent dark:border-indigo-400 hover:border-indigo-200">
                            Projects Page
                        </button>
                    </a>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((imageData, index) => (
                        <a key={index} href={imageData.link} className="block">
                            <div
                                className="flex justify-center items-center rounded-lg overflow-hidden border border-gray-800"
                                style={{ width: '250px', height: '150px' }} // Adjust width and height as needed
                            >
                                <img
                                    src={imageData.url}
                                    alt={`Slide ${index + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default FeatureCarousel;
