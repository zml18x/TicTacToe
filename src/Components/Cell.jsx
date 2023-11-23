import '../Style/Cell.css';

export const Cell = ({onClick,value}) => {
    return <button className="cell" onClick={onClick}>{value}</button>
};