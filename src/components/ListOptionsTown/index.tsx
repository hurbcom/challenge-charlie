import { LocationProps } from "../../hooks/useGeolocation"

import { OptionsTownProps } from "../../utils/getOptionsTown"

import * as Styles from './styles'

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
        <Styles.OptionsTown>
            {optionsTown.towns?.map((town, index) => (
                <Styles.ItemList
                    key={index}
                    onClick={() => handleOnclickList({
                        loaded: optionsTown.loaded,
                        towns: [town],
                    })}
                >
                    {town.direction}
                </Styles.ItemList>
            ))}
        </Styles.OptionsTown>
    )
}

export default ListOptionsTown;