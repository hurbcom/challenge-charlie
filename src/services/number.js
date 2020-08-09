export default function formatNumber(number, digits) {
    return number.toLocaleString(navigator.language, { maximumFractionDigits: digits });
}