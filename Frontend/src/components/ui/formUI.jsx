export const Button = ({ children, className, ...props }) => (
    <button
      className={`bg-rose-600 hover:bg-rose-700 transition-all duration-300 font-bold rounded-3xl text-white px-6 py-3 shadow-md hover:shadow-lg active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
  
  export const Input = ({ className, ...props }) => (
    <input
      className={`border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-400 transition-all duration-300 p-3 rounded-lg w-full shadow-sm ${className}`}
      {...props}
    />
  );
  
  export const Select = ({ children, className, ...props }) => (
    <select
      className={`border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-400 transition-all duration-300 p-3 rounded-lg w-full shadow-sm ${className}`}
      {...props}
    >
      {children}
    </select>
  );
  
  export const SelectItem = ({ value, children }) => (
    <option value={value} className="bg-white text-gray-700 hover:bg-gray-100">
      {children}
    </option>
  );
  
  export const Textarea = ({ className, ...props }) => (
    <textarea
      className={`border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-400 transition-all duration-300 p-3 rounded-lg w-full shadow-sm ${className}`}
      {...props}
    />
  );
  