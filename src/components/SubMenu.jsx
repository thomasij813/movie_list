import Input from './Input.js';

const SubMenu = ({watchedToggle, handleSearch, handleToggle}) => {
    const updateFilter = (e) => {
        e.preventDefault();
        handleSearch(e.target.value);
    }

    return (
        <div className="ui secondary menu">
            <a className={watchedToggle === 'unwatched' ? "active item" : "item" }
                onClick={handleToggle}>
                    Unwatched
            </a>
            <a className={watchedToggle === 'watched' ? "active item" : "item" }
                onClick={handleToggle}>
                    Watched
            </a>
            <div className="right menu">
                <div className="ui input">
                    <input onChange={updateFilter} placeholder="Search..."/>
                </div>
            </div>
        </div>
    )
};

export default SubMenu