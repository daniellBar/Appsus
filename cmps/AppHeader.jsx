
const { NavLink, withRouter } = ReactRouterDOM

function _AppHeader(props) {
    function goBack() {
        props.history.goBack()
    }
    return (
        
        <nav className="main-nav">
            <NavLink exact activeClassName='active-nav' to="/">Home</NavLink>|
            <NavLink to="/mail">Mail</NavLink>|
            <NavLink to="/about">About</NavLink>|
            <button onClick={ goBack }>Back</button>
        </nav>
    )
}
export const AppHeader = withRouter(_AppHeader)