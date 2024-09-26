import { Helmet } from "react-helmet";

const DiuNotice = () => {

    return (
        <div className="w-full h-screen">
            
            <Helmet>
                <title>DIU Notice | CSE P DIU</title>
            </Helmet>
                <iframe
                    className="w-full h-full pt-[70px] sm:py-[60px]"
                    src='https://daffodilvarsity.edu.bd/noticeboard'
                />
            <div className="py-[0px]" />
        </div>
    );
};

export default DiuNotice;