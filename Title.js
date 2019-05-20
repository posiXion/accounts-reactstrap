import * as React from "react";
import PropTypes from 'prop-types'
// import { Header } from 'semantic-ui-react'

const Title = ({ text }) => {
  return (
    // <Header
    //   content={text}
    //   size='large'
    // />
    <h3 className="header">{text}</h3>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
