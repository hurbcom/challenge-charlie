import { useState } from "react";
import { usePopperTooltip } from 'react-popper-tooltip'
import 'react-popper-tooltip/dist/styles.css'

const ToggleText = ({ first, second }: any) => {
    const [word, setWord] = useState(first);
    const {
        getArrowProps,
        getTooltipProps,
        setTooltipRef,
        setTriggerRef,
        visible
    } = usePopperTooltip({}, {
        placement: 'left'
    })


    function changeText() {
        setWord(word === first ? second : first);
    }

    return (
        <>
            <div onClick={changeText} className="cursor-pointer">
                <p className="text-white text-lg cursor-pointer" ref={setTriggerRef}>{word}</p>
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