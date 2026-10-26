export default function ButtonGitHub({buttonName, type = 'buttons',href, ...props}){
    return(
        // <button type={type} {...props}>{buttonName}</button>
        <a href={href} target="_blank" rel="noreferrer" {...props}>{buttonName}</a>
    );
}