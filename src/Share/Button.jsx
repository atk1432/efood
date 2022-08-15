import { Link } from 'react-router-dom';


function Button(props) {

    return (
        <Link
            className={ props.className }
            style={{
                color: props.color ?? '#fff',
                backgroundColor: props.bgColor ?? 'var(--bs-primary)', 
                width: props.w,
                height: props.h,
                fontSize: props.fontSize,
                padding: props.padding ?? '10px 12px',
                fontWeight: props.weight ?? 900,
                borderRadius: props.br ?? 10,
                display: props.display ?? 'inline-block',
                border: props.border
            }}
            to={ props.to ?? '#' }
        >
            { props.children }
        </Link>
    )
}

export default Button;