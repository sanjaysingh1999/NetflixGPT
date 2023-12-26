
const VidoeTitle = ({title,overview}) => {
    return(
        <div className="w-screen pt-[20%] aspect-video absolute text-white px-12 bg-gradient-to-r from-black ">
            <h2 className="font-bold text-xl md:text-6xl">{title}</h2>
            <p className="hidden md:inline-block py-6 text-lg w-2/4">{overview}</p>
            <div className="">
            <button className="bg-white text-black  my-2 py-2 px-8 md:py-4 md:px-16 text-xl rounded-lg hover:bg-opacity-80">Play </button>
            <button className="hidden md:inline-block bg-gray-500 text-white  p-4 px-16 text-xl rounded-lg hover:bg-opacity-80 mx-2"> More Info</button>
            </div>
        </div>
    );
}

export default VidoeTitle;