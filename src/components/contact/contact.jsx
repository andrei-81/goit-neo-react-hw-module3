import css from './contact.module.css';

const Contact = ({ data: {id, name, number}, onDelete }) => {
    return (
            <div className={css.contact}>
                <div className={css.info}>
                    <p className={css.name}>🧑 {name}</p>
                    <p className={css.number}>📞 {number}</p>
                </div>
                <button className={css.deleteButton} onClick={() => onDelete(id)}>
                    Delete
                </button>
            </div>
    )
}

export default Contact