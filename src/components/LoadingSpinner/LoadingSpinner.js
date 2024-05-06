import "./LoadingSpinner.scss";


const LoadingSpinner = () => {

    return (
        <div className="loading-spinner__container">
            <div className="loading-spinner__text">
                <p>Loading...</p>
            </div>
            <div className="loading-spinner__spinner">
            </div>
        </div>
    );
};

export default LoadingSpinner;