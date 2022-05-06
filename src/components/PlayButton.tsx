import React from 'react'
import { Button } from 'web3uikit'

function PlayButton(_props: any) {
  return (
    <Button
    id="test-button-primary"
    text="Play"
    theme="secondary"
    type="button"
    onClick={_props.click}
  />
  )
}

export default PlayButton