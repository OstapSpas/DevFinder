import Markdown from "react-markdown";


export default function BioCard({about}){
    return (
        <div className="card-content">
            <div className="card-title">
                <h2>Biography</h2>
            </div>
            <div className="card-about">
                {about ? (
                    <Markdown>{about}</Markdown>
                ): (
                    <p className="empty-info">{"This developer hasn't written a bio yet."}</p>
                )}
            </div>
        </div>
    );
}