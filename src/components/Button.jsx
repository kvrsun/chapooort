import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ to, href, children, variant = 'primary' }) {
  const className = `button button--${variant}`;

  if (href) {
    return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
  }

  return <Link className={className} to={to}>{children}</Link>;
}
