import { cn } from '@/lib/utils/cn';

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description?: string;
  badgeColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionTitle({ 
  badge, 
  title, 
  highlightText, 
  description, 
  badgeColor = "bg-blue-100 text-blue-800",
  gradientFrom = "from-blue-600",
  gradientTo = "to-cyan-600",
  align = 'center',
  className
}: SectionTitleProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn(alignments[align], 'md:mb-10 mb-6', className)}>
      {badge && (
        <div className={cn(
          'inline-flex items-center text-sm font-bold px-6 py-3 rounded-full md:mb-6 mb-4 shadow-lg',
          badgeColor
        )}>
          {badge}
        </div>
      )}
      
      <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
        {highlightText && (
          <span className={cn(
            'ms-2 bg-gradient-to-r bg-clip-text text-transparent',
            gradientFrom,
            gradientTo
          )}>
            {highlightText}
          </span>
        )}
      </h2>
      
      {description && (
        <p className="md:text-base text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
