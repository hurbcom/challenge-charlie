import classNames from "@/utils/classnames";

const colorShade = {
    0: "300",
    1: "500",
    2: "700",
};

const AttributeDisplay = ({ label, value }) => (
    <div className="flex text-sm">
        <span className="mr-2">{label}:</span>
        <span>{value}</span>
    </div>
);

const WeatherForecastItem = ({ day, index, bgColor }) => {
    return (
        <div
            className={classNames(
                "w-full h-full flex p-2 text-white bg-yellow-400/70",
                bgColor
            )}
        >
            <div className="w-[55%] flex flex-col justify-center items-center">
                .flex-1
            </div>
            <div className="w-[45%] flex flex-col h-full">
                <div className="flex flex-col mb-4">
                    <span className="text-lg">{day.toUpperCase()}</span>
                    <span className="">32C</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl mb-2">Ensolarado</span>
                    <AttributeDisplay label="Vento" value="NO 6.4km/h" />
                    <AttributeDisplay label="Umidade" value="78%" />
                    <AttributeDisplay label="Pressao" value="1003hPA" />
                </div>
            </div>
        </div>
    );
};

export default WeatherForecastItem;
