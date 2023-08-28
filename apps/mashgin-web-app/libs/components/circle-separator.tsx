import classNames from 'classnames';
import React from 'react';

export default function CircleSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={classNames(
        'w-1 h-1 rounded-full bg-zinc-500 -mt-1',
        className
      )}
      {...props}
    />
  );
}
