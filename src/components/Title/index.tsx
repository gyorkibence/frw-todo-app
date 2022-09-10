import React, { FC } from 'react';

import Props from './types';

const Title: FC<Props> = ({ title, className = '' }) => <div className={`text-3xl text-blue-400 mb-4 ${className}`}>{title}</div>;

export default Title;
