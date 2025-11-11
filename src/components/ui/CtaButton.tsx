import React from 'react';
import { cn } from '@/lib/utils';

const CTA_BUTTON_VARIANTS = {
  heroPrimary: 'bg-white text-sky-600 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(2,132,199,0.35)]',
  heroSecondary: 'bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20 cursor-pointer',
  ctaPrimary: 'bg-sky-400 text-slate-950 hover:bg-sky-300',
  ctaSecondary: 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20',
} as const;

export type CtaVariant = keyof typeof CTA_BUTTON_VARIANTS;

type BaseProps = {
  variant?: CtaVariant;
  showPulse?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = BaseProps &
  React.ComponentPropsWithoutRef<'a'> & {
    href: string;
  };

type ButtonProps = BaseProps &
  React.ComponentPropsWithoutRef<'button'> & {
    href?: undefined;
  };

export type CtaButtonProps = AnchorProps | ButtonProps;

const CtaButton = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  CtaButtonProps
>(({ variant = 'ctaPrimary', className, children, showPulse, leadingIcon, trailingIcon, ...rest }, ref) => {
  const classes = cn(
    'group inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-3 text-base font-semibold transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
    CTA_BUTTON_VARIANTS[variant],
    className,
  );

  const content = (
    <>
      {leadingIcon ? (
        <span aria-hidden className='flex items-center'>
          {leadingIcon}
        </span>
      ) : null}
      <span>{children}</span>
      {showPulse ? (
        <span className='relative inline-flex h-2 w-2'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75' />
          <span className='relative inline-flex h-2 w-2 rounded-full bg-sky-500' />
        </span>
      ) : null}
      {trailingIcon}
    </>
  );

  if ('href' in rest && rest.href) {
    const { href, ...anchorProps } = rest as AnchorProps;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        href={href}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  const buttonProps = rest as ButtonProps;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      type={buttonProps.type ?? 'button'}
      {...buttonProps}
    >
      {content}
    </button>
  );
});

CtaButton.displayName = 'CtaButton';

export default CtaButton;
