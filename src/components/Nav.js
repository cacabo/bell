import React from 'react'
import s from 'styled-components'

import { BLACK } from '../shared/colors'

const Bars = s.div`
    width: 48px;
    position: fixed;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
`

const Bar = s.span`
    width: 100%;
    height: 6px;
    display: block;
    background: ${BLACK};
    margin-bottom: 10px;
`

export default () => (
    <Bars>
        <Bar />
        <Bar />
        <Bar />
    </Bars>
)