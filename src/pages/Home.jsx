import React from 'react'
import { connect } from 'react-redux'

function Home(props) {


  return (<>
        <h1>{props.state.counterReducer}</h1>
  </>
  )
}

const mapStateToProps = (state) => {

    return {
        state: state
    }
}


export default connect(mapStateToProps)(Home)