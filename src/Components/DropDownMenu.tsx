import React from "react"

function DropDownMenu({ data, loading, ...rest }: any, ref: React.ForwardedRef<any>) {
    return (
        <div ref={ref} {...rest}>
            {loading && <div>Loading...</div>}
            {data.map((option: any) => (
                <div key={option.id}>
                    {option.value}
                </div>
            ))}
        </div>
    )
}

export default React.forwardRef(DropDownMenu)