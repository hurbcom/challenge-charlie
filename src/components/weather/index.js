import React, { Fragment } from "react";
import { Search } from "../../components";
import { Today, Tomorrow, AfterTomorrow, Icon } from "./Stylesheet";
import useContainer from "./Container";

const Component = (props) => {

    const { weather, convertUnit } = useContainer(props);

    const unit = weather?.type == 'metric' ? '°C' : '°F';

    return (
        <Fragment>
            {weather &&
                <Fragment>
                    <Today color={weather?.colors[0]} className="p-vertical__40">
                        <div className="p-bottom__20">
                            <Search />
                        </div>
                        <div className="text-align___center">
                            <h2>{props.city}</h2>
                            <h4>Hoje</h4>
                        </div>
                        <div className="flex-direction__row flex-justify__center">
                            <div className="text-align___center p-horizontal__20">
                                <Icon height={140} src={weather.today.icon} alt={"Today"} />
                                <h1 onClick={convertUnit} className="cursor__pointer">{weather.today.temp}{unit}</h1>
                                <h4>{weather.today.weather?.description.toUpperCase()}</h4>
                            </div>
                            <div className="flex-direction__column flex-justify__center p-horizontal__20">
                                <p>Vento: <strong>{weather.today.wind_deg} {weather.today.wind_speed}</strong></p>
                                <p>Humidade: <strong>{weather.today.humidity}</strong></p>
                                <p>Pressão: <strong>{weather.today.pressure}</strong></p>
                            </div>
                        </div>
                    </Today>
                    <Tomorrow color={weather?.colors[1]}>
                        <div>
                            <h2>Amanhã</h2>
                        </div>
                        <div>
                            <h2>{weather.tomorrow.temp}{unit}</h2>
                        </div>
                        <div>
                            <Icon height={35} src={weather.tomorrow.icon} alt={"Tomorrow"} />
                        </div>
                    </Tomorrow>
                    <AfterTomorrow color={weather?.colors[2]}>
                        <div>
                            <h2>Depois de amanhã</h2>
                        </div>
                        <div>
                            <h2>{weather.afterTomorrow.temp}{unit}</h2>
                        </div>
                        <div>
                            <Icon height={35} src={weather.afterTomorrow.icon} alt={"After tomorrow"} />
                        </div>
                    </AfterTomorrow>
                </Fragment>
            }
        </Fragment>
    );
};

export default Component;