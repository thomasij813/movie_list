import Input from './Input.js';

const SubMenu = ({watchedToggle, handleSubmit, handleToggle}) => (
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
            <div className="item">
                <Input handleSubmit={handleSubmit} >Search</Input>
            </div>
        </div>
    </div>
);

export default SubMenu