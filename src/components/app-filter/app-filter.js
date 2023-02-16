import './app-filter.css';

const AppFilter = (props) => {

    const buttonData = [

        {name: 'all', label: 'все сотрудники'},
        {name: 'rice', label: 'на повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
    ]

    const buttons = buttonData.map(({name, label})=> {
        const activ = props.filter === name;
        const clazz = activ ? 'btn-light' : "btn btn-outline-light";
        return      <button 
                        onClick={()=>props.onFilterSelect(name)}
                        key={name} 
                        className={`btn ${clazz}`} 
                        type="button" 
                        data-toggle="">
                        {label}
                    </button> 
    })
    return(
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter