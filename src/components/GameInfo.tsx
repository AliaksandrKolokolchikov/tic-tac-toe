
type GameInfo = {
    status:string
    onReset:() => void
}

export const GameInfo = ({status, onReset}:GameInfo) => {
    return (
        <div className="game-info">
            <div>{status}</div>
            <button onClick={onReset}>Reset</button>
        </div>
    );
};
