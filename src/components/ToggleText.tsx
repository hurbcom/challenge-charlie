import { useState } from "react";
import { usePopperTooltip } from 'react-popper-tooltip'
import 'react-popper-tooltip/dist/styles.css'

const ToggleText = ({ first, second }: { first: string, second: string }) => {
    const [showFirstWord, setShowFirstWord] = useState(true);
    const {
        getArrowProps,
        getTooltipProps,
        setTooltipRef,
        setTriggerRef,
        visible
    } = usePopperTooltip({}, {
        placement: 'left'
    })

    return (
        <>
            <div onClick={() => setShowFirstWord(old => !old)} className="cursor-pointer" data-testid="toggle">
                <p className="text-white text-lg cursor-pointer" ref={setTriggerRef}>{showFirstWord ? first : second}</p>
            </div>
            {visible &&
                <div
                    ref={setTooltipRef}
                    {...getTooltipProps({ className: 'tooltip-container' })}>
                    <p className="text-slate-50 text-xs">Toque para mudar as medidas!</p>
                    <div {...getArrowProps({ className: 'tooltip-arrow' })} />
                </div >}
        </>
    );
}

export default ToggleText