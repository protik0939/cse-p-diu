import { Helmet } from "react-helmet";


const Diu = () => {
    return (
        <div className="w-full h-screen">
            
            <Helmet>
                <title>DIU | CSE P DIU</title>
            </Helmet>
                <iframe
                    className="w-full h-full pt-[70px] sm:py-[60px]"
                    src='https://daffodilvarsity.edu.bd/'
                />
            <div className="py-[0px]" />
        </div>
    );
};

export default Diu;