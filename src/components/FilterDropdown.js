import React from 'react';

const FilterDropdown = ({
  label,
  value,
  onChange,
  options,
  icon
}) => {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            block w-full ${icon ? 'pl-10' : 'pl-3'} pr-10 py-2.5
            bg-white border border-gray-300 rounded-lg
            focus:ring-2 focus:ring-primary-500 focus:border-primary-500
            text-gray-900 text-sm
            transition-colors duration-200 ease-in-out
            shadow-sm hover:shadow-md
            cursor-pointer
            appearance-none
          `}
          aria-label={`Filter by ${label.toLowerCase()}`}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
