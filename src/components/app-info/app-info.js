import './app-info.css'

const AppInfo= ({employer,increased }) =>{
    return(
        <div className="app-info">
            <h1>учёт сотрудников в кампании N</h1>
            <h2>общее число сатрудиников:{employer}</h2>
            <h2>премия палучат:{increased}</h2>
        </div>
    )
}

export default AppInfo