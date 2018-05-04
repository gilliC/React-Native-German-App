import React from 'react';
import {CHANGED_CONNECTION}from '../constants';

export function HandleConnectionChanged(connectionInfo) {
    let isConnected = false;
    if (connectionInfo.type !== "unknown" && connectionInfo.type !== "none")
        isConnected = true;
    return({
        type: CHANGED_CONNECTION,
        payload: {isConnected}
    });

}