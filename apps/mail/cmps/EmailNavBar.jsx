const { Link,NavLink, withRouter } = ReactRouterDOM


function _EmailNavBar(props) {
    function goBack() {
        props.history.goBack()
    }
    return (
        <nav className="mail-navbar">
            <h1>i am mail navbar</h1>
            <Link to={`/mail/compose`}>compose mail</Link>
            
            <h2>filter box</h2>
            <h2>read mail precent</h2>
        </nav>
    )
}
export const EmailNavBar = withRouter(_EmailNavBar)