function StarsReview(props) {

    const render = () => {
        if (props.rate != 0) {
            var rate = parseFloat(props.rate).toFixed(1);
        } else {
            var rate = '0.0';
        }

        var output = [];
        // console.log(props.rate);

        if (rate.length === 3) {
            var key = 0;
            rate = rate.split('.');

            for (var i = 0; i < parseInt(rate[0]); i++) {
                output.push(<i key={key} className="fa-solid fa-star text-warning"></i>);
                key++;
            }

            if (output.length == 5) {
                return output;
            }

            if (parseInt(rate[1]) < 5) {
                output.push(<i key={key} className="fa-regular fa-star text-warning"></i>);
            } else {
                output.push(<i key={key} className="fa-solid fa-star-half-stroke text-warning"></i>);
            }

            key++;

            if (5 - (parseInt(rate[0]) + 1) > 0) {
                for (var i = 0; i < 5 - (parseInt(rate[0]) + 1); i++) {
                    output.push(<i key={key} className="fa-regular fa-star text-warning"></i>);
                    key++;
                }
            }
        }

        return output;
    }

    return (
        <>
            { render() }
        </>
    );
}

export default StarsReview;