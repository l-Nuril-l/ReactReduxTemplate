import { connect } from "react-redux"
import { decrement,increment,async_increment,async_decrement } from "../actionCreators/actionCreators"

function Counter(props) {
    return (
        <div>
            <h1>{props.count}</h1>
            <button className="btn btn-warning mx-1" onClick={() => props.async_increment()}>Async Increment</button>
            <button className="btn btn-success mx-1" onClick={() => props.increment()}>Increment</button>
            <button className="btn btn-danger mx-1" onClick={() => props.decrement()}>Decrement</button>
            <button className="btn btn-warning mx-1" onClick={() => props.async_decrement()}>Async Decrement</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        async_increment: () => dispatch(async_increment()),
        async_decrement: () => dispatch(async_decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)