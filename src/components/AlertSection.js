const AlertSection = ({ body }) => {
    return (
        <div className="p-4 text-center text-white bg-primary">
            <div className="max-w-lg mx-auto">
                <p>{body}</p>
            </div>
        </div>
    );
};

export default AlertSection;
