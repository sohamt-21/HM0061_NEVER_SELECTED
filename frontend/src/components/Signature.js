import React from 'react'
import { ReactFlashlight } from 'react-flashlight';
import { useState } from 'react';

const Signature = () => {

    return (
        <div className='signature-container'>
            <div className="signature-top">
                <ReactFlashlight
                    enableMouse={false}
                    showCursor={true}
                >
                    <div style={{height:'400px'}}>
                        <h1 style={{ fontSize: '60px', color: 'wheat' }}>hello is it inbdhsjkcdbz <br /> chdscb chdjskbc</h1>
                    </div>
                </ReactFlashlight>
            </div>

        </div>

    )
}

export default Signature