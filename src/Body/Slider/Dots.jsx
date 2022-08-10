function Dots(props) {

    const render = () => {
        var output = [];

        for (var i = 0; i < props.number; i++) {
            output.push(
                <i key={i} className="fa-solid fa-circle"></i>
            );
        }

        return output;
    }

    return (
        <>
            { render() }
        </>
    );
}

export default Dots;