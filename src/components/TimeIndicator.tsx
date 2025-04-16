
import React from 'react';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimeIndicatorProps {
  timestamp: Date | string; // Accept Date object or ISO string
  showIcon?: boolean;
  showBadge?: boolean;
  className?: string;
}

const TimeIndicator = ({ 
  timestamp, 
  showIcon = true, 
  showBadge = false,
  className 
}: TimeIndicatorProps) => {
  // Convert string to Date if needed
  const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
  
  // Calculate time difference in milliseconds
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  
  // Convert to appropriate time unit
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  let timeAgo: string;
  
  if (diffMinutes < 1) {
    timeAgo = 'Just now';
  } else if (diffMinutes < 60) {
    timeAgo = `${diffMinutes}m ago`;
  } else if (diffHours < 24) {
    timeAgo = `${diffHours}h ago`;
  } else if (diffDays < 7) {
    timeAgo = `${diffDays}d ago`;
  } else {
    // Format date for older content
    timeAgo = date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  }
  
  if (showBadge) {
    return (
      <div className={cn(
        "bg-slate/50 text-dimgray px-3 py-2 rounded-md text-sm font-medium inline-flex items-center",
        className
      )}>
        {showIcon && <Clock size={14} className="mr-1" />}
        {timeAgo}
      </div>
    );
  }
  
  return (
    <span className={cn("text-dimgray inline-flex items-center text-xs", className)}>
      {showIcon && <Clock size={12} className="mr-1" />}
      {timeAgo}
    </span>
  );
};

export default TimeIndicator;
