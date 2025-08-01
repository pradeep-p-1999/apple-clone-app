'use client';

import { useState } from 'react';
import {
  CheckCircle,
  XCircle,
  HelpCircle,
  PlusCircle,
  Ban,
  MinusCircle,
} from 'lucide-react';

type Mode = 'primary' | 'action';

type Props = {
  mode: Mode;
  initialValue?: string;
  onChange?: (value: string) => void;
};

const primaryOptions = ['select', 'disable'];
const actionOptions = ['add', 'remove'];

export default function DropdownActionButton({
  mode,
  initialValue = '',
  onChange,
}: Props) {
  const [selected, setSelected] = useState(initialValue);

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  const options = mode === 'primary' ? primaryOptions : actionOptions;

  const getIcon = () => {
    switch (selected) {
      case 'select':
        return <CheckCircle className="text-green-600 w-5 h-5" />;
      case 'disable':
        return <Ban className="text-gray-600 w-5 h-5" />;
      case 'add':
        return <PlusCircle className="text-blue-600 w-5 h-5" />;
      case 'remove':
        return <MinusCircle className="text-red-600 w-5 h-5" />;
      default:
        return <HelpCircle className="text-gray-400 w-5 h-5" />;
    }
  };

  return (
    <div className="flex items-center gap-4">
      <select
        className="border rounded px-3 py-1 text-sm"
        value={selected}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">Select Option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <button
        className="p-2 rounded border shadow-sm hover:bg-gray-100 transition"
        aria-label="Status Icon"
      >
        {getIcon()}
      </button>
    </div>
  );
}
