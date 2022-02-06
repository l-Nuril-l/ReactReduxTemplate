import { connect } from "react-redux"


function CharCounter(props) {
    return (
        <div>
            <h1>{props.count}</h1>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        count: String.fromCharCode(state.count)
    }
}

export default connect(mapStateToProps)(CharCounter)