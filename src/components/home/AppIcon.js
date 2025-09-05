function AppIcon(props) {
    const { link, icon, label } = props;
    return (
        <a href={link}>
            <i className={icon} />
            <h2>{label}</h2>
        </a>
    );
}

export default AppIcon;