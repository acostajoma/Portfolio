const CertificationCard = ({imageSrc, title, description, certHref}) => {
    return (
        <div className="max-w-[20rem] shadow-2xl rounded-2xl">
            <img className="min-w-full" src={imageSrc} alt="Project image" />
            <div className="p-2">
                <h3 className="text-lg mb-2 font-bold">{title}</h3>
                <p>{description}</p>
                <a  className="block bg-sky-600 text-white text-lg rounded-xl p-2 mt-2 font-bold hover:bg-sky-400" rel="noopener noreferrer" target={"_blank"} href={certHref}>View Here</a>
            </div>
        </div>
    )
}

export default CertificationCard