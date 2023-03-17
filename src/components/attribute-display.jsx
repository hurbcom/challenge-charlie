const AttributeDisplay = ({ label, value }) => (
    <div className="flex justify-between sm:justify-start text-sm mx-auto sm:mx-0 w-40 sm:w-auto">
        <span className="mr-2">{label}:</span>
        <span>{value}</span>
    </div>
);

export default AttributeDisplay