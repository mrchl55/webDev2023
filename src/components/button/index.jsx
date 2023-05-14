import './index.css'

const Button = ({type, onClick, theme = "white", link, disabled, text, className = ''}) => {

    const buttonStyles = `btn ${theme} ${className}`

    if (link) {
        return <a href={link} className={buttonStyles}>{text}</a>
    }
    return <button type={type} className={buttonStyles} disabled={disabled} onClick={onClick}>{text}</button>;
}

export default Button;
