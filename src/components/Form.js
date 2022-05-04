import React from 'react'

export default function Form(props) {
  const { children, ...other } = props;

  return (
    <form noValidate autoComplete="off" {...other}>
      {children}
    </form>
  )
}

//Component that will help around wrapping the form.