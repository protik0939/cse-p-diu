import { AiOutlineClose } from "react-icons/ai";
import { SiSpotify } from "react-icons/si";

const SpotifyPlayer = () => {
    return (

        <button className="absolute bottom-20 left-[27%] sm:left-4 sm:bottom-20" onClick={() => document.getElementById('spotifyPlayer').showModal()}>
            <button className="absolute text-4xl text-[#1DB954] hover:scale-110 z-10" ><SiSpotify /></button>
            <div className="absolute w-9 h-9 rounded-2xl text-[#fff] hover:scale-110 spin bg-[#fff]" />
            <dialog id="spotifyPlayer" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><AiOutlineClose /></button>
                    </form>
                    <h3 className="font-bold text-lg mb-4">Vibe while browsing</h3>
                    <div className="">
                        <iframe className="rounded-2xl"
                            src="https://open.spotify.com/embed/playlist/064hNrvFYJFUvt5fWMgdtq?utm_source=generator"
                            width="100%"
                            height="400px"
                            allow="encrypted-media"
                            title="Spotify Player"
                        ></iframe>
                    </div>


                </div>
            </dialog>

        </button>

    );
};

export default SpotifyPlayer;
