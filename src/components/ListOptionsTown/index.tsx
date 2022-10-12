import { LocationProps } from "../../hooks/useGeolocation"

import { OptionsTownProps } from "../../utils/getOptionsTown"

import "./styles.css"

interface ListOptionsTownProps {
    optionsTown: OptionsTownProps
    setOptionsTown: (value: OptionsTownProps) => void
    setInputTown: (value: string) => void
    setLocation: (value: LocationProps) => void
}

const ListOptionsTown: React.FC<ListOptionsTownProps> = ({
    optionsTown,
    setOptionsTown,
    setInputTown,
    setLocation,
}) => {
    const handleOnclickList = (optionsTown: OptionsTownProps) => {
        if(optionsTown.loaded && optionsTown.towns) {
            setInputTown(`${optionsTown.towns[0].direction.split(", ")[0]}, ${optionsTown.towns[0].direction.split(", ")[1]}`)

            setLocation({
                loaded: optionsTown.loaded,
                coordinates: {
                    latitude: optionsTown.towns[0].latitude,
                    longitude: optionsTown.towns[0].longitude,
                }
            })

            setOptionsTown({
                loaded: false
            })
        }
    }

    return (
        <ul className="options-town">
            {optionsTown.loaded && optionsTown.towns?.map((town, index) => (
                <li
                    key={index}
                    className="item-list"
                    onClick={() => handleOnclickList({
                        loaded: optionsTown.loaded,
                        towns: [town],
                    })}
                >
                    {town.direction}
                </li>
            ))}
        </ul>
    )
}

export default ListOptionsTown;