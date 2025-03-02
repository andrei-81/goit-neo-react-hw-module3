import css from './searchBox.module.css';

const SearchBox = ({ filter, onFilter }) => {
    return (
        <div className={css.container}>
            <p className={css.label}>Find contacts by name</p>
            <input
                className={css.input}
                type="text"
                value={filter}
                onChange={(e) => onFilter(e.target.value)}
            />
        </div>
    )
}

export default SearchBox