import React$1, { useState, useRef, useEffect } from 'react';
import Text$1 from '../../atoms/Text/Text.js';

const Select = ({ options = [], label = "Please select an option ...", onOptionSelected: handler, renderOption, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const labelRef = useRef(null);
    const [overlayTop, setOverlayTop] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const onOptionSelected = (option, optionIndex) => {
        if (handler) {
            handler(option, optionIndex);
        }
        setSelectedIndex(optionIndex);
        setIsOpen(false);
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);
    let selectedOption = null;
    if (selectedIndex !== null) {
        selectedOption = options[selectedIndex];
    }
    return (React$1.createElement("div", { className: "dse-select" },
        React$1.createElement("button", { "aria-controls": "dse-select-list", "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, ref: labelRef, className: "dse-select__label", onClick: () => onLabelClick() },
            React$1.createElement(Text$1, null, selectedOption === null ? label : selectedOption.label),
            React$1.createElement("svg", { className: `dse-select__caret ${isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"}`, width: "1rem", height: "1rem", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", stroke: "currentColor" },
                React$1.createElement("path", { d: "M19 9l-7 7-7-7" }))),
        isOpen ? (React$1.createElement("ul", { role: 'menu', "aria-hidden": isOpen ? undefined : false, id: 'dse-select-list', style: { top: overlayTop }, className: "dse-select__overlay" }, options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;
            const renderOptionProps = {
                option,
                isSelected,
                getOptionRecommendedProps: (overrideProps = {}) => {
                    return {
                        className: `dse-select__option
                        ${isSelected ? "dse-select__option--selected" : ""}
                    `,
                        key: option.value,
                        onClick: () => onOptionSelected(option, optionIndex),
                        ...overrideProps,
                    };
                },
            };
            if (renderOption) {
                return renderOption(renderOptionProps);
            }
            return (React$1.createElement("li", { className: `dse-select__option
                    ${isSelected ? "dse-select__option--selected" : ""}
                `, onClick: () => onOptionSelected(option, optionIndex), key: option.value },
                React$1.createElement(Text$1, null, option.label),
                isSelected ? (React$1.createElement("svg", { width: "1rem", height: "1rem", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", stroke: "currentColor" },
                    React$1.createElement("path", { d: "M5 13l4 4L19 7" }))) : null));
        }))) : null));
};

export default Select;
//# sourceMappingURL=Select.js.map
