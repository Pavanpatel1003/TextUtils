import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    return (
        <div style={{ backgroundColor: "#000052ad", fontSize: "20px", textAlign: "center", color:"#fff" }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
            </div>}
        </div>
    )
}
