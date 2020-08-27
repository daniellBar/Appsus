


export function EmailInboxNav({ onSetFilter }) {

    // value={this.state.value}


    return (

        <div className="inbox-nav">
            <select className="filterByRead" onChange={(ev) => {
                onSetFilter(ev.target.value)
            }} >
                <option value="read">Read</option>
                <option value="notRead">Not Read</option>
            </select>

            
                <input className="email-search" type="text" placeholder="search mail" onChange={(ev) => {
                    onSetFilter(ev.target.value)
                }} />

           
        </div>
    )

}


