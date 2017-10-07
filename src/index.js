import React from 'react'
import { css, styles } from 'linaria'

const title = css`
  color: #000;
`

const LineClamp = () => <h1 {...styles(title)}>LineClamp</h1>

export default LineClamp
