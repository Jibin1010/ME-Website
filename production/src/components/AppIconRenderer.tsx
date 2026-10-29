'use client';

import React from 'react';
import * as Icons from 'lucide-react';

interface AppIconProps {
  name: string;
  className?: string;
  size?: number;
  color?: string;
}

export function AppIconRenderer({ name, className = 'w-6 h-6', size, color }: AppIconProps) {
  // @ts-expect-error dynamic access to lucide icons
  const IconComponent = Icons[name] || Icons.Box;

  return <IconComponent className={className} size={size} color={color} />;
}

