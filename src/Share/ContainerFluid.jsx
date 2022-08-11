function ContainerFluid(props) {

    return (
        <div className="container-fluid h-100">
            <div className={
                "row h-100 " + (props.classRow ?? "")
            }>
                { props.children }
            </div>
        </div>
    );
}

export default ContainerFluid;