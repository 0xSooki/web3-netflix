import React from 'react'
import { Button } from 'web3uikit'

function AddToMyListButton(_props: any) {
  return (
    <Button
    id="test-button-primary"
    text="Add to my list"
    theme="translucent"
    type="button"
    onClick={_props.click}
  />
  )
}

export default AddToMyListButton