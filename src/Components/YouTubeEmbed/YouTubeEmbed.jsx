import PropTypes from 'prop-types';
const YouTubeEmbed = ({ url }) => {
    const getYouTubeEmbedUrl = (url) => {
        const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|embed)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
        const match = url.match(regex);
        const videoId = match ? match[1] : null;
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    };

    const embedUrl = getYouTubeEmbedUrl(url);

    return (
        <iframe 
            className="w-full h-[400px]" 
            src={embedUrl} 
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
        ></iframe>
    );
};

YouTubeEmbed.propTypes = {
    url: PropTypes.string.isRequired,
}

export default YouTubeEmbed;
