import PropTypes from 'prop-types';
import '../css/Button.css'

const Button = ({
    children,
    onClick = () => { },
    disabled = false,
    variant = 'default',
    border = false
}) => {
    const classNames = `btn btn-${variant} ${border && `btn-border`}`;
    console.log('Props:', { children, onClick, disabled, variant, border });
    console.log('classNames:', classNames);
    return (
        <button className={classNames} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['default', 'dark', 'bright', 'warning']),
    border: PropTypes.bool,
};

// Optional: Keep defaultProps for clarity, though inline defaults handle it
Button.defaultProps = {
    onClick: () => { },
    disabled: false,
    variant: 'default',
    border: false,
};

export default Button;