
type SquareProps = {
    value: number;
    onClick?: () => void;
}

export const Square = ({value, onClick}:SquareProps) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};
