import React from 'react';

export const ArrowUpSvg = props => (
    <svg width={24} height={24} fill="#fff" fillRule="evenodd" clipRule="evenodd" {...props}>
        <path d="M11 2.206L4.765 9.734 4 9.089l7.521-9 7.479 9-.764.646L12 2.205v21.884h-1V2.206z" />
    </svg>
);

export const ArrowDownSvg = props => (
    <svg width="24" height="24" fill="#fff" {...props} fillRule="evenodd" clipRule="evenodd">
        <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
    </svg>
);
