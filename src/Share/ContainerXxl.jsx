function ContainerXxl(props) {

    return (
        <div className={
            `container-xxl h-100 ${props.classContainer ?? ''}`
        }>
            <div className={
                "row h-100 " + (props.classRow ?? "")
            }>
                { props.children }
            </div>
        </div>
    );
}

export default ContainerXxl;