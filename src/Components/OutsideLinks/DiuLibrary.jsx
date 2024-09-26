import { Helmet } from "react-helmet";

const DiuLibrary = () => {
    return (
        <div className="w-full h-screen">
            
            <Helmet>
                <title>DIU Library | CSE P DIU</title>
            </Helmet>
                <iframe
                    className="w-full h-full pt-[70px] sm:py-[60px]"
                    src='https://library.daffodilvarsity.edu.bd/'
                />
            <div className="py-[0px]" />
        </div>
    );
};

export default DiuLibrary;