
const Gallery = () => {
    return (
        <div className="space-y-5">
            <h1 className="text-5xl font-bold text-center">Gallery</h1>
            <div className="flex flex-col md:flex-row gap-5 justify-center">
                <img className="w-96 rounded-lg" src="https://i.ibb.co.com/PtJM2bN/gallery1.jpg" alt="" />
                <img className="w-96 rounded-lg" src="https://i.ibb.co.com/hRVtxmq/gallery2.jpg" alt="" />
                <img className="w-96 rounded-lg" src="https://i.ibb.co.com/84DgZgy/gallery3.jpg" alt="" />
            </div>
        </div>
    );
};

export default Gallery;